import type { State } from '../state.js';
import { parseFlags } from '../lib/cliHelpers/parseFlags.js';
import { prompt } from '../lib/cliHelpers/promptHelper.js';
import {
  searchProductsByName,
  getProductById,
  getProductsByManufacturer,
  getManufacturerByName,
  addProduct,
  updateProduct,
  addCPUSpecs,
  addGPUSpecs,
  addStorageSpecs,
  addPSUSpecs,
  addCPUCoolerSpecs,
  addCaseSpecs,
  addRAMSpecs,
  addMotherboardSpecs,
  getManufacturers,
} from '../lib/dataConnect/dcAPI.js';
import {
  getProductsByCategoryName,
  getCategoryUUIDByName,
} from './printProducts.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../schemas/product.schema.js';
import { createCpuSpecsSchema } from '../schemas/cpu.schema.js';
import { createGpuSpecsSchema } from '../schemas/gpu.schema.js';
import { createStorageSpecsSchema } from '../schemas/storage.schema.js';
import { createPsuSpecsSchema } from '../schemas/psu.schema.js';
import { createCpuCoolerSpecsSchema } from '../schemas/cpuCooler.schema.js';
import { createCaseSpecsSchema } from '../schemas/case.schema.js';
import { createRamSpecsSchema } from '../schemas/ram.schema.js';
import { createMotherboardSpecsSchema } from '../schemas/motherboard.schema.js';

export async function productCLI(
  state: State,
  ...args: string[]
): Promise<void> {
  const { positional, flags } = parseFlags(args);
  const sub = positional[0];

  if (sub === 'find') {
    await findProduct(state, positional, flags);
  } else if (sub === 'add') {
    const categoryName = positional[1];
    if (!categoryName) {
      console.log('Usage: product add <categoryName>');
      return;
    }
    await addProductInteractive(state, categoryName);
  } else if (sub === 'update') {
    const productName = positional[1];
    await updateProductInteractive(state, productName, flags);
  } else {
    console.log(
      'Usage:\n' +
        '  product find [-n <name>] [-i <id>] [-c <category>] [-m <manufacturer>]\n' +
        '  product add <categoryName>\n' +
        '  product update <productName> [--id <productId>]',
    );
  }
}

function printProduct(p: {
  id: string;
  name: string;
  sku: string;
  description?: string;
  price?: number | null;
  quantity: number;
  manufacturer: { name: string };
  category?: { name: string };
}): void {
  console.log(`  Name:         ${p.name}`);
  console.log(`  SKU:          ${p.sku}`);
  if (p.description) console.log(`  Description:  ${p.description}`);
  console.log(`  Price:        ${p.price != null ? `$${p.price}` : 'N/A'}`);
  console.log(`  Quantity:     ${p.quantity}`);
  console.log(`  Manufacturer: ${p.manufacturer.name}`);
  if (p.category) console.log(`  Category:     ${p.category.name}`);
  console.log(`  ID:           ${p.id}`);
}

async function findProduct(
  _state: State,
  positional: string[],
  flags: Record<string, string | true>,
): Promise<void> {
  const nameFlag = flags['n'] || flags['name'];
  const idFlag = flags['i'] || flags['id'];
  const categoryFlag = flags['c'] || flags['category'];
  const manufacturerFlag = flags['m'] || flags['manufacturer'];

  if (idFlag && typeof idFlag === 'string') {
    const result = await getProductById({ id: idFlag });
    const product = result.data.product;
    if (!product) {
      console.log('No product found with that ID.');
      return;
    }
    printProduct(product);
    return;
  }

  if (categoryFlag && typeof categoryFlag === 'string') {
    const result = await getProductsByCategoryName(_state, categoryFlag);
    if (!result) {
      console.log(`Category "${categoryFlag}" not found.`);
      return;
    }
    const products = result.products;
    if (products.length === 0) {
      console.log('No products in that category.');
      return;
    }
    for (const p of products) {
      console.log(
        `- ${p.name} | $${p.price ?? 'N/A'} | Qty: ${p.quantity} | ${p.manufacturer.name}`,
      );
    }
    return;
  }

  if (manufacturerFlag && typeof manufacturerFlag === 'string') {
    const manuResult = await getManufacturerByName({ name: manufacturerFlag });
    const manufacturer = manuResult.data.manufacturers[0];
    if (!manufacturer) {
      console.log(`Manufacturer "${manufacturerFlag}" not found.`);
      return;
    }
    const result = await getProductsByManufacturer({
      manufacturerId: manufacturer.id,
    });
    const products = result.data.products;
    if (products.length === 0) {
      console.log('No products found for that manufacturer.');
      return;
    }
    for (const p of products) {
      console.log(
        `- ${p.name} | SKU: ${p.sku} | $${p.price ?? 'N/A'} | Qty: ${p.quantity} | ${p.category.name}`,
      );
    }
    return;
  }

  const query = typeof nameFlag === 'string' ? nameFlag : (positional[1] ?? '');
  const result = await searchProductsByName({ nameQuery: query || null });
  const products = result.data.products;
  if (products.length === 0) {
    console.log('No products found.');
    return;
  }
  for (const p of products) {
    console.log('---');
    printProduct(p);
  }
}

async function addProductInteractive(
  state: State,
  categoryName: string,
): Promise<void> {
  const { readline } = state;

  const categoryId = await getCategoryUUIDByName(categoryName);
  if (!categoryId) {
    console.log(
      `Category "${categoryName}" not found. Run "category ls" to see available categories.`,
    );
    return;
  }

  console.log('\nAvailable manufacturers:');
  const manuList = await getManufacturers();
  for (const m of manuList.data.manufacturers) {
    console.log(`  - ${m.name}`);
  }

  const name = (await prompt(readline, '\nProduct name: ')).trim();
  if (!name) {
    console.log('Name is required.');
    return;
  }

  const sku = (await prompt(readline, 'SKU: ')).trim();
  if (!sku) {
    console.log('SKU is required.');
    return;
  }

  const description = (await prompt(readline, 'Description: ')).trim();
  if (!description) {
    console.log('Description is required.');
    return;
  }

  const colorRaw = (
    await prompt(readline, 'Color (optional, press Enter to skip): ')
  ).trim();
  const color = colorRaw || null;

  const msrpRaw = (await prompt(readline, 'MSRP ($): ')).trim();
  const msrp = parseFloat(msrpRaw);
  if (isNaN(msrp) || msrp <= 0) {
    console.log('Invalid MSRP.');
    return;
  }

  const priceRaw = (
    await prompt(readline, 'Sale price ($, optional, press Enter to skip): ')
  ).trim();
  const price = priceRaw ? parseFloat(priceRaw) : null;
  if (priceRaw && (isNaN(price!) || price! <= 0)) {
    console.log('Invalid price.');
    return;
  }

  const quantityRaw = (await prompt(readline, 'Quantity: ')).trim();
  const quantity = parseInt(quantityRaw, 10);
  if (isNaN(quantity) || quantity < 0) {
    console.log('Invalid quantity.');
    return;
  }

  const manufacturerName = (
    await prompt(readline, 'Manufacturer name: ')
  ).trim();
  const manuResult = await getManufacturerByName({ name: manufacturerName });
  const manufacturer = manuResult.data.manufacturers[0];
  if (!manufacturer) {
    console.log(`Manufacturer "${manufacturerName}" not found.`);
    return;
  }

  const vars = createProductSchema.parse({
    name,
    sku,
    description,
    color,
    msrp,
    price,
    quantity,
    manufacturerId: manufacturer.id,
    categoryId,
  });

  const result = await addProduct(vars);
  const productId = result.data.product_insert.id;
  console.log(`\nProduct "${name}" created (ID: ${productId})`);

  await promptSpecsByCategory(state, categoryName, productId);
}

async function promptSpecsByCategory(
  state: State,
  categoryName: string,
  productId: string,
): Promise<void> {
  const { readline } = state;
  const cat = categoryName.toLowerCase();

  if (cat === 'cpus' || cat === 'cpu') {
    const cores = parseInt((await prompt(readline, 'Cores: ')).trim(), 10);
    const threads = parseInt((await prompt(readline, 'Threads: ')).trim(), 10);
    const baseClockGHz = parseFloat(
      (await prompt(readline, 'Base clock (GHz): ')).trim(),
    );
    const boostRaw = (
      await prompt(readline, 'Boost clock (GHz, optional): ')
    ).trim();
    const boostClockGHz = boostRaw ? parseFloat(boostRaw) : null;
    const tdp = parseInt((await prompt(readline, 'TDP (W): ')).trim(), 10);
    const socketType = (
      await prompt(readline, 'Socket type (e.g. AM5, LGA1700): ')
    ).trim();
    const igRaw = (await prompt(readline, 'Integrated graphics? (y/n): '))
      .trim()
      .toLowerCase();
    const integratedGraphics = igRaw === 'y';
    const cacheRaw = (await prompt(readline, 'Cache (MB, optional): ')).trim();
    const cacheMB = cacheRaw ? parseInt(cacheRaw, 10) : null;

    const vars = createCpuSpecsSchema.parse({
      productId,
      cores,
      threads,
      baseClockGHz,
      boostClockGHz,
      tdp,
      socketType,
      integratedGraphics,
      cacheMB,
    });
    await addCPUSpecs(vars);
    console.log('CPU specs saved.');
  } else if (cat === 'gpus' || cat === 'gpu') {
    const chipset = (
      await prompt(readline, 'Chipset (e.g. RTX 4080): ')
    ).trim();
    const vramGB = parseInt((await prompt(readline, 'VRAM (GB): ')).trim(), 10);
    const vramType = (
      await prompt(readline, 'VRAM type (e.g. GDDR6X): ')
    ).trim();
    const coreRaw = (await prompt(readline, 'Core count (optional): ')).trim();
    const coreCount = coreRaw ? parseInt(coreRaw, 10) : null;
    const baseRaw = (
      await prompt(readline, 'Base clock (MHz, optional): ')
    ).trim();
    const baseClockMHz = baseRaw ? parseInt(baseRaw, 10) : null;
    const boostRaw = (
      await prompt(readline, 'Boost clock (MHz, optional): ')
    ).trim();
    const boostClockMHz = boostRaw ? parseInt(boostRaw, 10) : null;
    const tdp = parseInt((await prompt(readline, 'TDP (W): ')).trim(), 10);
    const lenRaw = (await prompt(readline, 'Length (MM, optional): ')).trim();
    const lengthMM = lenRaw ? parseInt(lenRaw, 10) : null;
    const powerConnectors =
      (
        await prompt(readline, 'Power connectors (e.g. 2x8-pin, optional): ')
      ).trim() || null;

    const vars = createGpuSpecsSchema.parse({
      productId,
      chipset,
      vramGB,
      vramType,
      coreCount,
      baseClockMHz,
      boostClockMHz,
      tdp,
      lengthMM,
      powerConnectors,
    });
    await addGPUSpecs(vars);
    console.log('GPU specs saved.');
  } else if (cat === 'storage' || cat === 'ssds' || cat === 'hdds') {
    const storageType = (
      await prompt(readline, 'Storage type (SSD/HDD/NVMe): ')
    ).trim();
    const capacityGB = parseInt(
      (await prompt(readline, 'Capacity (GB): ')).trim(),
      10,
    );
    const iface = (
      await prompt(readline, 'Interface (e.g. SATA, PCIe 4.0): ')
    ).trim();
    const formFactor = (
      await prompt(readline, 'Form factor (e.g. 2.5", M.2): ')
    ).trim();
    const readRaw = (
      await prompt(readline, 'Read speed (MB/s, optional): ')
    ).trim();
    const readSpeedMBps = readRaw ? parseInt(readRaw, 10) : null;
    const writeRaw = (
      await prompt(readline, 'Write speed (MB/s, optional): ')
    ).trim();
    const writeSpeedMBps = writeRaw ? parseInt(writeRaw, 10) : null;

    const vars = createStorageSpecsSchema.parse({
      productId,
      storageType,
      capacityGB,
      interface: iface,
      formFactor,
      readSpeedMBps,
      writeSpeedMBps,
    });
    await addStorageSpecs(vars);
    console.log('Storage specs saved.');
  } else if (cat === 'psus' || cat === 'psu') {
    const wattage = parseInt((await prompt(readline, 'Wattage: ')).trim(), 10);
    const efficiencyRating = (
      await prompt(readline, 'Efficiency rating (e.g. 80+ Gold): ')
    ).trim();
    const modular = (
      await prompt(readline, 'Modular type (Full/Semi/Non): ')
    ).trim();
    const formFactor = (
      await prompt(readline, 'Form factor (e.g. ATX): ')
    ).trim();

    const vars = createPsuSpecsSchema.parse({
      productId,
      wattage,
      efficiencyRating,
      modular,
      formFactor,
    });
    await addPSUSpecs(vars);
    console.log('PSU specs saved.');
  } else if (
    cat === 'cpu coolers' ||
    cat === 'coolers' ||
    cat === 'cpu-coolers'
  ) {
    const coolerType = (
      await prompt(readline, 'Cooler type (Air/AIO): ')
    ).trim();
    const radRaw = (
      await prompt(readline, 'Radiator size (MM, optional, AIO only): ')
    ).trim();
    const radiatorSizeMM = radRaw ? parseInt(radRaw, 10) : null;
    const fanRaw = (await prompt(readline, 'Fan size (MM, optional): ')).trim();
    const fanSizeMM = fanRaw ? parseInt(fanRaw, 10) : null;
    const maxTDP = parseInt(
      (await prompt(readline, 'Max TDP (W): ')).trim(),
      10,
    );
    const socketCompatibility = (
      await prompt(readline, 'Socket compatibility (e.g. AM5,LGA1700): ')
    ).trim();
    const heightMM = parseInt(
      (await prompt(readline, 'Height (MM): ')).trim(),
      10,
    );

    const vars = createCpuCoolerSpecsSchema.parse({
      productId,
      coolerType,
      radiatorSizeMM,
      fanSizeMM,
      maxTDP,
      socketCompatibility,
      heightMM,
    });
    await addCPUCoolerSpecs(vars);
    console.log('CPU cooler specs saved.');
  } else if (cat === 'cases' || cat === 'case') {
    const formFactor = (
      await prompt(readline, 'Form factor (e.g. ATX Mid-Tower): ')
    ).trim();
    const moboSupport = (
      await prompt(readline, 'Motherboard support (e.g. ATX,mATX,ITX): ')
    ).trim();
    const gpuRaw = (
      await prompt(readline, 'Max GPU length (MM, optional): ')
    ).trim();
    const maxGPULengthMM = gpuRaw ? parseInt(gpuRaw, 10) : null;
    const coolerRaw = (
      await prompt(readline, 'Max CPU cooler height (MM, optional): ')
    ).trim();
    const maxCPUCoolerHeightMM = coolerRaw ? parseInt(coolerRaw, 10) : null;
    const psuRaw = (
      await prompt(readline, 'Max PSU length (MM, optional): ')
    ).trim();
    const maxPSULengthMM = psuRaw ? parseInt(psuRaw, 10) : null;
    const twoHalfRaw = (
      await prompt(readline, '2.5" drive slots (optional): ')
    ).trim();
    const driveSlotsTwoHalf = twoHalfRaw ? parseInt(twoHalfRaw, 10) : null;
    const threeHalfRaw = (
      await prompt(readline, '3.5" drive slots (optional): ')
    ).trim();
    const driveSlotsThreeHalf = threeHalfRaw
      ? parseInt(threeHalfRaw, 10)
      : null;
    const fanRaw = (await prompt(readline, 'Fan slots (optional): ')).trim();
    const fanSlots = fanRaw ? parseInt(fanRaw, 10) : null;
    const radiatorSupport =
      (
        await prompt(
          readline,
          'Radiator support (e.g. 240mm, 360mm, optional): ',
        )
      ).trim() || null;

    const vars = createCaseSpecsSchema.parse({
      productId,
      formFactor,
      moboSupport,
      maxGPULengthMM,
      maxCPUCoolerHeightMM,
      maxPSULengthMM,
      driveSlotsTwoHalf,
      driveSlotsThreeHalf,
      fanSlots,
      radiatorSupport,
    });
    await addCaseSpecs(vars);
    console.log('Case specs saved.');
  } else if (cat === 'ram' || cat === 'memory') {
    const memoryType = (
      await prompt(readline, 'Memory type (e.g. DDR5): ')
    ).trim();
    const speedMHz = parseInt(
      (await prompt(readline, 'Speed (MHz): ')).trim(),
      10,
    );
    const capacityGB = parseInt(
      (await prompt(readline, 'Capacity (GB): ')).trim(),
      10,
    );
    const modules = parseInt(
      (await prompt(readline, 'Number of modules: ')).trim(),
      10,
    );
    const casRaw = (await prompt(readline, 'CAS latency (optional): ')).trim();
    const casLatency = casRaw ? parseInt(casRaw, 10) : null;
    const voltRaw = (await prompt(readline, 'Voltage (V, optional): ')).trim();
    const voltage = voltRaw ? parseFloat(voltRaw) : null;

    const vars = createRamSpecsSchema.parse({
      productId,
      memoryType,
      speedMHz,
      capacityGB,
      modules,
      casLatency,
      voltage,
    });
    await addRAMSpecs(vars);
    console.log('RAM specs saved.');
  } else if (cat === 'motherboards' || cat === 'motherboard') {
    const socketType = (
      await prompt(readline, 'Socket type (e.g. AM5): ')
    ).trim();
    const chipset = (await prompt(readline, 'Chipset (e.g. X670E): ')).trim();
    const formFactor = (
      await prompt(readline, 'Form factor (e.g. ATX): ')
    ).trim();
    const memoryType = (
      await prompt(readline, 'Memory type (e.g. DDR5): ')
    ).trim();
    const memorySlots = parseInt(
      (await prompt(readline, 'Memory slots: ')).trim(),
      10,
    );
    const maxMemoryGB = parseInt(
      (await prompt(readline, 'Max memory (GB): ')).trim(),
      10,
    );
    const m2Raw = (await prompt(readline, 'M.2 slots (optional): ')).trim();
    const m2Slots = m2Raw ? parseInt(m2Raw, 10) : null;
    const sataRaw = (await prompt(readline, 'SATA slots (optional): ')).trim();
    const sataSlots = sataRaw ? parseInt(sataRaw, 10) : null;
    const pciRaw = (await prompt(readline, 'PCIe slots (optional): ')).trim();
    const pciSlots = pciRaw ? parseInt(pciRaw, 10) : null;

    const vars = createMotherboardSpecsSchema.parse({
      productId,
      socketType,
      chipset,
      formFactor,
      memoryType,
      memorySlots,
      maxMemoryGB,
      m2Slots,
      sataSlots,
      pciSlots,
    });
    await addMotherboardSpecs(vars);
    console.log('Motherboard specs saved.');
  } else {
    console.log(
      `No spec form available for category "${categoryName}". Product was created without specs.`,
    );
  }
}

async function updateProductInteractive(
  state: State,
  productName: string | undefined,
  flags: Record<string, string | true>,
): Promise<void> {
  const { readline } = state;
  let productId: string | undefined;

  const idFlag = flags['id'];
  if (idFlag && typeof idFlag === 'string') {
    productId = idFlag;
  } else if (productName) {
    const result = await searchProductsByName({
      nameQuery: productName,
      limit: 10,
    });
    const products = result.data.products;

    if (products.length === 0) {
      console.log(`No products found matching "${productName}".`);
      return;
    }

    if (products.length === 1) {
      productId = products[0].id;
    } else {
      console.log('Multiple matches found:');
      products.forEach((p, i) => {
        console.log(
          `  ${i + 1}. ${p.name} (SKU: ${p.sku}) — ${p.manufacturer.name}`,
        );
      });
      const choiceRaw = (await prompt(readline, 'Select number: ')).trim();
      const choice = parseInt(choiceRaw, 10) - 1;
      if (isNaN(choice) || choice < 0 || choice >= products.length) {
        console.log('Invalid selection.');
        return;
      }
      productId = products[choice].id;
    }
  } else {
    console.log('Usage: product update <productName> [--id <productId>]');
    return;
  }

  const fetchResult = await getProductById({ id: productId });
  const existing = fetchResult.data.product;
  if (!existing) {
    console.log('Product not found.');
    return;
  }

  console.log(`\nUpdating: ${existing.name} (ID: ${existing.id})`);
  console.log('Press Enter to keep current value.\n');

  const nameRaw = (await prompt(readline, `Name [${existing.name}]: `)).trim();
  const descRaw = (
    await prompt(readline, `Description [${existing.description}]: `)
  ).trim();
  const colorRaw = (
    await prompt(readline, `Color [${existing.color ?? ''}]: `)
  ).trim();
  const priceRaw = (
    await prompt(readline, `Price [$${existing.price ?? 'N/A'}]: `)
  ).trim();
  const quantityRaw = (
    await prompt(readline, `Quantity [${existing.quantity}]: `)
  ).trim();

  const updateVars = updateProductSchema.parse({
    id: productId,
    name: nameRaw || null,
    description: descRaw || null,
    color: colorRaw || null,
    price: priceRaw ? parseFloat(priceRaw.replace('$', '')) : null,
    quantity: quantityRaw ? parseInt(quantityRaw, 10) : null,
  });

  await updateProduct(updateVars);
  console.log('Product updated successfully.');
}
