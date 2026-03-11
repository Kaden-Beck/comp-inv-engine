import { connectDataConnectEmulator } from 'firebase/data-connect';
import dcService from './lib/dataConnect/dcService.js';
import { seedEmulator } from './lib/dataConnect/seed.js';

connectDataConnectEmulator(dcService, 'localhost', 9399);

async function main() {
  try {
    console.log('Seeding Firebase Data Connect emulator...');
    await seedEmulator();
    console.log('Done.');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Seed failed:', err.message);
    } else {
      console.error('Seed failed:', err);
    }
    process.exit(1);
  }
  process.exit(0);
}

await main();
