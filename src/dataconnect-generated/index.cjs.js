const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const OrderDirection = {
  ASC: "ASC",
  DESC: "DESC",
}
exports.OrderDirection = OrderDirection;

const connectorConfig = {
  connector: 'inventory-connector',
  service: 'computer-hardware-bass-service',
  location: 'us-west3'
};
exports.connectorConfig = connectorConfig;

const createProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProduct', inputVars);
}
createProductRef.operationName = 'CreateProduct';
exports.createProductRef = createProductRef;

exports.createProduct = function createProduct(dcOrVars, vars) {
  return executeMutation(createProductRef(dcOrVars, vars));
};

const updateProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProduct', inputVars);
}
updateProductRef.operationName = 'UpdateProduct';
exports.updateProductRef = updateProductRef;

exports.updateProduct = function updateProduct(dcOrVars, vars) {
  return executeMutation(updateProductRef(dcOrVars, vars));
};

const deleteProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteProduct', inputVars);
}
deleteProductRef.operationName = 'DeleteProduct';
exports.deleteProductRef = deleteProductRef;

exports.deleteProduct = function deleteProduct(dcOrVars, vars) {
  return executeMutation(deleteProductRef(dcOrVars, vars));
};

const createCpuSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCPUSpecs', inputVars);
}
createCpuSpecsRef.operationName = 'CreateCPUSpecs';
exports.createCpuSpecsRef = createCpuSpecsRef;

exports.createCpuSpecs = function createCpuSpecs(dcOrVars, vars) {
  return executeMutation(createCpuSpecsRef(dcOrVars, vars));
};

const createGpuSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateGPUSpecs', inputVars);
}
createGpuSpecsRef.operationName = 'CreateGPUSpecs';
exports.createGpuSpecsRef = createGpuSpecsRef;

exports.createGpuSpecs = function createGpuSpecs(dcOrVars, vars) {
  return executeMutation(createGpuSpecsRef(dcOrVars, vars));
};

const createCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory', inputVars);
}
createCategoryRef.operationName = 'CreateCategory';
exports.createCategoryRef = createCategoryRef;

exports.createCategory = function createCategory(dcOrVars, vars) {
  return executeMutation(createCategoryRef(dcOrVars, vars));
};

const createManufacturerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateManufacturer', inputVars);
}
createManufacturerRef.operationName = 'CreateManufacturer';
exports.createManufacturerRef = createManufacturerRef;

exports.createManufacturer = function createManufacturer(dcOrVars, vars) {
  return executeMutation(createManufacturerRef(dcOrVars, vars));
};

const createStorageSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateStorageSpecs', inputVars);
}
createStorageSpecsRef.operationName = 'CreateStorageSpecs';
exports.createStorageSpecsRef = createStorageSpecsRef;

exports.createStorageSpecs = function createStorageSpecs(dcOrVars, vars) {
  return executeMutation(createStorageSpecsRef(dcOrVars, vars));
};

const createPsuSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePSUSpecs', inputVars);
}
createPsuSpecsRef.operationName = 'CreatePSUSpecs';
exports.createPsuSpecsRef = createPsuSpecsRef;

exports.createPsuSpecs = function createPsuSpecs(dcOrVars, vars) {
  return executeMutation(createPsuSpecsRef(dcOrVars, vars));
};

const createCpuCoolerSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCPUCoolerSpecs', inputVars);
}
createCpuCoolerSpecsRef.operationName = 'CreateCPUCoolerSpecs';
exports.createCpuCoolerSpecsRef = createCpuCoolerSpecsRef;

exports.createCpuCoolerSpecs = function createCpuCoolerSpecs(dcOrVars, vars) {
  return executeMutation(createCpuCoolerSpecsRef(dcOrVars, vars));
};

const createCaseSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCaseSpecs', inputVars);
}
createCaseSpecsRef.operationName = 'CreateCaseSpecs';
exports.createCaseSpecsRef = createCaseSpecsRef;

exports.createCaseSpecs = function createCaseSpecs(dcOrVars, vars) {
  return executeMutation(createCaseSpecsRef(dcOrVars, vars));
};

const createRamSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateRAMSpecs', inputVars);
}
createRamSpecsRef.operationName = 'CreateRAMSpecs';
exports.createRamSpecsRef = createRamSpecsRef;

exports.createRamSpecs = function createRamSpecs(dcOrVars, vars) {
  return executeMutation(createRamSpecsRef(dcOrVars, vars));
};

const createMotherboardSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMotherboardSpecs', inputVars);
}
createMotherboardSpecsRef.operationName = 'CreateMotherboardSpecs';
exports.createMotherboardSpecsRef = createMotherboardSpecsRef;

exports.createMotherboardSpecs = function createMotherboardSpecs(dcOrVars, vars) {
  return executeMutation(createMotherboardSpecsRef(dcOrVars, vars));
};

const listProductsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts', inputVars);
}
listProductsRef.operationName = 'ListProducts';
exports.listProductsRef = listProductsRef;

exports.listProducts = function listProducts(dcOrVars, vars) {
  return executeQuery(listProductsRef(dcOrVars, vars));
};

const getProductByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductById', inputVars);
}
getProductByIdRef.operationName = 'GetProductById';
exports.getProductByIdRef = getProductByIdRef;

exports.getProductById = function getProductById(dcOrVars, vars) {
  return executeQuery(getProductByIdRef(dcOrVars, vars));
};

const getProductBySkuRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductBySku', inputVars);
}
getProductBySkuRef.operationName = 'GetProductBySku';
exports.getProductBySkuRef = getProductBySkuRef;

exports.getProductBySku = function getProductBySku(dcOrVars, vars) {
  return executeQuery(getProductBySkuRef(dcOrVars, vars));
};

const searchProductsByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchProductsByName', inputVars);
}
searchProductsByNameRef.operationName = 'SearchProductsByName';
exports.searchProductsByNameRef = searchProductsByNameRef;

exports.searchProductsByName = function searchProductsByName(dcOrVars, vars) {
  return executeQuery(searchProductsByNameRef(dcOrVars, vars));
};

const getProductsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductsByCategory', inputVars);
}
getProductsByCategoryRef.operationName = 'GetProductsByCategory';
exports.getProductsByCategoryRef = getProductsByCategoryRef;

exports.getProductsByCategory = function getProductsByCategory(dcOrVars, vars) {
  return executeQuery(getProductsByCategoryRef(dcOrVars, vars));
};

const getProductsByManufacturerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductsByManufacturer', inputVars);
}
getProductsByManufacturerRef.operationName = 'GetProductsByManufacturer';
exports.getProductsByManufacturerRef = getProductsByManufacturerRef;

exports.getProductsByManufacturer = function getProductsByManufacturer(dcOrVars, vars) {
  return executeQuery(getProductsByManufacturerRef(dcOrVars, vars));
};

const getLowStockProductsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLowStockProducts', inputVars);
}
getLowStockProductsRef.operationName = 'GetLowStockProducts';
exports.getLowStockProductsRef = getLowStockProductsRef;

exports.getLowStockProducts = function getLowStockProducts(dcOrVars, vars) {
  return executeQuery(getLowStockProductsRef(dcOrVars, vars));
};

const listProductImagesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProductImages', inputVars);
}
listProductImagesRef.operationName = 'ListProductImages';
exports.listProductImagesRef = listProductImagesRef;

exports.listProductImages = function listProductImages(dcOrVars, vars) {
  return executeQuery(listProductImagesRef(dcOrVars, vars));
};

const getProductImagesByProductIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductImagesByProductId', inputVars);
}
getProductImagesByProductIdRef.operationName = 'GetProductImagesByProductId';
exports.getProductImagesByProductIdRef = getProductImagesByProductIdRef;

exports.getProductImagesByProductId = function getProductImagesByProductId(dcOrVars, vars) {
  return executeQuery(getProductImagesByProductIdRef(dcOrVars, vars));
};

const listManufacturersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListManufacturers', inputVars);
}
listManufacturersRef.operationName = 'ListManufacturers';
exports.listManufacturersRef = listManufacturersRef;

exports.listManufacturers = function listManufacturers(dcOrVars, vars) {
  return executeQuery(listManufacturersRef(dcOrVars, vars));
};

const getManufacturerByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetManufacturerById', inputVars);
}
getManufacturerByIdRef.operationName = 'GetManufacturerById';
exports.getManufacturerByIdRef = getManufacturerByIdRef;

exports.getManufacturerById = function getManufacturerById(dcOrVars, vars) {
  return executeQuery(getManufacturerByIdRef(dcOrVars, vars));
};

const getManufacturerByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetManufacturerByName', inputVars);
}
getManufacturerByNameRef.operationName = 'GetManufacturerByName';
exports.getManufacturerByNameRef = getManufacturerByNameRef;

exports.getManufacturerByName = function getManufacturerByName(dcOrVars, vars) {
  return executeQuery(getManufacturerByNameRef(dcOrVars, vars));
};

const listCategoriesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCategories', inputVars);
}
listCategoriesRef.operationName = 'ListCategories';
exports.listCategoriesRef = listCategoriesRef;

exports.listCategories = function listCategories(dcOrVars, vars) {
  return executeQuery(listCategoriesRef(dcOrVars, vars));
};

const getCategoryByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCategoryById', inputVars);
}
getCategoryByIdRef.operationName = 'GetCategoryById';
exports.getCategoryByIdRef = getCategoryByIdRef;

exports.getCategoryById = function getCategoryById(dcOrVars, vars) {
  return executeQuery(getCategoryByIdRef(dcOrVars, vars));
};

const getCategoryByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCategoryByName', inputVars);
}
getCategoryByNameRef.operationName = 'GetCategoryByName';
exports.getCategoryByNameRef = getCategoryByNameRef;

exports.getCategoryByName = function getCategoryByName(dcOrVars, vars) {
  return executeQuery(getCategoryByNameRef(dcOrVars, vars));
};

const getChildCategoriesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetChildCategories', inputVars);
}
getChildCategoriesRef.operationName = 'GetChildCategories';
exports.getChildCategoriesRef = getChildCategoriesRef;

exports.getChildCategories = function getChildCategories(dcOrVars, vars) {
  return executeQuery(getChildCategoriesRef(dcOrVars, vars));
};

const getParentCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetParentCategory', inputVars);
}
getParentCategoryRef.operationName = 'GetParentCategory';
exports.getParentCategoryRef = getParentCategoryRef;

exports.getParentCategory = function getParentCategory(dcOrVars, vars) {
  return executeQuery(getParentCategoryRef(dcOrVars, vars));
};

const listCpUsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCPUs', inputVars);
}
listCpUsRef.operationName = 'ListCPUs';
exports.listCpUsRef = listCpUsRef;

exports.listCpUs = function listCpUs(dcOrVars, vars) {
  return executeQuery(listCpUsRef(dcOrVars, vars));
};

const listGpUsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListGPUs', inputVars);
}
listGpUsRef.operationName = 'ListGPUs';
exports.listGpUsRef = listGpUsRef;

exports.listGpUs = function listGpUs(dcOrVars, vars) {
  return executeQuery(listGpUsRef(dcOrVars, vars));
};

const listStorageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListStorage', inputVars);
}
listStorageRef.operationName = 'ListStorage';
exports.listStorageRef = listStorageRef;

exports.listStorage = function listStorage(dcOrVars, vars) {
  return executeQuery(listStorageRef(dcOrVars, vars));
};

const listPsUsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPSUs', inputVars);
}
listPsUsRef.operationName = 'ListPSUs';
exports.listPsUsRef = listPsUsRef;

exports.listPsUs = function listPsUs(dcOrVars, vars) {
  return executeQuery(listPsUsRef(dcOrVars, vars));
};

const listCpuCoolersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCPUCoolers', inputVars);
}
listCpuCoolersRef.operationName = 'ListCPUCoolers';
exports.listCpuCoolersRef = listCpuCoolersRef;

exports.listCpuCoolers = function listCpuCoolers(dcOrVars, vars) {
  return executeQuery(listCpuCoolersRef(dcOrVars, vars));
};

const listCasesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCases', inputVars);
}
listCasesRef.operationName = 'ListCases';
exports.listCasesRef = listCasesRef;

exports.listCases = function listCases(dcOrVars, vars) {
  return executeQuery(listCasesRef(dcOrVars, vars));
};

const listRamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRAM', inputVars);
}
listRamRef.operationName = 'ListRAM';
exports.listRamRef = listRamRef;

exports.listRam = function listRam(dcOrVars, vars) {
  return executeQuery(listRamRef(dcOrVars, vars));
};

const listMotherboardsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMotherboards', inputVars);
}
listMotherboardsRef.operationName = 'ListMotherboards';
exports.listMotherboardsRef = listMotherboardsRef;

exports.listMotherboards = function listMotherboards(dcOrVars, vars) {
  return executeQuery(listMotherboardsRef(dcOrVars, vars));
};
