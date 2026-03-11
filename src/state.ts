import { createInterface, type Interface } from 'readline';
import { exitCLI, helpCLI } from './CLI Commands/basicCLI.js';
import { DataConnect } from 'firebase/data-connect';
import dcService from './lib/dataConnect/dcService.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  dcService: DataConnect;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: 'exit',
      description: 'Exits the manager',
      callback: exitCLI,
    },
    help: {
      name: 'help',
      description: 'Return a list of available commands',
      callback: helpCLI,
    },
    categories: 
  };
}

export function initState(): State {
  const readLineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'InvManager > ',
  });

  const commandRecords: Record<string, CLICommand> = getCommands();

  return {
    readline: readLineInterface,
    commands: commandRecords,
    dcService: dcService,
  };
}
