import { State } from '../state.js';
import {
  getChildCategories,
  GetChildCategoriesVariables,
  getCategoryByName,
  GetCategoryByNameVariables,
  getProductsByCategory,
  UUIDString,
} from '@dataconnect/generated';

export interface CategorySearchResult {
  id: UUIDString;
  name: string;
  depth: number;
}

export async function getCategoryUUIDByName(categoryName: string) {
  const vars: GetCategoryByNameVariables = { name: categoryName };

  const result = await getCategoryByName(vars);
  const category = result.data.categories[0];

  if (!category) {
    return null;
  }

  const { id } = category;

  return id;
}

export async function getProductsByCategoryName(
  state: State,
  categoryName: string,
) {
  const categoryId = await getCategoryUUIDByName(categoryName);

  if (!categoryId) {
    return null;
  }

  const args: { categoryId: UUIDString; limit?: number | null } = {
    categoryId: categoryId,
    limit: 50,
  };
  const result = await getProductsByCategory(args);
  return result.data;
}

export async function getChildCategoriesRecursive(
  parentId: UUIDString,
  depth = 1,
  visited = new Set<UUIDString>(),
): Promise<CategorySearchResult[]> {
  if (visited.has(parentId)) {
    return [];
  }

  visited.add(parentId);

  const args: GetChildCategoriesVariables = {
    parentId,
    limit: 100,
  };

  const result = await getChildCategories(args);
  const directChildren = result.data.categories;

  if (directChildren.length < 1) {
    return [];
  }

  const descendants: CategorySearchResult[] = [];

  for (const child of directChildren) {
    descendants.push({
      id: child.id,
      name: child.name,
      depth,
    });

    const nestedChildren = await getChildCategoriesRecursive(
      child.id,
      depth + 1,
      visited,
    );

    descendants.push(...nestedChildren);
  }

  return descendants;
}

export async function getCategoryTreeByName(categoryName: string) {
  const rootId = await getCategoryUUIDByName(categoryName);

  if (!rootId) {
    return null;
  }

  const descendants = await getChildCategoriesRecursive(rootId);

  return {
    rootId,
    descendants,
  };
}

export async function printProductsInCategoryByName(
  state: State,
  categoryName: string,
) {
  const result = await getProductsByCategoryName(state, categoryName);

  if (!result) {
    console.log('unable to locate a category by that name');
    return;
  }

  const products = result.products;

  if (products.length < 1) {
    console.log('No products in that category');
    return;
  }

  for (const product of products) {
    console.log(
      `- ${product.name} - ${product.manufacturer.name} |  Price: $${product.price ?? 0} | There are ${product.quantity} in stock.`,
    );
  }
}
