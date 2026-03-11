import {
  addManufacturer,
  addCategory,
  addProduct,
  addCPUSpecs,
  addGPUSpecs,
  addStorageSpecs,
  addRAMSpecs,
  getManufacturerByName,
  getCategoryByName,
} from './dcAPI.js';

async function getOrCreateManufacturer(name: string, description: string): Promise<string> {
  const existing = await getManufacturerByName({ name });
  if (existing.data.manufacturers.length > 0) {
    return existing.data.manufacturers[0].id;
  }
  const result = await addManufacturer({ name, description });
  return result.data.manufacturer_insert.id;
}

async function getOrCreateCategory(
  name: string,
  description: string,
  isParent: boolean,
  parentId?: string | null,
): Promise<string> {
  const existing = await getCategoryByName({ name });
  if (existing.data.categories.length > 0) {
    return existing.data.categories[0].id;
  }
  const result = await addCategory({ name, description, isParent, parentId: parentId ?? null });
  return result.data.category_insert.id;
}

export async function seedEmulator(): Promise<void> {
  console.log('Creating manufacturers...');
  const intelId = await getOrCreateManufacturer('Intel', 'Leading CPU and chipset manufacturer');
  const amdId = await getOrCreateManufacturer('AMD', 'Advanced Micro Devices — CPUs and GPUs');
  const nvidiaId = await getOrCreateManufacturer('Nvidia', 'Leading discrete GPU manufacturer');
  const corsairId = await getOrCreateManufacturer('Corsair', 'Memory, storage, and peripherals');
  const samsungId = await getOrCreateManufacturer('Samsung', 'Storage and memory manufacturer');
  const fractalId = await getOrCreateManufacturer('Fractal Design', 'PC cases and cooling');

  console.log('Creating categories...');
  const cpuCatId = await getOrCreateCategory('CPUs', 'Central Processing Units', true);
  const gpuCatId = await getOrCreateCategory('GPUs', 'Graphics Processing Units', true);
  const storageCatId = await getOrCreateCategory('Storage', 'SSDs, HDDs, and NVMe drives', true);
  const ramCatId = await getOrCreateCategory('RAM', 'System memory modules', false);
  const casesCatId = await getOrCreateCategory('Cases', 'PC chassis and cases', false);

  await getOrCreateCategory('Discrete GPUs', 'Standalone graphics cards', false, gpuCatId);
  await getOrCreateCategory('NVMe SSDs', 'PCIe NVMe solid state drives', false, storageCatId);
  await getOrCreateCategory('SATA SSDs', 'SATA solid state drives', false, storageCatId);

  console.log('Creating products...');

  // Intel Core i9-14900K
  const i9Result = await addProduct({
    name: 'Intel Core i9-14900K',
    sku: 'BX8071514900K',
    description: 'Intel 14th Gen flagship desktop CPU with 24 cores (8P+16E)',
    msrp: 589.99,
    price: 549.99,
    quantity: 12,
    manufacturerId: intelId,
    categoryId: cpuCatId,
  });
  await addCPUSpecs({
    productId: i9Result.data.product_insert.id,
    cores: 24,
    threads: 32,
    baseClockGHz: 3.2,
    boostClockGHz: 6.0,
    tdp: 125,
    socketType: 'LGA1700',
    integratedGraphics: true,
    cacheMB: 36,
  });

  // AMD Ryzen 9 7950X
  const r9Result = await addProduct({
    name: 'AMD Ryzen 9 7950X',
    sku: '100-100000514WOF',
    description: 'AMD Zen 4 flagship with 16 cores for workstation-class performance',
    msrp: 699.99,
    price: 599.99,
    quantity: 8,
    manufacturerId: amdId,
    categoryId: cpuCatId,
  });
  await addCPUSpecs({
    productId: r9Result.data.product_insert.id,
    cores: 16,
    threads: 32,
    baseClockGHz: 4.5,
    boostClockGHz: 5.7,
    tdp: 170,
    socketType: 'AM5',
    integratedGraphics: false,
    cacheMB: 64,
  });

  // Nvidia RTX 4080 Super
  const rtx4080Result = await addProduct({
    name: 'Nvidia GeForce RTX 4080 Super',
    sku: 'RTX4080S-16G',
    description: 'High-end Ada Lovelace GPU with 16GB GDDR6X',
    msrp: 999.99,
    price: 979.99,
    quantity: 5,
    manufacturerId: nvidiaId,
    categoryId: gpuCatId,
  });
  await addGPUSpecs({
    productId: rtx4080Result.data.product_insert.id,
    chipset: 'AD103',
    vramGB: 16,
    vramType: 'GDDR6X',
    coreCount: 10240,
    baseClockMHz: 2295,
    boostClockMHz: 2550,
    tdp: 320,
    lengthMM: 336,
    powerConnectors: '1x16-pin',
  });

  // Samsung 990 Pro NVMe
  const nvmeResult = await addProduct({
    name: 'Samsung 990 Pro 2TB NVMe',
    sku: 'MZ-V9P2T0B/AM',
    description: 'PCIe 4.0 NVMe SSD with read speeds up to 7450 MB/s',
    msrp: 179.99,
    price: 149.99,
    quantity: 25,
    manufacturerId: samsungId,
    categoryId: storageCatId,
  });
  await addStorageSpecs({
    productId: nvmeResult.data.product_insert.id,
    storageType: 'NVMe',
    capacityGB: 2000,
    interface: 'PCIe 4.0 x4',
    formFactor: 'M.2 2280',
    readSpeedMBps: 7450,
    writeSpeedMBps: 6900,
  });

  // Corsair Vengeance DDR5
  const ramResult = await addProduct({
    name: 'Corsair Vengeance 32GB DDR5-6000',
    sku: 'CMK32GX5M2B6000C30',
    description: '2x16GB DDR5-6000 kit with Intel XMP 3.0 support',
    msrp: 109.99,
    price: 89.99,
    quantity: 30,
    manufacturerId: corsairId,
    categoryId: ramCatId,
  });
  await addRAMSpecs({
    productId: ramResult.data.product_insert.id,
    memoryType: 'DDR5',
    speedMHz: 6000,
    capacityGB: 32,
    modules: 2,
    casLatency: 30,
    voltage: 1.35,
  });

  console.log('Seed complete. Sample data created successfully.');
}
