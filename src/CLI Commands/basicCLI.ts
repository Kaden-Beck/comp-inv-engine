import type { State } from '../state.js';

export function exitCLI(replState: State) {
  const { readline } = replState;

  console.log('Closing the program... Goodbye!');
  if (process.env.USE_EMULATOR === 'true') {
    console.log(
      'Note: Stop the Firebase emulator manually (Ctrl+C in its terminal).',
    );
  }
  readline.close();
  process.exit(0);
}

export function helpCLI(replState: State) {
  console.log(
    'Welcome to InvManager!\nUsage:\nThis CLI tool is used manage computer hardware inventory.\nCommands:',
  );
  const { commands } = replState;

  for (const commandKey in commands) {
    const name: string = commands[commandKey].name;
    const description: string = commands[commandKey].description;
    console.log(`${name}: ${description}`);
  }
}
