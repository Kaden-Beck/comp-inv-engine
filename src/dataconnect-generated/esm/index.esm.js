import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const OrderDirection = {
  ASC: "ASC",
  DESC: "DESC",
}

export const connectorConfig = {
  connector: 'inventory-connector',
  service: 'computer-hardware-bass-service',
  location: 'us-west3'
};

export const createProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProduct', inputVars);
}
createProductRef.operationName = 'CreateProduct';

export function createProduct(dcOrVars, vars) {
  return executeMutation(createProductRef(dcOrVars, vars));
}

export const updateProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProduct', inputVars);
}
updateProductRef.operationName = 'UpdateProduct';

export function updateProduct(dcOrVars, vars) {
  return executeMutation(updateProductRef(dcOrVars, vars));
}

export const deleteProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteProduct', inputVars);
}
deleteProductRef.operationName = 'DeleteProduct';

export function deleteProduct(dcOrVars, vars) {
  return executeMutation(deleteProductRef(dcOrVars, vars));
}

export const createCpuSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCPUSpecs', inputVars);
}
createCpuSpecsRef.operationName = 'CreateCPUSpecs';

export function createCpuSpecs(dcOrVars, vars) {
  return executeMutation(createCpuSpecsRef(dcOrVars, vars));
}

export const createGpuSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateGPUSpecs', inputVars);
}
createGpuSpecsRef.operationName = 'CreateGPUSpecs';

export function createGpuSpecs(dcOrVars, vars) {
  return executeMutation(createGpuSpecsRef(dcOrVars, vars));
}

export const createCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory', inputVars);
}
createCategoryRef.operationName = 'CreateCategory';

export function createCategory(dcOrVars, vars) {
  return executeMutation(createCategoryRef(dcOrVars, vars));
}

export const createStorageSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateStorageSpecs', inputVars);
}
createStorageSpecsRef.operationName = 'CreateStorageSpecs';

export function createStorageSpecs(dcOrVars, vars) {
  return executeMutation(createStorageSpecsRef(dcOrVars, vars));
}

export const createPsuSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePSUSpecs', inputVars);
}
createPsuSpecsRef.operationName = 'CreatePSUSpecs';

export function createPsuSpecs(dcOrVars, vars) {
  return executeMutation(createPsuSpecsRef(dcOrVars, vars));
}

export const createCpuCoolerSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCPUCoolerSpecs', inputVars);
}
createCpuCoolerSpecsRef.operationName = 'CreateCPUCoolerSpecs';

export function createCpuCoolerSpecs(dcOrVars, vars) {
  return executeMutation(createCpuCoolerSpecsRef(dcOrVars, vars));
}

export const createCaseSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCaseSpecs', inputVars);
}
createCaseSpecsRef.operationName = 'CreateCaseSpecs';

export function createCaseSpecs(dcOrVars, vars) {
  return executeMutation(createCaseSpecsRef(dcOrVars, vars));
}

export const createRamSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateRAMSpecs', inputVars);
}
createRamSpecsRef.operationName = 'CreateRAMSpecs';

export function createRamSpecs(dcOrVars, vars) {
  return executeMutation(createRamSpecsRef(dcOrVars, vars));
}

export const createMotherboardSpecsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMotherboardSpecs', inputVars);
}
createMotherboardSpecsRef.operationName = 'CreateMotherboardSpecs';

export function createMotherboardSpecs(dcOrVars, vars) {
  return executeMutation(createMotherboardSpecsRef(dcOrVars, vars));
}

export const listProductsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts', inputVars);
}
listProductsRef.operationName = 'ListProducts';

export function listProducts(dcOrVars, vars) {
  return executeQuery(listProductsRef(dcOrVars, vars));
}

export const getProductByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductById', inputVars);
}
getProductByIdRef.operationName = 'GetProductById';

export function getProductById(dcOrVars, vars) {
  return executeQuery(getProductByIdRef(dcOrVars, vars));
}

export const getProductBySkuRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductBySku', inputVars);
}
getProductBySkuRef.operationName = 'GetProductBySku';

export function getProductBySku(dcOrVars, vars) {
  return executeQuery(getProductBySkuRef(dcOrVars, vars));
}

export const searchProductsByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchProductsByName', inputVars);
}
searchProductsByNameRef.operationName = 'SearchProductsByName';

export function searchProductsByName(dcOrVars, vars) {
  return executeQuery(searchProductsByNameRef(dcOrVars, vars));
}

export const getProductsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductsByCategory', inputVars);
}
getProductsByCategoryRef.operationName = 'GetProductsByCategory';

export function getProductsByCategory(dcOrVars, vars) {
  return executeQuery(getProductsByCategoryRef(dcOrVars, vars));
}

export const getProductsByManufacturerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductsByManufacturer', inputVars);
}
getProductsByManufacturerRef.operationName = 'GetProductsByManufacturer';

export function getProductsByManufacturer(dcOrVars, vars) {
  return executeQuery(getProductsByManufacturerRef(dcOrVars, vars));
}

export const getLowStockProductsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLowStockProducts', inputVars);
}
getLowStockProductsRef.operationName = 'GetLowStockProducts';

export function getLowStockProducts(dcOrVars, vars) {
  return executeQuery(getLowStockProductsRef(dcOrVars, vars));
}

export const listProductImagesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProductImages', inputVars);
}
listProductImagesRef.operationName = 'ListProductImages';

export function listProductImages(dcOrVars, vars) {
  return executeQuery(listProductImagesRef(dcOrVars, vars));
}

export const getProductImagesByProductIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProductImagesByProductId', inputVars);
}
getProductImagesByProductIdRef.operationName = 'GetProductImagesByProductId';

export function getProductImagesByProductId(dcOrVars, vars) {
  return executeQuery(getProductImagesByProductIdRef(dcOrVars, vars));
}

export const listManufacturersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListManufacturers', inputVars);
}
listManufacturersRef.operationName = 'ListManufacturers';

export function listManufacturers(dcOrVars, vars) {
  return executeQuery(listManufacturersRef(dcOrVars, vars));
}

export const getManufacturerByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetManufacturerById', inputVars);
}
getManufacturerByIdRef.operationName = 'GetManufacturerById';

export function getManufacturerById(dcOrVars, vars) {
  return executeQuery(getManufacturerByIdRef(dcOrVars, vars));
}

export const getManufacturerByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetManufacturerByName', inputVars);
}
getManufacturerByNameRef.operationName = 'GetManufacturerByName';

export function getManufacturerByName(dcOrVars, vars) {
  return executeQuery(getManufacturerByNameRef(dcOrVars, vars));
}

export const listCategoriesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCategories', inputVars);
}
listCategoriesRef.operationName = 'ListCategories';

export function listCategories(dcOrVars, vars) {
  return executeQuery(listCategoriesRef(dcOrVars, vars));
}

export const getCategoryByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCategoryById', inputVars);
}
getCategoryByIdRef.operationName = 'GetCategoryById';

export function getCategoryById(dcOrVars, vars) {
  return executeQuery(getCategoryByIdRef(dcOrVars, vars));
}

export const getCategoryByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCategoryByName', inputVars);
}
getCategoryByNameRef.operationName = 'GetCategoryByName';

export function getCategoryByName(dcOrVars, vars) {
  return executeQuery(getCategoryByNameRef(dcOrVars, vars));
}

export const getChildCategoriesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetChildCategories', inputVars);
}
getChildCategoriesRef.operationName = 'GetChildCategories';

export function getChildCategories(dcOrVars, vars) {
  return executeQuery(getChildCategoriesRef(dcOrVars, vars));
}

export const getParentCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetParentCategory', inputVars);
}
getParentCategoryRef.operationName = 'GetParentCategory';

export function getParentCategory(dcOrVars, vars) {
  return executeQuery(getParentCategoryRef(dcOrVars, vars));
}

export const listCpUsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCPUs', inputVars);
}
listCpUsRef.operationName = 'ListCPUs';

export function listCpUs(dcOrVars, vars) {
  return executeQuery(listCpUsRef(dcOrVars, vars));
}

export const listGpUsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListGPUs', inputVars);
}
listGpUsRef.operationName = 'ListGPUs';

export function listGpUs(dcOrVars, vars) {
  return executeQuery(listGpUsRef(dcOrVars, vars));
}

export const listStorageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListStorage', inputVars);
}
listStorageRef.operationName = 'ListStorage';

export function listStorage(dcOrVars, vars) {
  return executeQuery(listStorageRef(dcOrVars, vars));
}

export const listPsUsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPSUs', inputVars);
}
listPsUsRef.operationName = 'ListPSUs';

export function listPsUs(dcOrVars, vars) {
  return executeQuery(listPsUsRef(dcOrVars, vars));
}

export const listCpuCoolersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCPUCoolers', inputVars);
}
listCpuCoolersRef.operationName = 'ListCPUCoolers';

export function listCpuCoolers(dcOrVars, vars) {
  return executeQuery(listCpuCoolersRef(dcOrVars, vars));
}

export const listCasesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCases', inputVars);
}
listCasesRef.operationName = 'ListCases';

export function listCases(dcOrVars, vars) {
  return executeQuery(listCasesRef(dcOrVars, vars));
}

export const listRamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRAM', inputVars);
}
listRamRef.operationName = 'ListRAM';

export function listRam(dcOrVars, vars) {
  return executeQuery(listRamRef(dcOrVars, vars));
}

export const listMotherboardsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMotherboards', inputVars);
}
listMotherboardsRef.operationName = 'ListMotherboards';

export function listMotherboards(dcOrVars, vars) {
  return executeQuery(listMotherboardsRef(dcOrVars, vars));
}

