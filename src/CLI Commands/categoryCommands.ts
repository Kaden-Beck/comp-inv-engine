import type { State } from '../state.js';
import { parseFlags } from '../lib/cliHelpers/parseFlags.js';
import { prompt } from '../lib/cliHelpers/promptHelper.js';
import {
  getCategories,
  addCategory,
  getCategoryByName,
} from '../lib/dataConnect/dcAPI.js';
import {
  getChildCategoriesRecursive,
  getCategoryUUIDByName,
} from './printProducts.js';
import { createCategorySchema } from '../schemas/category.schema.js';

export async function categoryCLI(
  state: State,
  ...args: string[]
): Promise<void> {
  const { positional, flags } = parseFlags(args);
  const sub = positional[0];

  if (sub === 'ls') {
    await listCategories(flags);
  } else if (sub === 'add') {
    await addCategoryInteractive(state, flags);
  } else {
    console.log(
      'Usage:\n  category ls [-s|--shallow]\n  category add [-p|--parent <parentName>]',
    );
  }
}

async function listCategories(
  flags: Record<string, string | true>,
): Promise<void> {
  const result = await getCategories();
  const rootCategories = result.data.categories;

  if (rootCategories.length === 0) {
    console.log('No categories found.');
    return;
  }

  const shallow = flags['s'] === true || flags['shallow'] === true;

  for (const cat of rootCategories) {
    console.log(cat.name);
    if (!shallow) {
      const descendants = await getChildCategoriesRecursive(cat.id);
      for (const desc of descendants) {
        const indent = '  '.repeat(desc.depth);
        console.log(`${indent}${desc.name}`);
      }
    }
  }
}

async function addCategoryInteractive(
  state: State,
  flags: Record<string, string | true>,
): Promise<void> {
  const { readline } = state;

  const name = (await prompt(readline, 'Category name: ')).trim();
  if (!name) {
    console.log('Name is required.');
    return;
  }

  const description = (await prompt(readline, 'Description: ')).trim();
  if (!description) {
    console.log('Description is required.');
    return;
  }

  let parentId: string | undefined;
  const parentFlag = flags['p'] || flags['parent'];

  if (parentFlag && typeof parentFlag === 'string') {
    const resolved = await getCategoryUUIDByName(parentFlag);
    if (!resolved) {
      console.log(`Parent category "${parentFlag}" not found.`);
      return;
    }
    parentId = resolved;
  } else {
    const isTopLevel = (
      await prompt(readline, 'Is this a top-level category? (y/n): ')
    )
      .trim()
      .toLowerCase();
    if (isTopLevel !== 'y') {
      const parentName = (
        await prompt(readline, 'Parent category name: ')
      ).trim();
      if (!parentName) {
        console.log('Parent name is required.');
        return;
      }
      const resolved = await getCategoryUUIDByName(parentName);
      if (!resolved) {
        console.log(`Parent category "${parentName}" not found.`);
        return;
      }
      parentId = resolved;
    }
  }

  const isParent = !parentId;

  const vars = createCategorySchema.parse({
    name,
    description,
    isParent,
    parentId: parentId ?? null,
  });

  await addCategory(vars);
  console.log(`Category "${name}" created successfully.`);
}
