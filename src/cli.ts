import { connectDataConnectEmulator } from 'firebase/data-connect';
import dcService from './lib/dataConnect/dcService.js';
import { startREPL } from './repl.js';

if (process.env.USE_EMULATOR === 'true') {
  connectDataConnectEmulator(dcService, 'localhost', 9399);
}

async function main() {
  try {
    await startREPL();
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
    } else {
      console.log(err);
    }
  }
}

await main();
