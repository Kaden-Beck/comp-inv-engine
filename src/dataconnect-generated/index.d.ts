import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
};



export interface Case_Key {
  id: UUIDString;
  __typename?: 'Case_Key';
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CpuCooler_Key {
  id: UUIDString;
  __typename?: 'CpuCooler_Key';
}

export interface Cpu_Key {
  id: UUIDString;
  __typename?: 'Cpu_Key';
}

export interface CreateCaseSpecsData {
  case_insert: Case_Key;
}

export interface CreateCaseSpecsVariables {
  productId: UUIDString;
  formFactor: string;
  moboSupport: string;
  maxGPULengthMM?: number | null;
  maxCPUCoolerHeightMM?: number | null;
  maxPSULengthMM?: number | null;
  driveSlotsTwoHalf?: number | null;
  driveSlotsThreeHalf?: number | null;
  fanSlots?: number | null;
  radiatorSupport?: string | null;
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  name: string;
  description: string;
  isParent: boolean;
  parentId?: UUIDString | null;
}

export interface CreateCpuCoolerSpecsData {
  cpuCooler_insert: CpuCooler_Key;
}

export interface CreateCpuCoolerSpecsVariables {
  productId: UUIDString;
  coolerType: string;
  radiatorSizeMM?: number | null;
  fanSizeMM?: number | null;
  maxTDP: number;
  socketCompatibility: string;
  heightMM: number;
}

export interface CreateCpuSpecsData {
  cpu_insert: Cpu_Key;
}

export interface CreateCpuSpecsVariables {
  productId: UUIDString;
  cores: number;
  threads: number;
  baseClockGHz: number;
  boostClockGHz?: number | null;
  tdp: number;
  socketType: string;
  integratedGraphics: boolean;
  cacheMB?: number | null;
}

export interface CreateGpuSpecsData {
  gpu_insert: Gpu_Key;
}

export interface CreateGpuSpecsVariables {
  productId: UUIDString;
  chipset: string;
  vramGB: number;
  vramType: string;
  coreCount?: number | null;
  baseClockMHz?: number | null;
  boostClockMHz?: number | null;
  tdp: number;
  lengthMM?: number | null;
  powerConnectors?: string | null;
}

export interface CreateManufacturerData {
  manufacturer_insert: Manufacturer_Key;
}

export interface CreateManufacturerVariables {
  name: string;
  description: string;
}

export interface CreateMotherboardSpecsData {
  motherboard_insert: Motherboard_Key;
}

export interface CreateMotherboardSpecsVariables {
  productId: UUIDString;
  socketType: string;
  chipset: string;
  formFactor: string;
  memoryType: string;
  memorySlots: number;
  maxMemoryGB: number;
  m2Slots?: number | null;
  sataSlots?: number | null;
  pciSlots?: number | null;
}

export interface CreateProductData {
  product_insert: Product_Key;
}

export interface CreateProductVariables {
  name: string;
  sku: string;
  description: string;
  color?: string | null;
  msrp: number;
  price?: number | null;
  quantity: number;
  manufacturerId: UUIDString;
  categoryId: UUIDString;
}

export interface CreatePsuSpecsData {
  psu_insert: Psu_Key;
}

export interface CreatePsuSpecsVariables {
  productId: UUIDString;
  wattage: number;
  efficiencyRating: string;
  modular: string;
  formFactor: string;
}

export interface CreateRamSpecsData {
  ram_insert: Ram_Key;
}

export interface CreateRamSpecsVariables {
  productId: UUIDString;
  memoryType: string;
  speedMHz: number;
  capacityGB: number;
  modules: number;
  casLatency?: number | null;
  voltage?: number | null;
}

export interface CreateStorageSpecsData {
  storage_insert: Storage_Key;
}

export interface CreateStorageSpecsVariables {
  productId: UUIDString;
  storageType: string;
  capacityGB: number;
  interface: string;
  formFactor: string;
  readSpeedMBps?: number | null;
  writeSpeedMBps?: number | null;
}

export interface DeleteProductData {
  product_delete?: Product_Key | null;
}

export interface DeleteProductVariables {
  id: UUIDString;
}

export interface GetCategoryByIdData {
  category?: {
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
    parentId?: UUIDString | null;
    parent?: {
      id: UUIDString;
      name: string;
    } & Category_Key;
  } & Category_Key;
}

export interface GetCategoryByIdVariables {
  id: UUIDString;
}

export interface GetCategoryByNameData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
    parent?: {
      id: UUIDString;
      name: string;
    } & Category_Key;
  } & Category_Key)[];
}

export interface GetCategoryByNameVariables {
  name: string;
}

export interface GetChildCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
  } & Category_Key)[];
}

export interface GetChildCategoriesVariables {
  parentId: UUIDString;
  limit?: number | null;
}

export interface GetLowStockProductsData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    quantity: number;
    manufacturer: {
      id: UUIDString;
      name: string;
    } & Manufacturer_Key;
      category: {
        id: UUIDString;
        name: string;
      } & Category_Key;
  } & Product_Key)[];
}

export interface GetLowStockProductsVariables {
  threshold: number;
  limit?: number | null;
}

export interface GetManufacturerByIdData {
  manufacturer?: {
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key;
}

export interface GetManufacturerByIdVariables {
  id: UUIDString;
}

export interface GetManufacturerByNameData {
  manufacturers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key)[];
}

export interface GetManufacturerByNameVariables {
  name: string;
}

export interface GetParentCategoryData {
  category?: {
    id: UUIDString;
    name: string;
    parent?: {
      id: UUIDString;
      name: string;
      description: string;
      parent?: {
        id: UUIDString;
        name: string;
      } & Category_Key;
    } & Category_Key;
  } & Category_Key;
}

export interface GetParentCategoryVariables {
  childId: UUIDString;
}

export interface GetProductByIdData {
  product?: {
    id: UUIDString;
    name: string;
    sku: string;
    description: string;
    color?: string | null;
    msrp: number;
    price?: number | null;
    quantity: number;
    manufacturer: {
      id: UUIDString;
      name: string;
      description: string;
    } & Manufacturer_Key;
      category: {
        id: UUIDString;
        name: string;
        description: string;
      } & Category_Key;
  } & Product_Key;
}

export interface GetProductByIdVariables {
  id: UUIDString;
}

export interface GetProductBySkuData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    description: string;
    color?: string | null;
    msrp: number;
    price?: number | null;
    quantity: number;
    manufacturer: {
      id: UUIDString;
      name: string;
    } & Manufacturer_Key;
      category: {
        id: UUIDString;
        name: string;
      } & Category_Key;
  } & Product_Key)[];
}

export interface GetProductBySkuVariables {
  sku: string;
}

export interface GetProductImagesByProductIdData {
  productImages: ({
    id: UUIDString;
    url: string;
    altText?: string | null;
  } & ProductImage_Key)[];
}

export interface GetProductImagesByProductIdVariables {
  productId: UUIDString;
}

export interface GetProductsByCategoryData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    price?: number | null;
    quantity: number;
    manufacturer: {
      id: UUIDString;
      name: string;
    } & Manufacturer_Key;
  } & Product_Key)[];
}

export interface GetProductsByCategoryVariables {
  categoryId: UUIDString;
  limit?: number | null;
}

export interface GetProductsByManufacturerData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    price?: number | null;
    quantity: number;
    category: {
      id: UUIDString;
      name: string;
    } & Category_Key;
  } & Product_Key)[];
}

export interface GetProductsByManufacturerVariables {
  manufacturerId: UUIDString;
  limit?: number | null;
}

export interface Gpu_Key {
  id: UUIDString;
  __typename?: 'Gpu_Key';
}

export interface ListCasesData {
  cases: ({
    id: UUIDString;
    formFactor: string;
    moboSupport: string;
    maxGPULengthMM?: number | null;
    maxCPUCoolerHeightMM?: number | null;
    maxPSULengthMM?: number | null;
    driveSlotsTwoHalf?: number | null;
    driveSlotsThreeHalf?: number | null;
    fanSlots?: number | null;
    radiatorSupport?: string | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Case_Key)[];
}

export interface ListCasesVariables {
  limit?: number | null;
}

export interface ListCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
  } & Category_Key)[];
}

export interface ListCategoriesVariables {
  orderByName?: OrderDirection | null;
  limit?: number | null;
}

export interface ListCpUsData {
  cpus: ({
    id: UUIDString;
    cores: number;
    threads: number;
    baseClockGHz: number;
    boostClockGHz?: number | null;
    tdp: number;
    socketType: string;
    integratedGraphics: boolean;
    cacheMB?: number | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Cpu_Key)[];
}

export interface ListCpUsVariables {
  limit?: number | null;
}

export interface ListCpuCoolersData {
  cpuCoolers: ({
    id: UUIDString;
    coolerType: string;
    radiatorSizeMM?: number | null;
    fanSizeMM?: number | null;
    maxTDP: number;
    socketCompatibility: string;
    heightMM: number;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & CpuCooler_Key)[];
}

export interface ListCpuCoolersVariables {
  limit?: number | null;
}

export interface ListGpUsData {
  gpus: ({
    id: UUIDString;
    chipset: string;
    vramGB: number;
    vramType: string;
    coreCount?: number | null;
    tdp: number;
    lengthMM?: number | null;
    powerConnectors?: string | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Gpu_Key)[];
}

export interface ListGpUsVariables {
  limit?: number | null;
}

export interface ListManufacturersData {
  manufacturers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key)[];
}

export interface ListManufacturersVariables {
  orderByName?: OrderDirection | null;
  limit?: number | null;
}

export interface ListMotherboardsData {
  motherboards: ({
    id: UUIDString;
    socketType: string;
    chipset: string;
    formFactor: string;
    memoryType: string;
    memorySlots: number;
    maxMemoryGB: number;
    m2Slots?: number | null;
    sataSlots?: number | null;
    pciSlots?: number | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Motherboard_Key)[];
}

export interface ListMotherboardsVariables {
  limit?: number | null;
}

export interface ListProductImagesData {
  productImages: ({
    id: UUIDString;
    url: string;
    altText?: string | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
    } & Product_Key;
  } & ProductImage_Key)[];
}

export interface ListProductImagesVariables {
  limit?: number | null;
}

export interface ListProductsData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    description: string;
    color?: string | null;
    msrp: number;
    price?: number | null;
    quantity: number;
    manufacturer: {
      id: UUIDString;
      name: string;
    } & Manufacturer_Key;
      category: {
        id: UUIDString;
        name: string;
      } & Category_Key;
  } & Product_Key)[];
}

export interface ListProductsVariables {
  orderByName?: OrderDirection | null;
  orderByQuantity?: OrderDirection | null;
  orderByPrice?: OrderDirection | null;
  limit?: number | null;
}

export interface ListPsUsData {
  psus: ({
    id: UUIDString;
    wattage: number;
    efficiencyRating: string;
    modular: string;
    formFactor: string;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Psu_Key)[];
}

export interface ListPsUsVariables {
  limit?: number | null;
}

export interface ListRamData {
  rams: ({
    id: UUIDString;
    memoryType: string;
    speedMHz: number;
    capacityGB: number;
    modules: number;
    casLatency?: number | null;
    voltage?: number | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Ram_Key)[];
}

export interface ListRamVariables {
  limit?: number | null;
}

export interface ListStorageData {
  storages: ({
    id: UUIDString;
    storageType: string;
    capacityGB: number;
    interface: string;
    formFactor: string;
    readSpeedMBps?: number | null;
    writeSpeedMBps?: number | null;
    product: {
      id: UUIDString;
      name: string;
      sku: string;
      price?: number | null;
      quantity: number;
      manufacturer: {
        id: UUIDString;
        name: string;
      } & Manufacturer_Key;
    } & Product_Key;
  } & Storage_Key)[];
}

export interface ListStorageVariables {
  limit?: number | null;
}

export interface Manufacturer_Key {
  id: UUIDString;
  __typename?: 'Manufacturer_Key';
}

export interface Motherboard_Key {
  id: UUIDString;
  __typename?: 'Motherboard_Key';
}

export interface ProductImage_Key {
  id: UUIDString;
  __typename?: 'ProductImage_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface Psu_Key {
  id: UUIDString;
  __typename?: 'Psu_Key';
}

export interface Ram_Key {
  id: UUIDString;
  __typename?: 'Ram_Key';
}

export interface SearchProductsByNameData {
  products: ({
    id: UUIDString;
    name: string;
    sku: string;
    description: string;
    price?: number | null;
    quantity: number;
    manufacturer: {
      id: UUIDString;
      name: string;
    } & Manufacturer_Key;
      category: {
        id: UUIDString;
        name: string;
      } & Category_Key;
  } & Product_Key)[];
}

export interface SearchProductsByNameVariables {
  nameQuery?: string | null;
  limit?: number | null;
}

export interface Storage_Key {
  id: UUIDString;
  __typename?: 'Storage_Key';
}

export interface UpdateProductData {
  product_update?: Product_Key | null;
}

export interface UpdateProductVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
  color?: string | null;
  price?: number | null;
  quantity?: number | null;
  categoryId?: UUIDString | null;
}

interface CreateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  operationName: string;
}
export const createProductRef: CreateProductRef;

export function createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;
export function createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface UpdateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
  operationName: string;
}
export const updateProductRef: UpdateProductRef;

export function updateProduct(vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;
export function updateProduct(dc: DataConnect, vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface DeleteProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
  operationName: string;
}
export const deleteProductRef: DeleteProductRef;

export function deleteProduct(vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;
export function deleteProduct(dc: DataConnect, vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface CreateCpuSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCpuSpecsVariables): MutationRef<CreateCpuSpecsData, CreateCpuSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCpuSpecsVariables): MutationRef<CreateCpuSpecsData, CreateCpuSpecsVariables>;
  operationName: string;
}
export const createCpuSpecsRef: CreateCpuSpecsRef;

export function createCpuSpecs(vars: CreateCpuSpecsVariables): MutationPromise<CreateCpuSpecsData, CreateCpuSpecsVariables>;
export function createCpuSpecs(dc: DataConnect, vars: CreateCpuSpecsVariables): MutationPromise<CreateCpuSpecsData, CreateCpuSpecsVariables>;

interface CreateGpuSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateGpuSpecsVariables): MutationRef<CreateGpuSpecsData, CreateGpuSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateGpuSpecsVariables): MutationRef<CreateGpuSpecsData, CreateGpuSpecsVariables>;
  operationName: string;
}
export const createGpuSpecsRef: CreateGpuSpecsRef;

export function createGpuSpecs(vars: CreateGpuSpecsVariables): MutationPromise<CreateGpuSpecsData, CreateGpuSpecsVariables>;
export function createGpuSpecs(dc: DataConnect, vars: CreateGpuSpecsVariables): MutationPromise<CreateGpuSpecsData, CreateGpuSpecsVariables>;

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateManufacturerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateManufacturerVariables): MutationRef<CreateManufacturerData, CreateManufacturerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateManufacturerVariables): MutationRef<CreateManufacturerData, CreateManufacturerVariables>;
  operationName: string;
}
export const createManufacturerRef: CreateManufacturerRef;

export function createManufacturer(vars: CreateManufacturerVariables): MutationPromise<CreateManufacturerData, CreateManufacturerVariables>;
export function createManufacturer(dc: DataConnect, vars: CreateManufacturerVariables): MutationPromise<CreateManufacturerData, CreateManufacturerVariables>;

interface CreateStorageSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStorageSpecsVariables): MutationRef<CreateStorageSpecsData, CreateStorageSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateStorageSpecsVariables): MutationRef<CreateStorageSpecsData, CreateStorageSpecsVariables>;
  operationName: string;
}
export const createStorageSpecsRef: CreateStorageSpecsRef;

export function createStorageSpecs(vars: CreateStorageSpecsVariables): MutationPromise<CreateStorageSpecsData, CreateStorageSpecsVariables>;
export function createStorageSpecs(dc: DataConnect, vars: CreateStorageSpecsVariables): MutationPromise<CreateStorageSpecsData, CreateStorageSpecsVariables>;

interface CreatePsuSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePsuSpecsVariables): MutationRef<CreatePsuSpecsData, CreatePsuSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePsuSpecsVariables): MutationRef<CreatePsuSpecsData, CreatePsuSpecsVariables>;
  operationName: string;
}
export const createPsuSpecsRef: CreatePsuSpecsRef;

export function createPsuSpecs(vars: CreatePsuSpecsVariables): MutationPromise<CreatePsuSpecsData, CreatePsuSpecsVariables>;
export function createPsuSpecs(dc: DataConnect, vars: CreatePsuSpecsVariables): MutationPromise<CreatePsuSpecsData, CreatePsuSpecsVariables>;

interface CreateCpuCoolerSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCpuCoolerSpecsVariables): MutationRef<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCpuCoolerSpecsVariables): MutationRef<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
  operationName: string;
}
export const createCpuCoolerSpecsRef: CreateCpuCoolerSpecsRef;

export function createCpuCoolerSpecs(vars: CreateCpuCoolerSpecsVariables): MutationPromise<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
export function createCpuCoolerSpecs(dc: DataConnect, vars: CreateCpuCoolerSpecsVariables): MutationPromise<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;

interface CreateCaseSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCaseSpecsVariables): MutationRef<CreateCaseSpecsData, CreateCaseSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCaseSpecsVariables): MutationRef<CreateCaseSpecsData, CreateCaseSpecsVariables>;
  operationName: string;
}
export const createCaseSpecsRef: CreateCaseSpecsRef;

export function createCaseSpecs(vars: CreateCaseSpecsVariables): MutationPromise<CreateCaseSpecsData, CreateCaseSpecsVariables>;
export function createCaseSpecs(dc: DataConnect, vars: CreateCaseSpecsVariables): MutationPromise<CreateCaseSpecsData, CreateCaseSpecsVariables>;

interface CreateRamSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRamSpecsVariables): MutationRef<CreateRamSpecsData, CreateRamSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateRamSpecsVariables): MutationRef<CreateRamSpecsData, CreateRamSpecsVariables>;
  operationName: string;
}
export const createRamSpecsRef: CreateRamSpecsRef;

export function createRamSpecs(vars: CreateRamSpecsVariables): MutationPromise<CreateRamSpecsData, CreateRamSpecsVariables>;
export function createRamSpecs(dc: DataConnect, vars: CreateRamSpecsVariables): MutationPromise<CreateRamSpecsData, CreateRamSpecsVariables>;

interface CreateMotherboardSpecsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMotherboardSpecsVariables): MutationRef<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMotherboardSpecsVariables): MutationRef<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
  operationName: string;
}
export const createMotherboardSpecsRef: CreateMotherboardSpecsRef;

export function createMotherboardSpecs(vars: CreateMotherboardSpecsVariables): MutationPromise<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
export function createMotherboardSpecs(dc: DataConnect, vars: CreateMotherboardSpecsVariables): MutationPromise<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;

interface ListProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
  operationName: string;
}
export const listProductsRef: ListProductsRef;

export function listProducts(vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;
export function listProducts(dc: DataConnect, vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;

interface GetProductByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductByIdVariables): QueryRef<GetProductByIdData, GetProductByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductByIdVariables): QueryRef<GetProductByIdData, GetProductByIdVariables>;
  operationName: string;
}
export const getProductByIdRef: GetProductByIdRef;

export function getProductById(vars: GetProductByIdVariables): QueryPromise<GetProductByIdData, GetProductByIdVariables>;
export function getProductById(dc: DataConnect, vars: GetProductByIdVariables): QueryPromise<GetProductByIdData, GetProductByIdVariables>;

interface GetProductBySkuRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductBySkuVariables): QueryRef<GetProductBySkuData, GetProductBySkuVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductBySkuVariables): QueryRef<GetProductBySkuData, GetProductBySkuVariables>;
  operationName: string;
}
export const getProductBySkuRef: GetProductBySkuRef;

export function getProductBySku(vars: GetProductBySkuVariables): QueryPromise<GetProductBySkuData, GetProductBySkuVariables>;
export function getProductBySku(dc: DataConnect, vars: GetProductBySkuVariables): QueryPromise<GetProductBySkuData, GetProductBySkuVariables>;

interface SearchProductsByNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: SearchProductsByNameVariables): QueryRef<SearchProductsByNameData, SearchProductsByNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: SearchProductsByNameVariables): QueryRef<SearchProductsByNameData, SearchProductsByNameVariables>;
  operationName: string;
}
export const searchProductsByNameRef: SearchProductsByNameRef;

export function searchProductsByName(vars?: SearchProductsByNameVariables): QueryPromise<SearchProductsByNameData, SearchProductsByNameVariables>;
export function searchProductsByName(dc: DataConnect, vars?: SearchProductsByNameVariables): QueryPromise<SearchProductsByNameData, SearchProductsByNameVariables>;

interface GetProductsByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
  operationName: string;
}
export const getProductsByCategoryRef: GetProductsByCategoryRef;

export function getProductsByCategory(vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;
export function getProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;

interface GetProductsByManufacturerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductsByManufacturerVariables): QueryRef<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductsByManufacturerVariables): QueryRef<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
  operationName: string;
}
export const getProductsByManufacturerRef: GetProductsByManufacturerRef;

export function getProductsByManufacturer(vars: GetProductsByManufacturerVariables): QueryPromise<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
export function getProductsByManufacturer(dc: DataConnect, vars: GetProductsByManufacturerVariables): QueryPromise<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;

interface GetLowStockProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLowStockProductsVariables): QueryRef<GetLowStockProductsData, GetLowStockProductsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLowStockProductsVariables): QueryRef<GetLowStockProductsData, GetLowStockProductsVariables>;
  operationName: string;
}
export const getLowStockProductsRef: GetLowStockProductsRef;

export function getLowStockProducts(vars: GetLowStockProductsVariables): QueryPromise<GetLowStockProductsData, GetLowStockProductsVariables>;
export function getLowStockProducts(dc: DataConnect, vars: GetLowStockProductsVariables): QueryPromise<GetLowStockProductsData, GetLowStockProductsVariables>;

interface ListProductImagesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListProductImagesVariables): QueryRef<ListProductImagesData, ListProductImagesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListProductImagesVariables): QueryRef<ListProductImagesData, ListProductImagesVariables>;
  operationName: string;
}
export const listProductImagesRef: ListProductImagesRef;

export function listProductImages(vars?: ListProductImagesVariables): QueryPromise<ListProductImagesData, ListProductImagesVariables>;
export function listProductImages(dc: DataConnect, vars?: ListProductImagesVariables): QueryPromise<ListProductImagesData, ListProductImagesVariables>;

interface GetProductImagesByProductIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductImagesByProductIdVariables): QueryRef<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductImagesByProductIdVariables): QueryRef<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
  operationName: string;
}
export const getProductImagesByProductIdRef: GetProductImagesByProductIdRef;

export function getProductImagesByProductId(vars: GetProductImagesByProductIdVariables): QueryPromise<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
export function getProductImagesByProductId(dc: DataConnect, vars: GetProductImagesByProductIdVariables): QueryPromise<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;

interface ListManufacturersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListManufacturersVariables): QueryRef<ListManufacturersData, ListManufacturersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListManufacturersVariables): QueryRef<ListManufacturersData, ListManufacturersVariables>;
  operationName: string;
}
export const listManufacturersRef: ListManufacturersRef;

export function listManufacturers(vars?: ListManufacturersVariables): QueryPromise<ListManufacturersData, ListManufacturersVariables>;
export function listManufacturers(dc: DataConnect, vars?: ListManufacturersVariables): QueryPromise<ListManufacturersData, ListManufacturersVariables>;

interface GetManufacturerByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetManufacturerByIdVariables): QueryRef<GetManufacturerByIdData, GetManufacturerByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetManufacturerByIdVariables): QueryRef<GetManufacturerByIdData, GetManufacturerByIdVariables>;
  operationName: string;
}
export const getManufacturerByIdRef: GetManufacturerByIdRef;

export function getManufacturerById(vars: GetManufacturerByIdVariables): QueryPromise<GetManufacturerByIdData, GetManufacturerByIdVariables>;
export function getManufacturerById(dc: DataConnect, vars: GetManufacturerByIdVariables): QueryPromise<GetManufacturerByIdData, GetManufacturerByIdVariables>;

interface GetManufacturerByNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetManufacturerByNameVariables): QueryRef<GetManufacturerByNameData, GetManufacturerByNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetManufacturerByNameVariables): QueryRef<GetManufacturerByNameData, GetManufacturerByNameVariables>;
  operationName: string;
}
export const getManufacturerByNameRef: GetManufacturerByNameRef;

export function getManufacturerByName(vars: GetManufacturerByNameVariables): QueryPromise<GetManufacturerByNameData, GetManufacturerByNameVariables>;
export function getManufacturerByName(dc: DataConnect, vars: GetManufacturerByNameVariables): QueryPromise<GetManufacturerByNameData, GetManufacturerByNameVariables>;

interface ListCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCategoriesVariables): QueryRef<ListCategoriesData, ListCategoriesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListCategoriesVariables): QueryRef<ListCategoriesData, ListCategoriesVariables>;
  operationName: string;
}
export const listCategoriesRef: ListCategoriesRef;

export function listCategories(vars?: ListCategoriesVariables): QueryPromise<ListCategoriesData, ListCategoriesVariables>;
export function listCategories(dc: DataConnect, vars?: ListCategoriesVariables): QueryPromise<ListCategoriesData, ListCategoriesVariables>;

interface GetCategoryByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryByIdVariables): QueryRef<GetCategoryByIdData, GetCategoryByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCategoryByIdVariables): QueryRef<GetCategoryByIdData, GetCategoryByIdVariables>;
  operationName: string;
}
export const getCategoryByIdRef: GetCategoryByIdRef;

export function getCategoryById(vars: GetCategoryByIdVariables): QueryPromise<GetCategoryByIdData, GetCategoryByIdVariables>;
export function getCategoryById(dc: DataConnect, vars: GetCategoryByIdVariables): QueryPromise<GetCategoryByIdData, GetCategoryByIdVariables>;

interface GetCategoryByNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryByNameVariables): QueryRef<GetCategoryByNameData, GetCategoryByNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCategoryByNameVariables): QueryRef<GetCategoryByNameData, GetCategoryByNameVariables>;
  operationName: string;
}
export const getCategoryByNameRef: GetCategoryByNameRef;

export function getCategoryByName(vars: GetCategoryByNameVariables): QueryPromise<GetCategoryByNameData, GetCategoryByNameVariables>;
export function getCategoryByName(dc: DataConnect, vars: GetCategoryByNameVariables): QueryPromise<GetCategoryByNameData, GetCategoryByNameVariables>;

interface GetChildCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetChildCategoriesVariables): QueryRef<GetChildCategoriesData, GetChildCategoriesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetChildCategoriesVariables): QueryRef<GetChildCategoriesData, GetChildCategoriesVariables>;
  operationName: string;
}
export const getChildCategoriesRef: GetChildCategoriesRef;

export function getChildCategories(vars: GetChildCategoriesVariables): QueryPromise<GetChildCategoriesData, GetChildCategoriesVariables>;
export function getChildCategories(dc: DataConnect, vars: GetChildCategoriesVariables): QueryPromise<GetChildCategoriesData, GetChildCategoriesVariables>;

interface GetParentCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetParentCategoryVariables): QueryRef<GetParentCategoryData, GetParentCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetParentCategoryVariables): QueryRef<GetParentCategoryData, GetParentCategoryVariables>;
  operationName: string;
}
export const getParentCategoryRef: GetParentCategoryRef;

export function getParentCategory(vars: GetParentCategoryVariables): QueryPromise<GetParentCategoryData, GetParentCategoryVariables>;
export function getParentCategory(dc: DataConnect, vars: GetParentCategoryVariables): QueryPromise<GetParentCategoryData, GetParentCategoryVariables>;

interface ListCpUsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCpUsVariables): QueryRef<ListCpUsData, ListCpUsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListCpUsVariables): QueryRef<ListCpUsData, ListCpUsVariables>;
  operationName: string;
}
export const listCpUsRef: ListCpUsRef;

export function listCpUs(vars?: ListCpUsVariables): QueryPromise<ListCpUsData, ListCpUsVariables>;
export function listCpUs(dc: DataConnect, vars?: ListCpUsVariables): QueryPromise<ListCpUsData, ListCpUsVariables>;

interface ListGpUsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListGpUsVariables): QueryRef<ListGpUsData, ListGpUsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListGpUsVariables): QueryRef<ListGpUsData, ListGpUsVariables>;
  operationName: string;
}
export const listGpUsRef: ListGpUsRef;

export function listGpUs(vars?: ListGpUsVariables): QueryPromise<ListGpUsData, ListGpUsVariables>;
export function listGpUs(dc: DataConnect, vars?: ListGpUsVariables): QueryPromise<ListGpUsData, ListGpUsVariables>;

interface ListStorageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListStorageVariables): QueryRef<ListStorageData, ListStorageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListStorageVariables): QueryRef<ListStorageData, ListStorageVariables>;
  operationName: string;
}
export const listStorageRef: ListStorageRef;

export function listStorage(vars?: ListStorageVariables): QueryPromise<ListStorageData, ListStorageVariables>;
export function listStorage(dc: DataConnect, vars?: ListStorageVariables): QueryPromise<ListStorageData, ListStorageVariables>;

interface ListPsUsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListPsUsVariables): QueryRef<ListPsUsData, ListPsUsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListPsUsVariables): QueryRef<ListPsUsData, ListPsUsVariables>;
  operationName: string;
}
export const listPsUsRef: ListPsUsRef;

export function listPsUs(vars?: ListPsUsVariables): QueryPromise<ListPsUsData, ListPsUsVariables>;
export function listPsUs(dc: DataConnect, vars?: ListPsUsVariables): QueryPromise<ListPsUsData, ListPsUsVariables>;

interface ListCpuCoolersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCpuCoolersVariables): QueryRef<ListCpuCoolersData, ListCpuCoolersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListCpuCoolersVariables): QueryRef<ListCpuCoolersData, ListCpuCoolersVariables>;
  operationName: string;
}
export const listCpuCoolersRef: ListCpuCoolersRef;

export function listCpuCoolers(vars?: ListCpuCoolersVariables): QueryPromise<ListCpuCoolersData, ListCpuCoolersVariables>;
export function listCpuCoolers(dc: DataConnect, vars?: ListCpuCoolersVariables): QueryPromise<ListCpuCoolersData, ListCpuCoolersVariables>;

interface ListCasesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCasesVariables): QueryRef<ListCasesData, ListCasesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListCasesVariables): QueryRef<ListCasesData, ListCasesVariables>;
  operationName: string;
}
export const listCasesRef: ListCasesRef;

export function listCases(vars?: ListCasesVariables): QueryPromise<ListCasesData, ListCasesVariables>;
export function listCases(dc: DataConnect, vars?: ListCasesVariables): QueryPromise<ListCasesData, ListCasesVariables>;

interface ListRamRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListRamVariables): QueryRef<ListRamData, ListRamVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListRamVariables): QueryRef<ListRamData, ListRamVariables>;
  operationName: string;
}
export const listRamRef: ListRamRef;

export function listRam(vars?: ListRamVariables): QueryPromise<ListRamData, ListRamVariables>;
export function listRam(dc: DataConnect, vars?: ListRamVariables): QueryPromise<ListRamData, ListRamVariables>;

interface ListMotherboardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListMotherboardsVariables): QueryRef<ListMotherboardsData, ListMotherboardsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListMotherboardsVariables): QueryRef<ListMotherboardsData, ListMotherboardsVariables>;
  operationName: string;
}
export const listMotherboardsRef: ListMotherboardsRef;

export function listMotherboards(vars?: ListMotherboardsVariables): QueryPromise<ListMotherboardsData, ListMotherboardsVariables>;
export function listMotherboards(dc: DataConnect, vars?: ListMotherboardsVariables): QueryPromise<ListMotherboardsData, ListMotherboardsVariables>;

