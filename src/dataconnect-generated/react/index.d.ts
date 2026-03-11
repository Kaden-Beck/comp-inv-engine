import { CreateProductData, CreateProductVariables, UpdateProductData, UpdateProductVariables, DeleteProductData, DeleteProductVariables, CreateCpuSpecsData, CreateCpuSpecsVariables, CreateGpuSpecsData, CreateGpuSpecsVariables, CreateCategoryData, CreateCategoryVariables, CreateManufacturerData, CreateManufacturerVariables, CreateStorageSpecsData, CreateStorageSpecsVariables, CreatePsuSpecsData, CreatePsuSpecsVariables, CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables, CreateCaseSpecsData, CreateCaseSpecsVariables, CreateRamSpecsData, CreateRamSpecsVariables, CreateMotherboardSpecsData, CreateMotherboardSpecsVariables, ListProductsData, ListProductsVariables, GetProductByIdData, GetProductByIdVariables, GetProductBySkuData, GetProductBySkuVariables, SearchProductsByNameData, SearchProductsByNameVariables, GetProductsByCategoryData, GetProductsByCategoryVariables, GetProductsByManufacturerData, GetProductsByManufacturerVariables, GetLowStockProductsData, GetLowStockProductsVariables, ListProductImagesData, ListProductImagesVariables, GetProductImagesByProductIdData, GetProductImagesByProductIdVariables, ListManufacturersData, ListManufacturersVariables, GetManufacturerByIdData, GetManufacturerByIdVariables, GetManufacturerByNameData, GetManufacturerByNameVariables, ListCategoriesData, ListCategoriesVariables, GetCategoryByIdData, GetCategoryByIdVariables, GetCategoryByNameData, GetCategoryByNameVariables, GetChildCategoriesData, GetChildCategoriesVariables, GetParentCategoryData, GetParentCategoryVariables, ListCpUsData, ListCpUsVariables, ListGpUsData, ListGpUsVariables, ListStorageData, ListStorageVariables, ListPsUsData, ListPsUsVariables, ListCpuCoolersData, ListCpuCoolersVariables, ListCasesData, ListCasesVariables, ListRamData, ListRamVariables, ListMotherboardsData, ListMotherboardsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateProduct(options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;
export function useCreateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;

export function useUpdateProduct(options?: useDataConnectMutationOptions<UpdateProductData, FirebaseError, UpdateProductVariables>): UseDataConnectMutationResult<UpdateProductData, UpdateProductVariables>;
export function useUpdateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProductData, FirebaseError, UpdateProductVariables>): UseDataConnectMutationResult<UpdateProductData, UpdateProductVariables>;

export function useDeleteProduct(options?: useDataConnectMutationOptions<DeleteProductData, FirebaseError, DeleteProductVariables>): UseDataConnectMutationResult<DeleteProductData, DeleteProductVariables>;
export function useDeleteProduct(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProductData, FirebaseError, DeleteProductVariables>): UseDataConnectMutationResult<DeleteProductData, DeleteProductVariables>;

export function useCreateCpuSpecs(options?: useDataConnectMutationOptions<CreateCpuSpecsData, FirebaseError, CreateCpuSpecsVariables>): UseDataConnectMutationResult<CreateCpuSpecsData, CreateCpuSpecsVariables>;
export function useCreateCpuSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCpuSpecsData, FirebaseError, CreateCpuSpecsVariables>): UseDataConnectMutationResult<CreateCpuSpecsData, CreateCpuSpecsVariables>;

export function useCreateGpuSpecs(options?: useDataConnectMutationOptions<CreateGpuSpecsData, FirebaseError, CreateGpuSpecsVariables>): UseDataConnectMutationResult<CreateGpuSpecsData, CreateGpuSpecsVariables>;
export function useCreateGpuSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateGpuSpecsData, FirebaseError, CreateGpuSpecsVariables>): UseDataConnectMutationResult<CreateGpuSpecsData, CreateGpuSpecsVariables>;

export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;

export function useCreateManufacturer(options?: useDataConnectMutationOptions<CreateManufacturerData, FirebaseError, CreateManufacturerVariables>): UseDataConnectMutationResult<CreateManufacturerData, CreateManufacturerVariables>;
export function useCreateManufacturer(dc: DataConnect, options?: useDataConnectMutationOptions<CreateManufacturerData, FirebaseError, CreateManufacturerVariables>): UseDataConnectMutationResult<CreateManufacturerData, CreateManufacturerVariables>;

export function useCreateStorageSpecs(options?: useDataConnectMutationOptions<CreateStorageSpecsData, FirebaseError, CreateStorageSpecsVariables>): UseDataConnectMutationResult<CreateStorageSpecsData, CreateStorageSpecsVariables>;
export function useCreateStorageSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateStorageSpecsData, FirebaseError, CreateStorageSpecsVariables>): UseDataConnectMutationResult<CreateStorageSpecsData, CreateStorageSpecsVariables>;

export function useCreatePsuSpecs(options?: useDataConnectMutationOptions<CreatePsuSpecsData, FirebaseError, CreatePsuSpecsVariables>): UseDataConnectMutationResult<CreatePsuSpecsData, CreatePsuSpecsVariables>;
export function useCreatePsuSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePsuSpecsData, FirebaseError, CreatePsuSpecsVariables>): UseDataConnectMutationResult<CreatePsuSpecsData, CreatePsuSpecsVariables>;

export function useCreateCpuCoolerSpecs(options?: useDataConnectMutationOptions<CreateCpuCoolerSpecsData, FirebaseError, CreateCpuCoolerSpecsVariables>): UseDataConnectMutationResult<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
export function useCreateCpuCoolerSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCpuCoolerSpecsData, FirebaseError, CreateCpuCoolerSpecsVariables>): UseDataConnectMutationResult<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;

export function useCreateCaseSpecs(options?: useDataConnectMutationOptions<CreateCaseSpecsData, FirebaseError, CreateCaseSpecsVariables>): UseDataConnectMutationResult<CreateCaseSpecsData, CreateCaseSpecsVariables>;
export function useCreateCaseSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCaseSpecsData, FirebaseError, CreateCaseSpecsVariables>): UseDataConnectMutationResult<CreateCaseSpecsData, CreateCaseSpecsVariables>;

export function useCreateRamSpecs(options?: useDataConnectMutationOptions<CreateRamSpecsData, FirebaseError, CreateRamSpecsVariables>): UseDataConnectMutationResult<CreateRamSpecsData, CreateRamSpecsVariables>;
export function useCreateRamSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateRamSpecsData, FirebaseError, CreateRamSpecsVariables>): UseDataConnectMutationResult<CreateRamSpecsData, CreateRamSpecsVariables>;

export function useCreateMotherboardSpecs(options?: useDataConnectMutationOptions<CreateMotherboardSpecsData, FirebaseError, CreateMotherboardSpecsVariables>): UseDataConnectMutationResult<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
export function useCreateMotherboardSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMotherboardSpecsData, FirebaseError, CreateMotherboardSpecsVariables>): UseDataConnectMutationResult<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;

export function useListProducts(vars?: ListProductsVariables, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, ListProductsVariables>;
export function useListProducts(dc: DataConnect, vars?: ListProductsVariables, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, ListProductsVariables>;

export function useGetProductById(vars: GetProductByIdVariables, options?: useDataConnectQueryOptions<GetProductByIdData>): UseDataConnectQueryResult<GetProductByIdData, GetProductByIdVariables>;
export function useGetProductById(dc: DataConnect, vars: GetProductByIdVariables, options?: useDataConnectQueryOptions<GetProductByIdData>): UseDataConnectQueryResult<GetProductByIdData, GetProductByIdVariables>;

export function useGetProductBySku(vars: GetProductBySkuVariables, options?: useDataConnectQueryOptions<GetProductBySkuData>): UseDataConnectQueryResult<GetProductBySkuData, GetProductBySkuVariables>;
export function useGetProductBySku(dc: DataConnect, vars: GetProductBySkuVariables, options?: useDataConnectQueryOptions<GetProductBySkuData>): UseDataConnectQueryResult<GetProductBySkuData, GetProductBySkuVariables>;

export function useSearchProductsByName(vars?: SearchProductsByNameVariables, options?: useDataConnectQueryOptions<SearchProductsByNameData>): UseDataConnectQueryResult<SearchProductsByNameData, SearchProductsByNameVariables>;
export function useSearchProductsByName(dc: DataConnect, vars?: SearchProductsByNameVariables, options?: useDataConnectQueryOptions<SearchProductsByNameData>): UseDataConnectQueryResult<SearchProductsByNameData, SearchProductsByNameVariables>;

export function useGetProductsByCategory(vars: GetProductsByCategoryVariables, options?: useDataConnectQueryOptions<GetProductsByCategoryData>): UseDataConnectQueryResult<GetProductsByCategoryData, GetProductsByCategoryVariables>;
export function useGetProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables, options?: useDataConnectQueryOptions<GetProductsByCategoryData>): UseDataConnectQueryResult<GetProductsByCategoryData, GetProductsByCategoryVariables>;

export function useGetProductsByManufacturer(vars: GetProductsByManufacturerVariables, options?: useDataConnectQueryOptions<GetProductsByManufacturerData>): UseDataConnectQueryResult<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
export function useGetProductsByManufacturer(dc: DataConnect, vars: GetProductsByManufacturerVariables, options?: useDataConnectQueryOptions<GetProductsByManufacturerData>): UseDataConnectQueryResult<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;

export function useGetLowStockProducts(vars: GetLowStockProductsVariables, options?: useDataConnectQueryOptions<GetLowStockProductsData>): UseDataConnectQueryResult<GetLowStockProductsData, GetLowStockProductsVariables>;
export function useGetLowStockProducts(dc: DataConnect, vars: GetLowStockProductsVariables, options?: useDataConnectQueryOptions<GetLowStockProductsData>): UseDataConnectQueryResult<GetLowStockProductsData, GetLowStockProductsVariables>;

export function useListProductImages(vars?: ListProductImagesVariables, options?: useDataConnectQueryOptions<ListProductImagesData>): UseDataConnectQueryResult<ListProductImagesData, ListProductImagesVariables>;
export function useListProductImages(dc: DataConnect, vars?: ListProductImagesVariables, options?: useDataConnectQueryOptions<ListProductImagesData>): UseDataConnectQueryResult<ListProductImagesData, ListProductImagesVariables>;

export function useGetProductImagesByProductId(vars: GetProductImagesByProductIdVariables, options?: useDataConnectQueryOptions<GetProductImagesByProductIdData>): UseDataConnectQueryResult<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
export function useGetProductImagesByProductId(dc: DataConnect, vars: GetProductImagesByProductIdVariables, options?: useDataConnectQueryOptions<GetProductImagesByProductIdData>): UseDataConnectQueryResult<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;

export function useListManufacturers(vars?: ListManufacturersVariables, options?: useDataConnectQueryOptions<ListManufacturersData>): UseDataConnectQueryResult<ListManufacturersData, ListManufacturersVariables>;
export function useListManufacturers(dc: DataConnect, vars?: ListManufacturersVariables, options?: useDataConnectQueryOptions<ListManufacturersData>): UseDataConnectQueryResult<ListManufacturersData, ListManufacturersVariables>;

export function useGetManufacturerById(vars: GetManufacturerByIdVariables, options?: useDataConnectQueryOptions<GetManufacturerByIdData>): UseDataConnectQueryResult<GetManufacturerByIdData, GetManufacturerByIdVariables>;
export function useGetManufacturerById(dc: DataConnect, vars: GetManufacturerByIdVariables, options?: useDataConnectQueryOptions<GetManufacturerByIdData>): UseDataConnectQueryResult<GetManufacturerByIdData, GetManufacturerByIdVariables>;

export function useGetManufacturerByName(vars: GetManufacturerByNameVariables, options?: useDataConnectQueryOptions<GetManufacturerByNameData>): UseDataConnectQueryResult<GetManufacturerByNameData, GetManufacturerByNameVariables>;
export function useGetManufacturerByName(dc: DataConnect, vars: GetManufacturerByNameVariables, options?: useDataConnectQueryOptions<GetManufacturerByNameData>): UseDataConnectQueryResult<GetManufacturerByNameData, GetManufacturerByNameVariables>;

export function useListCategories(vars?: ListCategoriesVariables, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, ListCategoriesVariables>;
export function useListCategories(dc: DataConnect, vars?: ListCategoriesVariables, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, ListCategoriesVariables>;

export function useGetCategoryById(vars: GetCategoryByIdVariables, options?: useDataConnectQueryOptions<GetCategoryByIdData>): UseDataConnectQueryResult<GetCategoryByIdData, GetCategoryByIdVariables>;
export function useGetCategoryById(dc: DataConnect, vars: GetCategoryByIdVariables, options?: useDataConnectQueryOptions<GetCategoryByIdData>): UseDataConnectQueryResult<GetCategoryByIdData, GetCategoryByIdVariables>;

export function useGetCategoryByName(vars: GetCategoryByNameVariables, options?: useDataConnectQueryOptions<GetCategoryByNameData>): UseDataConnectQueryResult<GetCategoryByNameData, GetCategoryByNameVariables>;
export function useGetCategoryByName(dc: DataConnect, vars: GetCategoryByNameVariables, options?: useDataConnectQueryOptions<GetCategoryByNameData>): UseDataConnectQueryResult<GetCategoryByNameData, GetCategoryByNameVariables>;

export function useGetChildCategories(vars: GetChildCategoriesVariables, options?: useDataConnectQueryOptions<GetChildCategoriesData>): UseDataConnectQueryResult<GetChildCategoriesData, GetChildCategoriesVariables>;
export function useGetChildCategories(dc: DataConnect, vars: GetChildCategoriesVariables, options?: useDataConnectQueryOptions<GetChildCategoriesData>): UseDataConnectQueryResult<GetChildCategoriesData, GetChildCategoriesVariables>;

export function useGetParentCategory(vars: GetParentCategoryVariables, options?: useDataConnectQueryOptions<GetParentCategoryData>): UseDataConnectQueryResult<GetParentCategoryData, GetParentCategoryVariables>;
export function useGetParentCategory(dc: DataConnect, vars: GetParentCategoryVariables, options?: useDataConnectQueryOptions<GetParentCategoryData>): UseDataConnectQueryResult<GetParentCategoryData, GetParentCategoryVariables>;

export function useListCpUs(vars?: ListCpUsVariables, options?: useDataConnectQueryOptions<ListCpUsData>): UseDataConnectQueryResult<ListCpUsData, ListCpUsVariables>;
export function useListCpUs(dc: DataConnect, vars?: ListCpUsVariables, options?: useDataConnectQueryOptions<ListCpUsData>): UseDataConnectQueryResult<ListCpUsData, ListCpUsVariables>;

export function useListGpUs(vars?: ListGpUsVariables, options?: useDataConnectQueryOptions<ListGpUsData>): UseDataConnectQueryResult<ListGpUsData, ListGpUsVariables>;
export function useListGpUs(dc: DataConnect, vars?: ListGpUsVariables, options?: useDataConnectQueryOptions<ListGpUsData>): UseDataConnectQueryResult<ListGpUsData, ListGpUsVariables>;

export function useListStorage(vars?: ListStorageVariables, options?: useDataConnectQueryOptions<ListStorageData>): UseDataConnectQueryResult<ListStorageData, ListStorageVariables>;
export function useListStorage(dc: DataConnect, vars?: ListStorageVariables, options?: useDataConnectQueryOptions<ListStorageData>): UseDataConnectQueryResult<ListStorageData, ListStorageVariables>;

export function useListPsUs(vars?: ListPsUsVariables, options?: useDataConnectQueryOptions<ListPsUsData>): UseDataConnectQueryResult<ListPsUsData, ListPsUsVariables>;
export function useListPsUs(dc: DataConnect, vars?: ListPsUsVariables, options?: useDataConnectQueryOptions<ListPsUsData>): UseDataConnectQueryResult<ListPsUsData, ListPsUsVariables>;

export function useListCpuCoolers(vars?: ListCpuCoolersVariables, options?: useDataConnectQueryOptions<ListCpuCoolersData>): UseDataConnectQueryResult<ListCpuCoolersData, ListCpuCoolersVariables>;
export function useListCpuCoolers(dc: DataConnect, vars?: ListCpuCoolersVariables, options?: useDataConnectQueryOptions<ListCpuCoolersData>): UseDataConnectQueryResult<ListCpuCoolersData, ListCpuCoolersVariables>;

export function useListCases(vars?: ListCasesVariables, options?: useDataConnectQueryOptions<ListCasesData>): UseDataConnectQueryResult<ListCasesData, ListCasesVariables>;
export function useListCases(dc: DataConnect, vars?: ListCasesVariables, options?: useDataConnectQueryOptions<ListCasesData>): UseDataConnectQueryResult<ListCasesData, ListCasesVariables>;

export function useListRam(vars?: ListRamVariables, options?: useDataConnectQueryOptions<ListRamData>): UseDataConnectQueryResult<ListRamData, ListRamVariables>;
export function useListRam(dc: DataConnect, vars?: ListRamVariables, options?: useDataConnectQueryOptions<ListRamData>): UseDataConnectQueryResult<ListRamData, ListRamVariables>;

export function useListMotherboards(vars?: ListMotherboardsVariables, options?: useDataConnectQueryOptions<ListMotherboardsData>): UseDataConnectQueryResult<ListMotherboardsData, ListMotherboardsVariables>;
export function useListMotherboards(dc: DataConnect, vars?: ListMotherboardsVariables, options?: useDataConnectQueryOptions<ListMotherboardsData>): UseDataConnectQueryResult<ListMotherboardsData, ListMotherboardsVariables>;
