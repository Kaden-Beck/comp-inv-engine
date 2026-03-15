import type { State } from '../state.js';
import { parseFlags } from '../lib/cliHelpers/parseFlags.js';
import { prompt } from '../lib/cliHelpers/promptHelper.js';
import { getManufacturers, addManufacturer } from '../lib/dataConnect/dcAPI.js';
import { createManufacturerSchema } from '../schemas/manufacturer.schema.js';

export async function manufacturerCLI(
  state: State,
  ...args: string[]
): Promise<void> {
  const { positional } = parseFlags(args);
  const sub = positional[0];

  if (sub === 'ls') {
    await listManufacturers();
  } else if (sub === 'add') {
    await addManufacturerInteractive(state);
  } else {
    console.log(
      'Usage:\n  manufacturer ls\n  manufacturer add\n  manu ls\n  manu add',
    );
  }
}

async function listManufacturers(): Promise<void> {
  const result = await getManufacturers();
  const manufacturers = result.data.manufacturers;

  if (manufacturers.length === 0) {
    console.log('No manufacturers found.');
    return;
  }

  for (const m of manufacturers) {
    console.log(`- ${m.name}: ${m.description}`);
  }
}

async function addManufacturerInteractive(state: State): Promise<void> {
  const { readline } = state;

  const name = (await prompt(readline, 'Manufacturer name: ')).trim();
  if (!name) {
    console.log('Name is required.');
    return;
  }

  const description = (await prompt(readline, 'Description: ')).trim();
  if (!description) {
    console.log('Description is required.');
    return;
  }

  const vars = createManufacturerSchema.parse({ name, description });
  await addManufacturer(vars);
  console.log(`Manufacturer "${name}" created successfully.`);
}
