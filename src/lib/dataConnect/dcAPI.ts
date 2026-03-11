/* ***************************************************************************
  Utility to organize and normalize named exports for dataConnect SDK 
******************************************************************************/

// GET ALL
export {
  listProducts as getProducts,
  listProductImages as getProductImages,
  listManufacturers as getManufacturers,
  listCategories as getCategories,
  listCpUs as getCPUs,
  listGpUs as getGPUs,
  listStorage as getStorage,
  listPsUs as getPSUs,
  listCpuCoolers as getCPUCoolers,
  listCases as getCases,
  listRam as getRAM,
  listMotherboards as getMotherboards,
} from '@dataconnect/generated';

// Filtered Get
export {
  getProductById,
  getProductBySku,
  getProductsByCategory,
  getProductsByManufacturer,
  getProductImagesByProductId,
  searchProductsByName,
  getLowStockProducts,
  getCategoryById,
  getCategoryByName,
  getParentCategory,
  getChildCategories,
  getManufacturerById,
  getManufacturerByName,
} from '@dataconnect/generated';

// Mutations
export {
  createProduct as addProduct,
  updateProduct,
  deleteProduct as removeProduct,
  createManufacturer as addManufacturer,
  createCpuSpecs as addCPUSpecs,
  createGpuSpecs as addGPUSpecs,
  createCategory as addCategory,
  createStorageSpecs as addStorageSpecs,
  createPsuSpecs as addPSUSpecs,
  createCpuCoolerSpecs as addCPUCoolerSpecs,
  createCaseSpecs as addCaseSpecs,
  createRamSpecs as addRAMSpecs,
  createMotherboardSpecs as addMotherboardSpecs,
} from '@dataconnect/generated';
