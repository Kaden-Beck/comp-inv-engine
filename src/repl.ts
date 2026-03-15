import { initState } from './state.js';

export function cleanInput(input: string) {
  const tokens: string[] = input.trim().split(/\s+/);

  // Only lowercase the command and subcommand (first two tokens).
  // Flag values (e.g. category names, SKUs) must preserve their original casing
  // because the DB does exact-match lookups on them.
  return tokens.map((token, i) => (i < 2 ? token.toLowerCase() : token));
}

export async function startREPL(): Promise<void> {
  const replState = initState();
  const { readline, commands } = replState;

  readline.setPrompt('InvManager > ');
  readline.prompt();

  for await (const line of readline) {
    const input = line.trim();

    if (input.trim() !== '') {
      const cleanOutput = cleanInput(input);
      const commandKey = cleanOutput[0];
      const [, ...args] = cleanOutput;

      if (commandKey in commands) {
        try {
          await commands[commandKey].callback(replState, ...args);
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          } else {
            console.error(`Unknown Error: ${err}`);
          }
        }
      } else {
        console.log('Unknown command');
      }
    }
    readline.prompt();
  }
}
