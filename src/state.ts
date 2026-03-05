import { createInterface, type Interface } from 'readline';
import { commandExit, commandHelp } from './basicCommands.js';
import {
  initializeInventoryManager,
  type InventoryManager,
} from './inventoryManager.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  inventoryManager: InventoryManager;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: 'exit',
      description: 'Exits the manager',
      callback: commandExit,
    },
    help: {
      name: 'help',
      description: 'Return a list of available commands',
      callback: commandHelp,
    },
  };
}

export function initState(): State {
  const readLineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'InvManager > ',
  });

  const categories = [
    {
      categoryName: 'Display',
      categoryDescription:
        'Computer peripherals that display visual output from a computer.',
      isParentCategory: true,
    },
    {
      categoryName: 'Peripheral',
      categoryDescription:
        'External input/output accessories that connect to a computer.',
      isParentCategory: true,
    },
  ];
  const manufacturers = [
    {
      name: 'ASUS',
      categoriesManufactured: ['Motherboard', 'GPU', 'Display', 'Peripheral'],
      logoURL: 'https://logo.clearbit.com/asus.com',
    },
    {
      name: 'MSI',
      categoriesManufactured: ['Motherboard', 'GPU', 'Display', 'PowerSupply'],
      logoURL: 'https://logo.clearbit.com/msi.com',
    },
  ];

  const inventoryManager: InventoryManager = initializeInventoryManager(
    categories,
    manufacturers,
  );

  const commandRecords: Record<string, CLICommand> = getCommands();

  return {
    readline: readLineInterface,
    commands: commandRecords,
    inventoryManager,
  };
}
