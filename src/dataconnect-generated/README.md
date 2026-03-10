# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `inventory-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProducts*](#listproducts)
  - [*GetProductById*](#getproductbyid)
  - [*GetProductBySku*](#getproductbysku)
  - [*SearchProductsByName*](#searchproductsbyname)
  - [*GetProductsByCategory*](#getproductsbycategory)
  - [*GetProductsByManufacturer*](#getproductsbymanufacturer)
  - [*GetLowStockProducts*](#getlowstockproducts)
  - [*ListProductImages*](#listproductimages)
  - [*GetProductImagesByProductId*](#getproductimagesbyproductid)
  - [*ListManufacturers*](#listmanufacturers)
  - [*GetManufacturerById*](#getmanufacturerbyid)
  - [*GetManufacturerByName*](#getmanufacturerbyname)
  - [*ListCategories*](#listcategories)
  - [*GetCategoryById*](#getcategorybyid)
  - [*GetCategoryByName*](#getcategorybyname)
  - [*GetChildCategories*](#getchildcategories)
  - [*GetParentCategory*](#getparentcategory)
  - [*ListCPUs*](#listcpus)
  - [*ListGPUs*](#listgpus)
  - [*ListStorage*](#liststorage)
  - [*ListPSUs*](#listpsus)
  - [*ListCPUCoolers*](#listcpucoolers)
  - [*ListCases*](#listcases)
  - [*ListRAM*](#listram)
  - [*ListMotherboards*](#listmotherboards)
- [**Mutations**](#mutations)
  - [*CreateProduct*](#createproduct)
  - [*UpdateProduct*](#updateproduct)
  - [*DeleteProduct*](#deleteproduct)
  - [*CreateCPUSpecs*](#createcpuspecs)
  - [*CreateGPUSpecs*](#creategpuspecs)
  - [*CreateCategory*](#createcategory)
  - [*CreateStorageSpecs*](#createstoragespecs)
  - [*CreatePSUSpecs*](#createpsuspecs)
  - [*CreateCPUCoolerSpecs*](#createcpucoolerspecs)
  - [*CreateCaseSpecs*](#createcasespecs)
  - [*CreateRAMSpecs*](#createramspecs)
  - [*CreateMotherboardSpecs*](#createmotherboardspecs)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `inventory-connector`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `inventory-connector` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProducts
You can execute the `ListProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProducts(vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;

interface ListProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
}
export const listProductsRef: ListProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProducts(dc: DataConnect, vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;

interface ListProductsRef {
  ...
  (dc: DataConnect, vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
}
export const listProductsRef: ListProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsRef:
```typescript
const name = listProductsRef.operationName;
console.log(name);
```

### Variables
The `ListProducts` query has an optional argument of type `ListProductsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListProductsVariables {
  orderByName?: OrderDirection | null;
  orderByQuantity?: OrderDirection | null;
  orderByPrice?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProducts, ListProductsVariables } from '@dataconnect/generated';

// The `ListProducts` query has an optional argument of type `ListProductsVariables`:
const listProductsVars: ListProductsVariables = {
  orderByName: ..., // optional
  orderByQuantity: ..., // optional
  orderByPrice: ..., // optional
  limit: ..., // optional
};

// Call the `listProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProducts(listProductsVars);
// Variables can be defined inline as well.
const { data } = await listProducts({ orderByName: ..., orderByQuantity: ..., orderByPrice: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListProductsVariables` argument.
const { data } = await listProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProducts(dataConnect, listProductsVars);

console.log(data.products);

// Or, you can use the `Promise` API.
listProducts(listProductsVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsRef, ListProductsVariables } from '@dataconnect/generated';

// The `ListProducts` query has an optional argument of type `ListProductsVariables`:
const listProductsVars: ListProductsVariables = {
  orderByName: ..., // optional
  orderByQuantity: ..., // optional
  orderByPrice: ..., // optional
  limit: ..., // optional
};

// Call the `listProductsRef()` function to get a reference to the query.
const ref = listProductsRef(listProductsVars);
// Variables can be defined inline as well.
const ref = listProductsRef({ orderByName: ..., orderByQuantity: ..., orderByPrice: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListProductsVariables` argument.
const ref = listProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsRef(dataConnect, listProductsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetProductById
You can execute the `GetProductById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductById(vars: GetProductByIdVariables): QueryPromise<GetProductByIdData, GetProductByIdVariables>;

interface GetProductByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductByIdVariables): QueryRef<GetProductByIdData, GetProductByIdVariables>;
}
export const getProductByIdRef: GetProductByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductById(dc: DataConnect, vars: GetProductByIdVariables): QueryPromise<GetProductByIdData, GetProductByIdVariables>;

interface GetProductByIdRef {
  ...
  (dc: DataConnect, vars: GetProductByIdVariables): QueryRef<GetProductByIdData, GetProductByIdVariables>;
}
export const getProductByIdRef: GetProductByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductByIdRef:
```typescript
const name = getProductByIdRef.operationName;
console.log(name);
```

### Variables
The `GetProductById` query requires an argument of type `GetProductByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetProductById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetProductById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductById, GetProductByIdVariables } from '@dataconnect/generated';

// The `GetProductById` query requires an argument of type `GetProductByIdVariables`:
const getProductByIdVars: GetProductByIdVariables = {
  id: ..., 
};

// Call the `getProductById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductById(getProductByIdVars);
// Variables can be defined inline as well.
const { data } = await getProductById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductById(dataConnect, getProductByIdVars);

console.log(data.product);

// Or, you can use the `Promise` API.
getProductById(getProductByIdVars).then((response) => {
  const data = response.data;
  console.log(data.product);
});
```

### Using `GetProductById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductByIdRef, GetProductByIdVariables } from '@dataconnect/generated';

// The `GetProductById` query requires an argument of type `GetProductByIdVariables`:
const getProductByIdVars: GetProductByIdVariables = {
  id: ..., 
};

// Call the `getProductByIdRef()` function to get a reference to the query.
const ref = getProductByIdRef(getProductByIdVars);
// Variables can be defined inline as well.
const ref = getProductByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductByIdRef(dataConnect, getProductByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.product);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.product);
});
```

## GetProductBySku
You can execute the `GetProductBySku` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductBySku(vars: GetProductBySkuVariables): QueryPromise<GetProductBySkuData, GetProductBySkuVariables>;

interface GetProductBySkuRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductBySkuVariables): QueryRef<GetProductBySkuData, GetProductBySkuVariables>;
}
export const getProductBySkuRef: GetProductBySkuRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductBySku(dc: DataConnect, vars: GetProductBySkuVariables): QueryPromise<GetProductBySkuData, GetProductBySkuVariables>;

interface GetProductBySkuRef {
  ...
  (dc: DataConnect, vars: GetProductBySkuVariables): QueryRef<GetProductBySkuData, GetProductBySkuVariables>;
}
export const getProductBySkuRef: GetProductBySkuRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductBySkuRef:
```typescript
const name = getProductBySkuRef.operationName;
console.log(name);
```

### Variables
The `GetProductBySku` query requires an argument of type `GetProductBySkuVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductBySkuVariables {
  sku: string;
}
```
### Return Type
Recall that executing the `GetProductBySku` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductBySkuData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetProductBySku`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductBySku, GetProductBySkuVariables } from '@dataconnect/generated';

// The `GetProductBySku` query requires an argument of type `GetProductBySkuVariables`:
const getProductBySkuVars: GetProductBySkuVariables = {
  sku: ..., 
};

// Call the `getProductBySku()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductBySku(getProductBySkuVars);
// Variables can be defined inline as well.
const { data } = await getProductBySku({ sku: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductBySku(dataConnect, getProductBySkuVars);

console.log(data.products);

// Or, you can use the `Promise` API.
getProductBySku(getProductBySkuVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetProductBySku`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductBySkuRef, GetProductBySkuVariables } from '@dataconnect/generated';

// The `GetProductBySku` query requires an argument of type `GetProductBySkuVariables`:
const getProductBySkuVars: GetProductBySkuVariables = {
  sku: ..., 
};

// Call the `getProductBySkuRef()` function to get a reference to the query.
const ref = getProductBySkuRef(getProductBySkuVars);
// Variables can be defined inline as well.
const ref = getProductBySkuRef({ sku: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductBySkuRef(dataConnect, getProductBySkuVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## SearchProductsByName
You can execute the `SearchProductsByName` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
searchProductsByName(vars?: SearchProductsByNameVariables): QueryPromise<SearchProductsByNameData, SearchProductsByNameVariables>;

interface SearchProductsByNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: SearchProductsByNameVariables): QueryRef<SearchProductsByNameData, SearchProductsByNameVariables>;
}
export const searchProductsByNameRef: SearchProductsByNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
searchProductsByName(dc: DataConnect, vars?: SearchProductsByNameVariables): QueryPromise<SearchProductsByNameData, SearchProductsByNameVariables>;

interface SearchProductsByNameRef {
  ...
  (dc: DataConnect, vars?: SearchProductsByNameVariables): QueryRef<SearchProductsByNameData, SearchProductsByNameVariables>;
}
export const searchProductsByNameRef: SearchProductsByNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the searchProductsByNameRef:
```typescript
const name = searchProductsByNameRef.operationName;
console.log(name);
```

### Variables
The `SearchProductsByName` query has an optional argument of type `SearchProductsByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SearchProductsByNameVariables {
  nameQuery?: string | null;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `SearchProductsByName` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SearchProductsByNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `SearchProductsByName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, searchProductsByName, SearchProductsByNameVariables } from '@dataconnect/generated';

// The `SearchProductsByName` query has an optional argument of type `SearchProductsByNameVariables`:
const searchProductsByNameVars: SearchProductsByNameVariables = {
  nameQuery: ..., // optional
  limit: ..., // optional
};

// Call the `searchProductsByName()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await searchProductsByName(searchProductsByNameVars);
// Variables can be defined inline as well.
const { data } = await searchProductsByName({ nameQuery: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `SearchProductsByNameVariables` argument.
const { data } = await searchProductsByName();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await searchProductsByName(dataConnect, searchProductsByNameVars);

console.log(data.products);

// Or, you can use the `Promise` API.
searchProductsByName(searchProductsByNameVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `SearchProductsByName`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, searchProductsByNameRef, SearchProductsByNameVariables } from '@dataconnect/generated';

// The `SearchProductsByName` query has an optional argument of type `SearchProductsByNameVariables`:
const searchProductsByNameVars: SearchProductsByNameVariables = {
  nameQuery: ..., // optional
  limit: ..., // optional
};

// Call the `searchProductsByNameRef()` function to get a reference to the query.
const ref = searchProductsByNameRef(searchProductsByNameVars);
// Variables can be defined inline as well.
const ref = searchProductsByNameRef({ nameQuery: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `SearchProductsByNameVariables` argument.
const ref = searchProductsByNameRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = searchProductsByNameRef(dataConnect, searchProductsByNameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetProductsByCategory
You can execute the `GetProductsByCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductsByCategory(vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;

interface GetProductsByCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
}
export const getProductsByCategoryRef: GetProductsByCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables): QueryPromise<GetProductsByCategoryData, GetProductsByCategoryVariables>;

interface GetProductsByCategoryRef {
  ...
  (dc: DataConnect, vars: GetProductsByCategoryVariables): QueryRef<GetProductsByCategoryData, GetProductsByCategoryVariables>;
}
export const getProductsByCategoryRef: GetProductsByCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductsByCategoryRef:
```typescript
const name = getProductsByCategoryRef.operationName;
console.log(name);
```

### Variables
The `GetProductsByCategory` query requires an argument of type `GetProductsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductsByCategoryVariables {
  categoryId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `GetProductsByCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetProductsByCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductsByCategory, GetProductsByCategoryVariables } from '@dataconnect/generated';

// The `GetProductsByCategory` query requires an argument of type `GetProductsByCategoryVariables`:
const getProductsByCategoryVars: GetProductsByCategoryVariables = {
  categoryId: ..., 
  limit: ..., // optional
};

// Call the `getProductsByCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductsByCategory(getProductsByCategoryVars);
// Variables can be defined inline as well.
const { data } = await getProductsByCategory({ categoryId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductsByCategory(dataConnect, getProductsByCategoryVars);

console.log(data.products);

// Or, you can use the `Promise` API.
getProductsByCategory(getProductsByCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetProductsByCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductsByCategoryRef, GetProductsByCategoryVariables } from '@dataconnect/generated';

// The `GetProductsByCategory` query requires an argument of type `GetProductsByCategoryVariables`:
const getProductsByCategoryVars: GetProductsByCategoryVariables = {
  categoryId: ..., 
  limit: ..., // optional
};

// Call the `getProductsByCategoryRef()` function to get a reference to the query.
const ref = getProductsByCategoryRef(getProductsByCategoryVars);
// Variables can be defined inline as well.
const ref = getProductsByCategoryRef({ categoryId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductsByCategoryRef(dataConnect, getProductsByCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetProductsByManufacturer
You can execute the `GetProductsByManufacturer` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductsByManufacturer(vars: GetProductsByManufacturerVariables): QueryPromise<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;

interface GetProductsByManufacturerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductsByManufacturerVariables): QueryRef<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
}
export const getProductsByManufacturerRef: GetProductsByManufacturerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductsByManufacturer(dc: DataConnect, vars: GetProductsByManufacturerVariables): QueryPromise<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;

interface GetProductsByManufacturerRef {
  ...
  (dc: DataConnect, vars: GetProductsByManufacturerVariables): QueryRef<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
}
export const getProductsByManufacturerRef: GetProductsByManufacturerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductsByManufacturerRef:
```typescript
const name = getProductsByManufacturerRef.operationName;
console.log(name);
```

### Variables
The `GetProductsByManufacturer` query requires an argument of type `GetProductsByManufacturerVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductsByManufacturerVariables {
  manufacturerId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `GetProductsByManufacturer` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductsByManufacturerData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetProductsByManufacturer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductsByManufacturer, GetProductsByManufacturerVariables } from '@dataconnect/generated';

// The `GetProductsByManufacturer` query requires an argument of type `GetProductsByManufacturerVariables`:
const getProductsByManufacturerVars: GetProductsByManufacturerVariables = {
  manufacturerId: ..., 
  limit: ..., // optional
};

// Call the `getProductsByManufacturer()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductsByManufacturer(getProductsByManufacturerVars);
// Variables can be defined inline as well.
const { data } = await getProductsByManufacturer({ manufacturerId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductsByManufacturer(dataConnect, getProductsByManufacturerVars);

console.log(data.products);

// Or, you can use the `Promise` API.
getProductsByManufacturer(getProductsByManufacturerVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetProductsByManufacturer`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductsByManufacturerRef, GetProductsByManufacturerVariables } from '@dataconnect/generated';

// The `GetProductsByManufacturer` query requires an argument of type `GetProductsByManufacturerVariables`:
const getProductsByManufacturerVars: GetProductsByManufacturerVariables = {
  manufacturerId: ..., 
  limit: ..., // optional
};

// Call the `getProductsByManufacturerRef()` function to get a reference to the query.
const ref = getProductsByManufacturerRef(getProductsByManufacturerVars);
// Variables can be defined inline as well.
const ref = getProductsByManufacturerRef({ manufacturerId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductsByManufacturerRef(dataConnect, getProductsByManufacturerVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetLowStockProducts
You can execute the `GetLowStockProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getLowStockProducts(vars: GetLowStockProductsVariables): QueryPromise<GetLowStockProductsData, GetLowStockProductsVariables>;

interface GetLowStockProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLowStockProductsVariables): QueryRef<GetLowStockProductsData, GetLowStockProductsVariables>;
}
export const getLowStockProductsRef: GetLowStockProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLowStockProducts(dc: DataConnect, vars: GetLowStockProductsVariables): QueryPromise<GetLowStockProductsData, GetLowStockProductsVariables>;

interface GetLowStockProductsRef {
  ...
  (dc: DataConnect, vars: GetLowStockProductsVariables): QueryRef<GetLowStockProductsData, GetLowStockProductsVariables>;
}
export const getLowStockProductsRef: GetLowStockProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLowStockProductsRef:
```typescript
const name = getLowStockProductsRef.operationName;
console.log(name);
```

### Variables
The `GetLowStockProducts` query requires an argument of type `GetLowStockProductsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLowStockProductsVariables {
  threshold: number;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `GetLowStockProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLowStockProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetLowStockProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLowStockProducts, GetLowStockProductsVariables } from '@dataconnect/generated';

// The `GetLowStockProducts` query requires an argument of type `GetLowStockProductsVariables`:
const getLowStockProductsVars: GetLowStockProductsVariables = {
  threshold: ..., 
  limit: ..., // optional
};

// Call the `getLowStockProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLowStockProducts(getLowStockProductsVars);
// Variables can be defined inline as well.
const { data } = await getLowStockProducts({ threshold: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLowStockProducts(dataConnect, getLowStockProductsVars);

console.log(data.products);

// Or, you can use the `Promise` API.
getLowStockProducts(getLowStockProductsVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetLowStockProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLowStockProductsRef, GetLowStockProductsVariables } from '@dataconnect/generated';

// The `GetLowStockProducts` query requires an argument of type `GetLowStockProductsVariables`:
const getLowStockProductsVars: GetLowStockProductsVariables = {
  threshold: ..., 
  limit: ..., // optional
};

// Call the `getLowStockProductsRef()` function to get a reference to the query.
const ref = getLowStockProductsRef(getLowStockProductsVars);
// Variables can be defined inline as well.
const ref = getLowStockProductsRef({ threshold: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLowStockProductsRef(dataConnect, getLowStockProductsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## ListProductImages
You can execute the `ListProductImages` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProductImages(vars?: ListProductImagesVariables): QueryPromise<ListProductImagesData, ListProductImagesVariables>;

interface ListProductImagesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListProductImagesVariables): QueryRef<ListProductImagesData, ListProductImagesVariables>;
}
export const listProductImagesRef: ListProductImagesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProductImages(dc: DataConnect, vars?: ListProductImagesVariables): QueryPromise<ListProductImagesData, ListProductImagesVariables>;

interface ListProductImagesRef {
  ...
  (dc: DataConnect, vars?: ListProductImagesVariables): QueryRef<ListProductImagesData, ListProductImagesVariables>;
}
export const listProductImagesRef: ListProductImagesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductImagesRef:
```typescript
const name = listProductImagesRef.operationName;
console.log(name);
```

### Variables
The `ListProductImages` query has an optional argument of type `ListProductImagesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListProductImagesVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListProductImages` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductImagesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListProductImages`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProductImages, ListProductImagesVariables } from '@dataconnect/generated';

// The `ListProductImages` query has an optional argument of type `ListProductImagesVariables`:
const listProductImagesVars: ListProductImagesVariables = {
  limit: ..., // optional
};

// Call the `listProductImages()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProductImages(listProductImagesVars);
// Variables can be defined inline as well.
const { data } = await listProductImages({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListProductImagesVariables` argument.
const { data } = await listProductImages();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProductImages(dataConnect, listProductImagesVars);

console.log(data.productImages);

// Or, you can use the `Promise` API.
listProductImages(listProductImagesVars).then((response) => {
  const data = response.data;
  console.log(data.productImages);
});
```

### Using `ListProductImages`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductImagesRef, ListProductImagesVariables } from '@dataconnect/generated';

// The `ListProductImages` query has an optional argument of type `ListProductImagesVariables`:
const listProductImagesVars: ListProductImagesVariables = {
  limit: ..., // optional
};

// Call the `listProductImagesRef()` function to get a reference to the query.
const ref = listProductImagesRef(listProductImagesVars);
// Variables can be defined inline as well.
const ref = listProductImagesRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListProductImagesVariables` argument.
const ref = listProductImagesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductImagesRef(dataConnect, listProductImagesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.productImages);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.productImages);
});
```

## GetProductImagesByProductId
You can execute the `GetProductImagesByProductId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductImagesByProductId(vars: GetProductImagesByProductIdVariables): QueryPromise<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;

interface GetProductImagesByProductIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductImagesByProductIdVariables): QueryRef<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
}
export const getProductImagesByProductIdRef: GetProductImagesByProductIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductImagesByProductId(dc: DataConnect, vars: GetProductImagesByProductIdVariables): QueryPromise<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;

interface GetProductImagesByProductIdRef {
  ...
  (dc: DataConnect, vars: GetProductImagesByProductIdVariables): QueryRef<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
}
export const getProductImagesByProductIdRef: GetProductImagesByProductIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductImagesByProductIdRef:
```typescript
const name = getProductImagesByProductIdRef.operationName;
console.log(name);
```

### Variables
The `GetProductImagesByProductId` query requires an argument of type `GetProductImagesByProductIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductImagesByProductIdVariables {
  productId: UUIDString;
}
```
### Return Type
Recall that executing the `GetProductImagesByProductId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductImagesByProductIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProductImagesByProductIdData {
  productImages: ({
    id: UUIDString;
    url: string;
    altText?: string | null;
  } & ProductImage_Key)[];
}
```
### Using `GetProductImagesByProductId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductImagesByProductId, GetProductImagesByProductIdVariables } from '@dataconnect/generated';

// The `GetProductImagesByProductId` query requires an argument of type `GetProductImagesByProductIdVariables`:
const getProductImagesByProductIdVars: GetProductImagesByProductIdVariables = {
  productId: ..., 
};

// Call the `getProductImagesByProductId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductImagesByProductId(getProductImagesByProductIdVars);
// Variables can be defined inline as well.
const { data } = await getProductImagesByProductId({ productId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductImagesByProductId(dataConnect, getProductImagesByProductIdVars);

console.log(data.productImages);

// Or, you can use the `Promise` API.
getProductImagesByProductId(getProductImagesByProductIdVars).then((response) => {
  const data = response.data;
  console.log(data.productImages);
});
```

### Using `GetProductImagesByProductId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductImagesByProductIdRef, GetProductImagesByProductIdVariables } from '@dataconnect/generated';

// The `GetProductImagesByProductId` query requires an argument of type `GetProductImagesByProductIdVariables`:
const getProductImagesByProductIdVars: GetProductImagesByProductIdVariables = {
  productId: ..., 
};

// Call the `getProductImagesByProductIdRef()` function to get a reference to the query.
const ref = getProductImagesByProductIdRef(getProductImagesByProductIdVars);
// Variables can be defined inline as well.
const ref = getProductImagesByProductIdRef({ productId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductImagesByProductIdRef(dataConnect, getProductImagesByProductIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.productImages);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.productImages);
});
```

## ListManufacturers
You can execute the `ListManufacturers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listManufacturers(vars?: ListManufacturersVariables): QueryPromise<ListManufacturersData, ListManufacturersVariables>;

interface ListManufacturersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListManufacturersVariables): QueryRef<ListManufacturersData, ListManufacturersVariables>;
}
export const listManufacturersRef: ListManufacturersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listManufacturers(dc: DataConnect, vars?: ListManufacturersVariables): QueryPromise<ListManufacturersData, ListManufacturersVariables>;

interface ListManufacturersRef {
  ...
  (dc: DataConnect, vars?: ListManufacturersVariables): QueryRef<ListManufacturersData, ListManufacturersVariables>;
}
export const listManufacturersRef: ListManufacturersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listManufacturersRef:
```typescript
const name = listManufacturersRef.operationName;
console.log(name);
```

### Variables
The `ListManufacturers` query has an optional argument of type `ListManufacturersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListManufacturersVariables {
  orderByName?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListManufacturers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListManufacturersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListManufacturersData {
  manufacturers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key)[];
}
```
### Using `ListManufacturers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listManufacturers, ListManufacturersVariables } from '@dataconnect/generated';

// The `ListManufacturers` query has an optional argument of type `ListManufacturersVariables`:
const listManufacturersVars: ListManufacturersVariables = {
  orderByName: ..., // optional
  limit: ..., // optional
};

// Call the `listManufacturers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listManufacturers(listManufacturersVars);
// Variables can be defined inline as well.
const { data } = await listManufacturers({ orderByName: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListManufacturersVariables` argument.
const { data } = await listManufacturers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listManufacturers(dataConnect, listManufacturersVars);

console.log(data.manufacturers);

// Or, you can use the `Promise` API.
listManufacturers(listManufacturersVars).then((response) => {
  const data = response.data;
  console.log(data.manufacturers);
});
```

### Using `ListManufacturers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listManufacturersRef, ListManufacturersVariables } from '@dataconnect/generated';

// The `ListManufacturers` query has an optional argument of type `ListManufacturersVariables`:
const listManufacturersVars: ListManufacturersVariables = {
  orderByName: ..., // optional
  limit: ..., // optional
};

// Call the `listManufacturersRef()` function to get a reference to the query.
const ref = listManufacturersRef(listManufacturersVars);
// Variables can be defined inline as well.
const ref = listManufacturersRef({ orderByName: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListManufacturersVariables` argument.
const ref = listManufacturersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listManufacturersRef(dataConnect, listManufacturersVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.manufacturers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.manufacturers);
});
```

## GetManufacturerById
You can execute the `GetManufacturerById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getManufacturerById(vars: GetManufacturerByIdVariables): QueryPromise<GetManufacturerByIdData, GetManufacturerByIdVariables>;

interface GetManufacturerByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetManufacturerByIdVariables): QueryRef<GetManufacturerByIdData, GetManufacturerByIdVariables>;
}
export const getManufacturerByIdRef: GetManufacturerByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getManufacturerById(dc: DataConnect, vars: GetManufacturerByIdVariables): QueryPromise<GetManufacturerByIdData, GetManufacturerByIdVariables>;

interface GetManufacturerByIdRef {
  ...
  (dc: DataConnect, vars: GetManufacturerByIdVariables): QueryRef<GetManufacturerByIdData, GetManufacturerByIdVariables>;
}
export const getManufacturerByIdRef: GetManufacturerByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getManufacturerByIdRef:
```typescript
const name = getManufacturerByIdRef.operationName;
console.log(name);
```

### Variables
The `GetManufacturerById` query requires an argument of type `GetManufacturerByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetManufacturerByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetManufacturerById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetManufacturerByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetManufacturerByIdData {
  manufacturer?: {
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key;
}
```
### Using `GetManufacturerById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getManufacturerById, GetManufacturerByIdVariables } from '@dataconnect/generated';

// The `GetManufacturerById` query requires an argument of type `GetManufacturerByIdVariables`:
const getManufacturerByIdVars: GetManufacturerByIdVariables = {
  id: ..., 
};

// Call the `getManufacturerById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getManufacturerById(getManufacturerByIdVars);
// Variables can be defined inline as well.
const { data } = await getManufacturerById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getManufacturerById(dataConnect, getManufacturerByIdVars);

console.log(data.manufacturer);

// Or, you can use the `Promise` API.
getManufacturerById(getManufacturerByIdVars).then((response) => {
  const data = response.data;
  console.log(data.manufacturer);
});
```

### Using `GetManufacturerById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getManufacturerByIdRef, GetManufacturerByIdVariables } from '@dataconnect/generated';

// The `GetManufacturerById` query requires an argument of type `GetManufacturerByIdVariables`:
const getManufacturerByIdVars: GetManufacturerByIdVariables = {
  id: ..., 
};

// Call the `getManufacturerByIdRef()` function to get a reference to the query.
const ref = getManufacturerByIdRef(getManufacturerByIdVars);
// Variables can be defined inline as well.
const ref = getManufacturerByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getManufacturerByIdRef(dataConnect, getManufacturerByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.manufacturer);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.manufacturer);
});
```

## GetManufacturerByName
You can execute the `GetManufacturerByName` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getManufacturerByName(vars: GetManufacturerByNameVariables): QueryPromise<GetManufacturerByNameData, GetManufacturerByNameVariables>;

interface GetManufacturerByNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetManufacturerByNameVariables): QueryRef<GetManufacturerByNameData, GetManufacturerByNameVariables>;
}
export const getManufacturerByNameRef: GetManufacturerByNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getManufacturerByName(dc: DataConnect, vars: GetManufacturerByNameVariables): QueryPromise<GetManufacturerByNameData, GetManufacturerByNameVariables>;

interface GetManufacturerByNameRef {
  ...
  (dc: DataConnect, vars: GetManufacturerByNameVariables): QueryRef<GetManufacturerByNameData, GetManufacturerByNameVariables>;
}
export const getManufacturerByNameRef: GetManufacturerByNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getManufacturerByNameRef:
```typescript
const name = getManufacturerByNameRef.operationName;
console.log(name);
```

### Variables
The `GetManufacturerByName` query requires an argument of type `GetManufacturerByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetManufacturerByNameVariables {
  name: string;
}
```
### Return Type
Recall that executing the `GetManufacturerByName` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetManufacturerByNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetManufacturerByNameData {
  manufacturers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key)[];
}
```
### Using `GetManufacturerByName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getManufacturerByName, GetManufacturerByNameVariables } from '@dataconnect/generated';

// The `GetManufacturerByName` query requires an argument of type `GetManufacturerByNameVariables`:
const getManufacturerByNameVars: GetManufacturerByNameVariables = {
  name: ..., 
};

// Call the `getManufacturerByName()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getManufacturerByName(getManufacturerByNameVars);
// Variables can be defined inline as well.
const { data } = await getManufacturerByName({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getManufacturerByName(dataConnect, getManufacturerByNameVars);

console.log(data.manufacturers);

// Or, you can use the `Promise` API.
getManufacturerByName(getManufacturerByNameVars).then((response) => {
  const data = response.data;
  console.log(data.manufacturers);
});
```

### Using `GetManufacturerByName`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getManufacturerByNameRef, GetManufacturerByNameVariables } from '@dataconnect/generated';

// The `GetManufacturerByName` query requires an argument of type `GetManufacturerByNameVariables`:
const getManufacturerByNameVars: GetManufacturerByNameVariables = {
  name: ..., 
};

// Call the `getManufacturerByNameRef()` function to get a reference to the query.
const ref = getManufacturerByNameRef(getManufacturerByNameVars);
// Variables can be defined inline as well.
const ref = getManufacturerByNameRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getManufacturerByNameRef(dataConnect, getManufacturerByNameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.manufacturers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.manufacturers);
});
```

## ListCategories
You can execute the `ListCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCategories(vars?: ListCategoriesVariables): QueryPromise<ListCategoriesData, ListCategoriesVariables>;

interface ListCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCategoriesVariables): QueryRef<ListCategoriesData, ListCategoriesVariables>;
}
export const listCategoriesRef: ListCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCategories(dc: DataConnect, vars?: ListCategoriesVariables): QueryPromise<ListCategoriesData, ListCategoriesVariables>;

interface ListCategoriesRef {
  ...
  (dc: DataConnect, vars?: ListCategoriesVariables): QueryRef<ListCategoriesData, ListCategoriesVariables>;
}
export const listCategoriesRef: ListCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCategoriesRef:
```typescript
const name = listCategoriesRef.operationName;
console.log(name);
```

### Variables
The `ListCategories` query has an optional argument of type `ListCategoriesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListCategoriesVariables {
  orderByName?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
  } & Category_Key)[];
}
```
### Using `ListCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCategories, ListCategoriesVariables } from '@dataconnect/generated';

// The `ListCategories` query has an optional argument of type `ListCategoriesVariables`:
const listCategoriesVars: ListCategoriesVariables = {
  orderByName: ..., // optional
  limit: ..., // optional
};

// Call the `listCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCategories(listCategoriesVars);
// Variables can be defined inline as well.
const { data } = await listCategories({ orderByName: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCategoriesVariables` argument.
const { data } = await listCategories();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCategories(dataConnect, listCategoriesVars);

console.log(data.categories);

// Or, you can use the `Promise` API.
listCategories(listCategoriesVars).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `ListCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCategoriesRef, ListCategoriesVariables } from '@dataconnect/generated';

// The `ListCategories` query has an optional argument of type `ListCategoriesVariables`:
const listCategoriesVars: ListCategoriesVariables = {
  orderByName: ..., // optional
  limit: ..., // optional
};

// Call the `listCategoriesRef()` function to get a reference to the query.
const ref = listCategoriesRef(listCategoriesVars);
// Variables can be defined inline as well.
const ref = listCategoriesRef({ orderByName: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCategoriesVariables` argument.
const ref = listCategoriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCategoriesRef(dataConnect, listCategoriesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

## GetCategoryById
You can execute the `GetCategoryById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCategoryById(vars: GetCategoryByIdVariables): QueryPromise<GetCategoryByIdData, GetCategoryByIdVariables>;

interface GetCategoryByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryByIdVariables): QueryRef<GetCategoryByIdData, GetCategoryByIdVariables>;
}
export const getCategoryByIdRef: GetCategoryByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCategoryById(dc: DataConnect, vars: GetCategoryByIdVariables): QueryPromise<GetCategoryByIdData, GetCategoryByIdVariables>;

interface GetCategoryByIdRef {
  ...
  (dc: DataConnect, vars: GetCategoryByIdVariables): QueryRef<GetCategoryByIdData, GetCategoryByIdVariables>;
}
export const getCategoryByIdRef: GetCategoryByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCategoryByIdRef:
```typescript
const name = getCategoryByIdRef.operationName;
console.log(name);
```

### Variables
The `GetCategoryById` query requires an argument of type `GetCategoryByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCategoryByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetCategoryById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCategoryByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetCategoryById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCategoryById, GetCategoryByIdVariables } from '@dataconnect/generated';

// The `GetCategoryById` query requires an argument of type `GetCategoryByIdVariables`:
const getCategoryByIdVars: GetCategoryByIdVariables = {
  id: ..., 
};

// Call the `getCategoryById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCategoryById(getCategoryByIdVars);
// Variables can be defined inline as well.
const { data } = await getCategoryById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCategoryById(dataConnect, getCategoryByIdVars);

console.log(data.category);

// Or, you can use the `Promise` API.
getCategoryById(getCategoryByIdVars).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

### Using `GetCategoryById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCategoryByIdRef, GetCategoryByIdVariables } from '@dataconnect/generated';

// The `GetCategoryById` query requires an argument of type `GetCategoryByIdVariables`:
const getCategoryByIdVars: GetCategoryByIdVariables = {
  id: ..., 
};

// Call the `getCategoryByIdRef()` function to get a reference to the query.
const ref = getCategoryByIdRef(getCategoryByIdVars);
// Variables can be defined inline as well.
const ref = getCategoryByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCategoryByIdRef(dataConnect, getCategoryByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.category);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

## GetCategoryByName
You can execute the `GetCategoryByName` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCategoryByName(vars: GetCategoryByNameVariables): QueryPromise<GetCategoryByNameData, GetCategoryByNameVariables>;

interface GetCategoryByNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryByNameVariables): QueryRef<GetCategoryByNameData, GetCategoryByNameVariables>;
}
export const getCategoryByNameRef: GetCategoryByNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCategoryByName(dc: DataConnect, vars: GetCategoryByNameVariables): QueryPromise<GetCategoryByNameData, GetCategoryByNameVariables>;

interface GetCategoryByNameRef {
  ...
  (dc: DataConnect, vars: GetCategoryByNameVariables): QueryRef<GetCategoryByNameData, GetCategoryByNameVariables>;
}
export const getCategoryByNameRef: GetCategoryByNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCategoryByNameRef:
```typescript
const name = getCategoryByNameRef.operationName;
console.log(name);
```

### Variables
The `GetCategoryByName` query requires an argument of type `GetCategoryByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCategoryByNameVariables {
  name: string;
}
```
### Return Type
Recall that executing the `GetCategoryByName` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCategoryByNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetCategoryByName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCategoryByName, GetCategoryByNameVariables } from '@dataconnect/generated';

// The `GetCategoryByName` query requires an argument of type `GetCategoryByNameVariables`:
const getCategoryByNameVars: GetCategoryByNameVariables = {
  name: ..., 
};

// Call the `getCategoryByName()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCategoryByName(getCategoryByNameVars);
// Variables can be defined inline as well.
const { data } = await getCategoryByName({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCategoryByName(dataConnect, getCategoryByNameVars);

console.log(data.categories);

// Or, you can use the `Promise` API.
getCategoryByName(getCategoryByNameVars).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `GetCategoryByName`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCategoryByNameRef, GetCategoryByNameVariables } from '@dataconnect/generated';

// The `GetCategoryByName` query requires an argument of type `GetCategoryByNameVariables`:
const getCategoryByNameVars: GetCategoryByNameVariables = {
  name: ..., 
};

// Call the `getCategoryByNameRef()` function to get a reference to the query.
const ref = getCategoryByNameRef(getCategoryByNameVars);
// Variables can be defined inline as well.
const ref = getCategoryByNameRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCategoryByNameRef(dataConnect, getCategoryByNameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

## GetChildCategories
You can execute the `GetChildCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getChildCategories(vars: GetChildCategoriesVariables): QueryPromise<GetChildCategoriesData, GetChildCategoriesVariables>;

interface GetChildCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetChildCategoriesVariables): QueryRef<GetChildCategoriesData, GetChildCategoriesVariables>;
}
export const getChildCategoriesRef: GetChildCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getChildCategories(dc: DataConnect, vars: GetChildCategoriesVariables): QueryPromise<GetChildCategoriesData, GetChildCategoriesVariables>;

interface GetChildCategoriesRef {
  ...
  (dc: DataConnect, vars: GetChildCategoriesVariables): QueryRef<GetChildCategoriesData, GetChildCategoriesVariables>;
}
export const getChildCategoriesRef: GetChildCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getChildCategoriesRef:
```typescript
const name = getChildCategoriesRef.operationName;
console.log(name);
```

### Variables
The `GetChildCategories` query requires an argument of type `GetChildCategoriesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetChildCategoriesVariables {
  parentId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `GetChildCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetChildCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetChildCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
  } & Category_Key)[];
}
```
### Using `GetChildCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getChildCategories, GetChildCategoriesVariables } from '@dataconnect/generated';

// The `GetChildCategories` query requires an argument of type `GetChildCategoriesVariables`:
const getChildCategoriesVars: GetChildCategoriesVariables = {
  parentId: ..., 
  limit: ..., // optional
};

// Call the `getChildCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getChildCategories(getChildCategoriesVars);
// Variables can be defined inline as well.
const { data } = await getChildCategories({ parentId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getChildCategories(dataConnect, getChildCategoriesVars);

console.log(data.categories);

// Or, you can use the `Promise` API.
getChildCategories(getChildCategoriesVars).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `GetChildCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getChildCategoriesRef, GetChildCategoriesVariables } from '@dataconnect/generated';

// The `GetChildCategories` query requires an argument of type `GetChildCategoriesVariables`:
const getChildCategoriesVars: GetChildCategoriesVariables = {
  parentId: ..., 
  limit: ..., // optional
};

// Call the `getChildCategoriesRef()` function to get a reference to the query.
const ref = getChildCategoriesRef(getChildCategoriesVars);
// Variables can be defined inline as well.
const ref = getChildCategoriesRef({ parentId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getChildCategoriesRef(dataConnect, getChildCategoriesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

## GetParentCategory
You can execute the `GetParentCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getParentCategory(vars: GetParentCategoryVariables): QueryPromise<GetParentCategoryData, GetParentCategoryVariables>;

interface GetParentCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetParentCategoryVariables): QueryRef<GetParentCategoryData, GetParentCategoryVariables>;
}
export const getParentCategoryRef: GetParentCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getParentCategory(dc: DataConnect, vars: GetParentCategoryVariables): QueryPromise<GetParentCategoryData, GetParentCategoryVariables>;

interface GetParentCategoryRef {
  ...
  (dc: DataConnect, vars: GetParentCategoryVariables): QueryRef<GetParentCategoryData, GetParentCategoryVariables>;
}
export const getParentCategoryRef: GetParentCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getParentCategoryRef:
```typescript
const name = getParentCategoryRef.operationName;
console.log(name);
```

### Variables
The `GetParentCategory` query requires an argument of type `GetParentCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetParentCategoryVariables {
  childId: UUIDString;
}
```
### Return Type
Recall that executing the `GetParentCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetParentCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetParentCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getParentCategory, GetParentCategoryVariables } from '@dataconnect/generated';

// The `GetParentCategory` query requires an argument of type `GetParentCategoryVariables`:
const getParentCategoryVars: GetParentCategoryVariables = {
  childId: ..., 
};

// Call the `getParentCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getParentCategory(getParentCategoryVars);
// Variables can be defined inline as well.
const { data } = await getParentCategory({ childId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getParentCategory(dataConnect, getParentCategoryVars);

console.log(data.category);

// Or, you can use the `Promise` API.
getParentCategory(getParentCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

### Using `GetParentCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getParentCategoryRef, GetParentCategoryVariables } from '@dataconnect/generated';

// The `GetParentCategory` query requires an argument of type `GetParentCategoryVariables`:
const getParentCategoryVars: GetParentCategoryVariables = {
  childId: ..., 
};

// Call the `getParentCategoryRef()` function to get a reference to the query.
const ref = getParentCategoryRef(getParentCategoryVars);
// Variables can be defined inline as well.
const ref = getParentCategoryRef({ childId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getParentCategoryRef(dataConnect, getParentCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.category);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

## ListCPUs
You can execute the `ListCPUs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCpUs(vars?: ListCpUsVariables): QueryPromise<ListCpUsData, ListCpUsVariables>;

interface ListCpUsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCpUsVariables): QueryRef<ListCpUsData, ListCpUsVariables>;
}
export const listCpUsRef: ListCpUsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCpUs(dc: DataConnect, vars?: ListCpUsVariables): QueryPromise<ListCpUsData, ListCpUsVariables>;

interface ListCpUsRef {
  ...
  (dc: DataConnect, vars?: ListCpUsVariables): QueryRef<ListCpUsData, ListCpUsVariables>;
}
export const listCpUsRef: ListCpUsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCpUsRef:
```typescript
const name = listCpUsRef.operationName;
console.log(name);
```

### Variables
The `ListCPUs` query has an optional argument of type `ListCpUsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListCpUsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListCPUs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCpUsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListCPUs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCpUs, ListCpUsVariables } from '@dataconnect/generated';

// The `ListCPUs` query has an optional argument of type `ListCpUsVariables`:
const listCpUsVars: ListCpUsVariables = {
  limit: ..., // optional
};

// Call the `listCpUs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCpUs(listCpUsVars);
// Variables can be defined inline as well.
const { data } = await listCpUs({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCpUsVariables` argument.
const { data } = await listCpUs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCpUs(dataConnect, listCpUsVars);

console.log(data.cpus);

// Or, you can use the `Promise` API.
listCpUs(listCpUsVars).then((response) => {
  const data = response.data;
  console.log(data.cpus);
});
```

### Using `ListCPUs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCpUsRef, ListCpUsVariables } from '@dataconnect/generated';

// The `ListCPUs` query has an optional argument of type `ListCpUsVariables`:
const listCpUsVars: ListCpUsVariables = {
  limit: ..., // optional
};

// Call the `listCpUsRef()` function to get a reference to the query.
const ref = listCpUsRef(listCpUsVars);
// Variables can be defined inline as well.
const ref = listCpUsRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCpUsVariables` argument.
const ref = listCpUsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCpUsRef(dataConnect, listCpUsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cpus);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cpus);
});
```

## ListGPUs
You can execute the `ListGPUs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listGpUs(vars?: ListGpUsVariables): QueryPromise<ListGpUsData, ListGpUsVariables>;

interface ListGpUsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListGpUsVariables): QueryRef<ListGpUsData, ListGpUsVariables>;
}
export const listGpUsRef: ListGpUsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listGpUs(dc: DataConnect, vars?: ListGpUsVariables): QueryPromise<ListGpUsData, ListGpUsVariables>;

interface ListGpUsRef {
  ...
  (dc: DataConnect, vars?: ListGpUsVariables): QueryRef<ListGpUsData, ListGpUsVariables>;
}
export const listGpUsRef: ListGpUsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listGpUsRef:
```typescript
const name = listGpUsRef.operationName;
console.log(name);
```

### Variables
The `ListGPUs` query has an optional argument of type `ListGpUsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListGpUsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListGPUs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListGpUsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListGPUs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listGpUs, ListGpUsVariables } from '@dataconnect/generated';

// The `ListGPUs` query has an optional argument of type `ListGpUsVariables`:
const listGpUsVars: ListGpUsVariables = {
  limit: ..., // optional
};

// Call the `listGpUs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listGpUs(listGpUsVars);
// Variables can be defined inline as well.
const { data } = await listGpUs({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListGpUsVariables` argument.
const { data } = await listGpUs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listGpUs(dataConnect, listGpUsVars);

console.log(data.gpus);

// Or, you can use the `Promise` API.
listGpUs(listGpUsVars).then((response) => {
  const data = response.data;
  console.log(data.gpus);
});
```

### Using `ListGPUs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listGpUsRef, ListGpUsVariables } from '@dataconnect/generated';

// The `ListGPUs` query has an optional argument of type `ListGpUsVariables`:
const listGpUsVars: ListGpUsVariables = {
  limit: ..., // optional
};

// Call the `listGpUsRef()` function to get a reference to the query.
const ref = listGpUsRef(listGpUsVars);
// Variables can be defined inline as well.
const ref = listGpUsRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListGpUsVariables` argument.
const ref = listGpUsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listGpUsRef(dataConnect, listGpUsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.gpus);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.gpus);
});
```

## ListStorage
You can execute the `ListStorage` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listStorage(vars?: ListStorageVariables): QueryPromise<ListStorageData, ListStorageVariables>;

interface ListStorageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListStorageVariables): QueryRef<ListStorageData, ListStorageVariables>;
}
export const listStorageRef: ListStorageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listStorage(dc: DataConnect, vars?: ListStorageVariables): QueryPromise<ListStorageData, ListStorageVariables>;

interface ListStorageRef {
  ...
  (dc: DataConnect, vars?: ListStorageVariables): QueryRef<ListStorageData, ListStorageVariables>;
}
export const listStorageRef: ListStorageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listStorageRef:
```typescript
const name = listStorageRef.operationName;
console.log(name);
```

### Variables
The `ListStorage` query has an optional argument of type `ListStorageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListStorageVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListStorage` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListStorageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListStorage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listStorage, ListStorageVariables } from '@dataconnect/generated';

// The `ListStorage` query has an optional argument of type `ListStorageVariables`:
const listStorageVars: ListStorageVariables = {
  limit: ..., // optional
};

// Call the `listStorage()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listStorage(listStorageVars);
// Variables can be defined inline as well.
const { data } = await listStorage({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListStorageVariables` argument.
const { data } = await listStorage();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listStorage(dataConnect, listStorageVars);

console.log(data.storages);

// Or, you can use the `Promise` API.
listStorage(listStorageVars).then((response) => {
  const data = response.data;
  console.log(data.storages);
});
```

### Using `ListStorage`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listStorageRef, ListStorageVariables } from '@dataconnect/generated';

// The `ListStorage` query has an optional argument of type `ListStorageVariables`:
const listStorageVars: ListStorageVariables = {
  limit: ..., // optional
};

// Call the `listStorageRef()` function to get a reference to the query.
const ref = listStorageRef(listStorageVars);
// Variables can be defined inline as well.
const ref = listStorageRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListStorageVariables` argument.
const ref = listStorageRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listStorageRef(dataConnect, listStorageVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.storages);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.storages);
});
```

## ListPSUs
You can execute the `ListPSUs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPsUs(vars?: ListPsUsVariables): QueryPromise<ListPsUsData, ListPsUsVariables>;

interface ListPsUsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListPsUsVariables): QueryRef<ListPsUsData, ListPsUsVariables>;
}
export const listPsUsRef: ListPsUsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPsUs(dc: DataConnect, vars?: ListPsUsVariables): QueryPromise<ListPsUsData, ListPsUsVariables>;

interface ListPsUsRef {
  ...
  (dc: DataConnect, vars?: ListPsUsVariables): QueryRef<ListPsUsData, ListPsUsVariables>;
}
export const listPsUsRef: ListPsUsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPsUsRef:
```typescript
const name = listPsUsRef.operationName;
console.log(name);
```

### Variables
The `ListPSUs` query has an optional argument of type `ListPsUsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPsUsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListPSUs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPsUsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListPSUs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPsUs, ListPsUsVariables } from '@dataconnect/generated';

// The `ListPSUs` query has an optional argument of type `ListPsUsVariables`:
const listPsUsVars: ListPsUsVariables = {
  limit: ..., // optional
};

// Call the `listPsUs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPsUs(listPsUsVars);
// Variables can be defined inline as well.
const { data } = await listPsUs({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListPsUsVariables` argument.
const { data } = await listPsUs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPsUs(dataConnect, listPsUsVars);

console.log(data.psus);

// Or, you can use the `Promise` API.
listPsUs(listPsUsVars).then((response) => {
  const data = response.data;
  console.log(data.psus);
});
```

### Using `ListPSUs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPsUsRef, ListPsUsVariables } from '@dataconnect/generated';

// The `ListPSUs` query has an optional argument of type `ListPsUsVariables`:
const listPsUsVars: ListPsUsVariables = {
  limit: ..., // optional
};

// Call the `listPsUsRef()` function to get a reference to the query.
const ref = listPsUsRef(listPsUsVars);
// Variables can be defined inline as well.
const ref = listPsUsRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListPsUsVariables` argument.
const ref = listPsUsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPsUsRef(dataConnect, listPsUsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.psus);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.psus);
});
```

## ListCPUCoolers
You can execute the `ListCPUCoolers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCpuCoolers(vars?: ListCpuCoolersVariables): QueryPromise<ListCpuCoolersData, ListCpuCoolersVariables>;

interface ListCpuCoolersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCpuCoolersVariables): QueryRef<ListCpuCoolersData, ListCpuCoolersVariables>;
}
export const listCpuCoolersRef: ListCpuCoolersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCpuCoolers(dc: DataConnect, vars?: ListCpuCoolersVariables): QueryPromise<ListCpuCoolersData, ListCpuCoolersVariables>;

interface ListCpuCoolersRef {
  ...
  (dc: DataConnect, vars?: ListCpuCoolersVariables): QueryRef<ListCpuCoolersData, ListCpuCoolersVariables>;
}
export const listCpuCoolersRef: ListCpuCoolersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCpuCoolersRef:
```typescript
const name = listCpuCoolersRef.operationName;
console.log(name);
```

### Variables
The `ListCPUCoolers` query has an optional argument of type `ListCpuCoolersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListCpuCoolersVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListCPUCoolers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCpuCoolersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListCPUCoolers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCpuCoolers, ListCpuCoolersVariables } from '@dataconnect/generated';

// The `ListCPUCoolers` query has an optional argument of type `ListCpuCoolersVariables`:
const listCpuCoolersVars: ListCpuCoolersVariables = {
  limit: ..., // optional
};

// Call the `listCpuCoolers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCpuCoolers(listCpuCoolersVars);
// Variables can be defined inline as well.
const { data } = await listCpuCoolers({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCpuCoolersVariables` argument.
const { data } = await listCpuCoolers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCpuCoolers(dataConnect, listCpuCoolersVars);

console.log(data.cpuCoolers);

// Or, you can use the `Promise` API.
listCpuCoolers(listCpuCoolersVars).then((response) => {
  const data = response.data;
  console.log(data.cpuCoolers);
});
```

### Using `ListCPUCoolers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCpuCoolersRef, ListCpuCoolersVariables } from '@dataconnect/generated';

// The `ListCPUCoolers` query has an optional argument of type `ListCpuCoolersVariables`:
const listCpuCoolersVars: ListCpuCoolersVariables = {
  limit: ..., // optional
};

// Call the `listCpuCoolersRef()` function to get a reference to the query.
const ref = listCpuCoolersRef(listCpuCoolersVars);
// Variables can be defined inline as well.
const ref = listCpuCoolersRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCpuCoolersVariables` argument.
const ref = listCpuCoolersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCpuCoolersRef(dataConnect, listCpuCoolersVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cpuCoolers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cpuCoolers);
});
```

## ListCases
You can execute the `ListCases` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCases(vars?: ListCasesVariables): QueryPromise<ListCasesData, ListCasesVariables>;

interface ListCasesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListCasesVariables): QueryRef<ListCasesData, ListCasesVariables>;
}
export const listCasesRef: ListCasesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCases(dc: DataConnect, vars?: ListCasesVariables): QueryPromise<ListCasesData, ListCasesVariables>;

interface ListCasesRef {
  ...
  (dc: DataConnect, vars?: ListCasesVariables): QueryRef<ListCasesData, ListCasesVariables>;
}
export const listCasesRef: ListCasesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCasesRef:
```typescript
const name = listCasesRef.operationName;
console.log(name);
```

### Variables
The `ListCases` query has an optional argument of type `ListCasesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListCasesVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListCases` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCasesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListCases`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCases, ListCasesVariables } from '@dataconnect/generated';

// The `ListCases` query has an optional argument of type `ListCasesVariables`:
const listCasesVars: ListCasesVariables = {
  limit: ..., // optional
};

// Call the `listCases()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCases(listCasesVars);
// Variables can be defined inline as well.
const { data } = await listCases({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCasesVariables` argument.
const { data } = await listCases();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCases(dataConnect, listCasesVars);

console.log(data.cases);

// Or, you can use the `Promise` API.
listCases(listCasesVars).then((response) => {
  const data = response.data;
  console.log(data.cases);
});
```

### Using `ListCases`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCasesRef, ListCasesVariables } from '@dataconnect/generated';

// The `ListCases` query has an optional argument of type `ListCasesVariables`:
const listCasesVars: ListCasesVariables = {
  limit: ..., // optional
};

// Call the `listCasesRef()` function to get a reference to the query.
const ref = listCasesRef(listCasesVars);
// Variables can be defined inline as well.
const ref = listCasesRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListCasesVariables` argument.
const ref = listCasesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCasesRef(dataConnect, listCasesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cases);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cases);
});
```

## ListRAM
You can execute the `ListRAM` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listRam(vars?: ListRamVariables): QueryPromise<ListRamData, ListRamVariables>;

interface ListRamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListRamVariables): QueryRef<ListRamData, ListRamVariables>;
}
export const listRamRef: ListRamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listRam(dc: DataConnect, vars?: ListRamVariables): QueryPromise<ListRamData, ListRamVariables>;

interface ListRamRef {
  ...
  (dc: DataConnect, vars?: ListRamVariables): QueryRef<ListRamData, ListRamVariables>;
}
export const listRamRef: ListRamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRamRef:
```typescript
const name = listRamRef.operationName;
console.log(name);
```

### Variables
The `ListRAM` query has an optional argument of type `ListRamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListRamVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListRAM` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListRAM`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRam, ListRamVariables } from '@dataconnect/generated';

// The `ListRAM` query has an optional argument of type `ListRamVariables`:
const listRamVars: ListRamVariables = {
  limit: ..., // optional
};

// Call the `listRam()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRam(listRamVars);
// Variables can be defined inline as well.
const { data } = await listRam({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListRamVariables` argument.
const { data } = await listRam();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRam(dataConnect, listRamVars);

console.log(data.rams);

// Or, you can use the `Promise` API.
listRam(listRamVars).then((response) => {
  const data = response.data;
  console.log(data.rams);
});
```

### Using `ListRAM`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRamRef, ListRamVariables } from '@dataconnect/generated';

// The `ListRAM` query has an optional argument of type `ListRamVariables`:
const listRamVars: ListRamVariables = {
  limit: ..., // optional
};

// Call the `listRamRef()` function to get a reference to the query.
const ref = listRamRef(listRamVars);
// Variables can be defined inline as well.
const ref = listRamRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListRamVariables` argument.
const ref = listRamRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRamRef(dataConnect, listRamVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.rams);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.rams);
});
```

## ListMotherboards
You can execute the `ListMotherboards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMotherboards(vars?: ListMotherboardsVariables): QueryPromise<ListMotherboardsData, ListMotherboardsVariables>;

interface ListMotherboardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListMotherboardsVariables): QueryRef<ListMotherboardsData, ListMotherboardsVariables>;
}
export const listMotherboardsRef: ListMotherboardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMotherboards(dc: DataConnect, vars?: ListMotherboardsVariables): QueryPromise<ListMotherboardsData, ListMotherboardsVariables>;

interface ListMotherboardsRef {
  ...
  (dc: DataConnect, vars?: ListMotherboardsVariables): QueryRef<ListMotherboardsData, ListMotherboardsVariables>;
}
export const listMotherboardsRef: ListMotherboardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMotherboardsRef:
```typescript
const name = listMotherboardsRef.operationName;
console.log(name);
```

### Variables
The `ListMotherboards` query has an optional argument of type `ListMotherboardsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListMotherboardsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListMotherboards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMotherboardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListMotherboards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMotherboards, ListMotherboardsVariables } from '@dataconnect/generated';

// The `ListMotherboards` query has an optional argument of type `ListMotherboardsVariables`:
const listMotherboardsVars: ListMotherboardsVariables = {
  limit: ..., // optional
};

// Call the `listMotherboards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMotherboards(listMotherboardsVars);
// Variables can be defined inline as well.
const { data } = await listMotherboards({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListMotherboardsVariables` argument.
const { data } = await listMotherboards();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMotherboards(dataConnect, listMotherboardsVars);

console.log(data.motherboards);

// Or, you can use the `Promise` API.
listMotherboards(listMotherboardsVars).then((response) => {
  const data = response.data;
  console.log(data.motherboards);
});
```

### Using `ListMotherboards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMotherboardsRef, ListMotherboardsVariables } from '@dataconnect/generated';

// The `ListMotherboards` query has an optional argument of type `ListMotherboardsVariables`:
const listMotherboardsVars: ListMotherboardsVariables = {
  limit: ..., // optional
};

// Call the `listMotherboardsRef()` function to get a reference to the query.
const ref = listMotherboardsRef(listMotherboardsVars);
// Variables can be defined inline as well.
const ref = listMotherboardsRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListMotherboardsVariables` argument.
const ref = listMotherboardsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMotherboardsRef(dataConnect, listMotherboardsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.motherboards);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.motherboards);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `inventory-connector` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateProduct
You can execute the `CreateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProductRef:
```typescript
const name = createProductRef.operationName;
console.log(name);
```

### Variables
The `CreateProduct` mutation requires an argument of type `CreateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProductData {
  product_insert: Product_Key;
}
```
### Using `CreateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProduct, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  sku: ..., 
  description: ..., 
  color: ..., // optional
  msrp: ..., 
  price: ..., // optional
  quantity: ..., 
  manufacturerId: ..., 
  categoryId: ..., 
};

// Call the `createProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProduct(createProductVars);
// Variables can be defined inline as well.
const { data } = await createProduct({ name: ..., sku: ..., description: ..., color: ..., msrp: ..., price: ..., quantity: ..., manufacturerId: ..., categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProduct(dataConnect, createProductVars);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
createProduct(createProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

### Using `CreateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProductRef, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  sku: ..., 
  description: ..., 
  color: ..., // optional
  msrp: ..., 
  price: ..., // optional
  quantity: ..., 
  manufacturerId: ..., 
  categoryId: ..., 
};

// Call the `createProductRef()` function to get a reference to the mutation.
const ref = createProductRef(createProductVars);
// Variables can be defined inline as well.
const ref = createProductRef({ name: ..., sku: ..., description: ..., color: ..., msrp: ..., price: ..., quantity: ..., manufacturerId: ..., categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProductRef(dataConnect, createProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

## UpdateProduct
You can execute the `UpdateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProduct(vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface UpdateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
}
export const updateProductRef: UpdateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProduct(dc: DataConnect, vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface UpdateProductRef {
  ...
  (dc: DataConnect, vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
}
export const updateProductRef: UpdateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProductRef:
```typescript
const name = updateProductRef.operationName;
console.log(name);
```

### Variables
The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProductVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
  color?: string | null;
  price?: number | null;
  quantity?: number | null;
  categoryId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `UpdateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProductData {
  product_update?: Product_Key | null;
}
```
### Using `UpdateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProduct, UpdateProductVariables } from '@dataconnect/generated';

// The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`:
const updateProductVars: UpdateProductVariables = {
  id: ..., 
  name: ..., // optional
  description: ..., // optional
  color: ..., // optional
  price: ..., // optional
  quantity: ..., // optional
  categoryId: ..., // optional
};

// Call the `updateProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProduct(updateProductVars);
// Variables can be defined inline as well.
const { data } = await updateProduct({ id: ..., name: ..., description: ..., color: ..., price: ..., quantity: ..., categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProduct(dataConnect, updateProductVars);

console.log(data.product_update);

// Or, you can use the `Promise` API.
updateProduct(updateProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

### Using `UpdateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProductRef, UpdateProductVariables } from '@dataconnect/generated';

// The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`:
const updateProductVars: UpdateProductVariables = {
  id: ..., 
  name: ..., // optional
  description: ..., // optional
  color: ..., // optional
  price: ..., // optional
  quantity: ..., // optional
  categoryId: ..., // optional
};

// Call the `updateProductRef()` function to get a reference to the mutation.
const ref = updateProductRef(updateProductVars);
// Variables can be defined inline as well.
const ref = updateProductRef({ id: ..., name: ..., description: ..., color: ..., price: ..., quantity: ..., categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProductRef(dataConnect, updateProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

## DeleteProduct
You can execute the `DeleteProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteProduct(vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface DeleteProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
}
export const deleteProductRef: DeleteProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteProduct(dc: DataConnect, vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface DeleteProductRef {
  ...
  (dc: DataConnect, vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
}
export const deleteProductRef: DeleteProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteProductRef:
```typescript
const name = deleteProductRef.operationName;
console.log(name);
```

### Variables
The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteProductVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteProductData {
  product_delete?: Product_Key | null;
}
```
### Using `DeleteProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteProduct, DeleteProductVariables } from '@dataconnect/generated';

// The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`:
const deleteProductVars: DeleteProductVariables = {
  id: ..., 
};

// Call the `deleteProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteProduct(deleteProductVars);
// Variables can be defined inline as well.
const { data } = await deleteProduct({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteProduct(dataConnect, deleteProductVars);

console.log(data.product_delete);

// Or, you can use the `Promise` API.
deleteProduct(deleteProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_delete);
});
```

### Using `DeleteProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteProductRef, DeleteProductVariables } from '@dataconnect/generated';

// The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`:
const deleteProductVars: DeleteProductVariables = {
  id: ..., 
};

// Call the `deleteProductRef()` function to get a reference to the mutation.
const ref = deleteProductRef(deleteProductVars);
// Variables can be defined inline as well.
const ref = deleteProductRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteProductRef(dataConnect, deleteProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_delete);
});
```

## CreateCPUSpecs
You can execute the `CreateCPUSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCpuSpecs(vars: CreateCpuSpecsVariables): MutationPromise<CreateCpuSpecsData, CreateCpuSpecsVariables>;

interface CreateCpuSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCpuSpecsVariables): MutationRef<CreateCpuSpecsData, CreateCpuSpecsVariables>;
}
export const createCpuSpecsRef: CreateCpuSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCpuSpecs(dc: DataConnect, vars: CreateCpuSpecsVariables): MutationPromise<CreateCpuSpecsData, CreateCpuSpecsVariables>;

interface CreateCpuSpecsRef {
  ...
  (dc: DataConnect, vars: CreateCpuSpecsVariables): MutationRef<CreateCpuSpecsData, CreateCpuSpecsVariables>;
}
export const createCpuSpecsRef: CreateCpuSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCpuSpecsRef:
```typescript
const name = createCpuSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateCPUSpecs` mutation requires an argument of type `CreateCpuSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateCPUSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCpuSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCpuSpecsData {
  cpu_insert: Cpu_Key;
}
```
### Using `CreateCPUSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCpuSpecs, CreateCpuSpecsVariables } from '@dataconnect/generated';

// The `CreateCPUSpecs` mutation requires an argument of type `CreateCpuSpecsVariables`:
const createCpuSpecsVars: CreateCpuSpecsVariables = {
  productId: ..., 
  cores: ..., 
  threads: ..., 
  baseClockGHz: ..., 
  boostClockGHz: ..., // optional
  tdp: ..., 
  socketType: ..., 
  integratedGraphics: ..., 
  cacheMB: ..., // optional
};

// Call the `createCpuSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCpuSpecs(createCpuSpecsVars);
// Variables can be defined inline as well.
const { data } = await createCpuSpecs({ productId: ..., cores: ..., threads: ..., baseClockGHz: ..., boostClockGHz: ..., tdp: ..., socketType: ..., integratedGraphics: ..., cacheMB: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCpuSpecs(dataConnect, createCpuSpecsVars);

console.log(data.cpu_insert);

// Or, you can use the `Promise` API.
createCpuSpecs(createCpuSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.cpu_insert);
});
```

### Using `CreateCPUSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCpuSpecsRef, CreateCpuSpecsVariables } from '@dataconnect/generated';

// The `CreateCPUSpecs` mutation requires an argument of type `CreateCpuSpecsVariables`:
const createCpuSpecsVars: CreateCpuSpecsVariables = {
  productId: ..., 
  cores: ..., 
  threads: ..., 
  baseClockGHz: ..., 
  boostClockGHz: ..., // optional
  tdp: ..., 
  socketType: ..., 
  integratedGraphics: ..., 
  cacheMB: ..., // optional
};

// Call the `createCpuSpecsRef()` function to get a reference to the mutation.
const ref = createCpuSpecsRef(createCpuSpecsVars);
// Variables can be defined inline as well.
const ref = createCpuSpecsRef({ productId: ..., cores: ..., threads: ..., baseClockGHz: ..., boostClockGHz: ..., tdp: ..., socketType: ..., integratedGraphics: ..., cacheMB: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCpuSpecsRef(dataConnect, createCpuSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.cpu_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.cpu_insert);
});
```

## CreateGPUSpecs
You can execute the `CreateGPUSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createGpuSpecs(vars: CreateGpuSpecsVariables): MutationPromise<CreateGpuSpecsData, CreateGpuSpecsVariables>;

interface CreateGpuSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateGpuSpecsVariables): MutationRef<CreateGpuSpecsData, CreateGpuSpecsVariables>;
}
export const createGpuSpecsRef: CreateGpuSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createGpuSpecs(dc: DataConnect, vars: CreateGpuSpecsVariables): MutationPromise<CreateGpuSpecsData, CreateGpuSpecsVariables>;

interface CreateGpuSpecsRef {
  ...
  (dc: DataConnect, vars: CreateGpuSpecsVariables): MutationRef<CreateGpuSpecsData, CreateGpuSpecsVariables>;
}
export const createGpuSpecsRef: CreateGpuSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createGpuSpecsRef:
```typescript
const name = createGpuSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateGPUSpecs` mutation requires an argument of type `CreateGpuSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateGPUSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateGpuSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateGpuSpecsData {
  gpu_insert: Gpu_Key;
}
```
### Using `CreateGPUSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createGpuSpecs, CreateGpuSpecsVariables } from '@dataconnect/generated';

// The `CreateGPUSpecs` mutation requires an argument of type `CreateGpuSpecsVariables`:
const createGpuSpecsVars: CreateGpuSpecsVariables = {
  productId: ..., 
  chipset: ..., 
  vramGB: ..., 
  vramType: ..., 
  coreCount: ..., // optional
  baseClockMHz: ..., // optional
  boostClockMHz: ..., // optional
  tdp: ..., 
  lengthMM: ..., // optional
  powerConnectors: ..., // optional
};

// Call the `createGpuSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createGpuSpecs(createGpuSpecsVars);
// Variables can be defined inline as well.
const { data } = await createGpuSpecs({ productId: ..., chipset: ..., vramGB: ..., vramType: ..., coreCount: ..., baseClockMHz: ..., boostClockMHz: ..., tdp: ..., lengthMM: ..., powerConnectors: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createGpuSpecs(dataConnect, createGpuSpecsVars);

console.log(data.gpu_insert);

// Or, you can use the `Promise` API.
createGpuSpecs(createGpuSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.gpu_insert);
});
```

### Using `CreateGPUSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createGpuSpecsRef, CreateGpuSpecsVariables } from '@dataconnect/generated';

// The `CreateGPUSpecs` mutation requires an argument of type `CreateGpuSpecsVariables`:
const createGpuSpecsVars: CreateGpuSpecsVariables = {
  productId: ..., 
  chipset: ..., 
  vramGB: ..., 
  vramType: ..., 
  coreCount: ..., // optional
  baseClockMHz: ..., // optional
  boostClockMHz: ..., // optional
  tdp: ..., 
  lengthMM: ..., // optional
  powerConnectors: ..., // optional
};

// Call the `createGpuSpecsRef()` function to get a reference to the mutation.
const ref = createGpuSpecsRef(createGpuSpecsVars);
// Variables can be defined inline as well.
const ref = createGpuSpecsRef({ productId: ..., chipset: ..., vramGB: ..., vramType: ..., coreCount: ..., baseClockMHz: ..., boostClockMHz: ..., tdp: ..., lengthMM: ..., powerConnectors: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createGpuSpecsRef(dataConnect, createGpuSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.gpu_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.gpu_insert);
});
```

## CreateCategory
You can execute the `CreateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
}
export const createCategoryRef: CreateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateCategoryRef {
  ...
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
}
export const createCategoryRef: CreateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCategoryRef:
```typescript
const name = createCategoryRef.operationName;
console.log(name);
```

### Variables
The `CreateCategory` mutation requires an argument of type `CreateCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateCategoryVariables {
  name: string;
  description: string;
  isParent: boolean;
  parentId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `CreateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCategoryData {
  category_insert: Category_Key;
}
```
### Using `CreateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCategory, CreateCategoryVariables } from '@dataconnect/generated';

// The `CreateCategory` mutation requires an argument of type `CreateCategoryVariables`:
const createCategoryVars: CreateCategoryVariables = {
  name: ..., 
  description: ..., 
  isParent: ..., 
  parentId: ..., // optional
};

// Call the `createCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCategory(createCategoryVars);
// Variables can be defined inline as well.
const { data } = await createCategory({ name: ..., description: ..., isParent: ..., parentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCategory(dataConnect, createCategoryVars);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
createCategory(createCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

### Using `CreateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCategoryRef, CreateCategoryVariables } from '@dataconnect/generated';

// The `CreateCategory` mutation requires an argument of type `CreateCategoryVariables`:
const createCategoryVars: CreateCategoryVariables = {
  name: ..., 
  description: ..., 
  isParent: ..., 
  parentId: ..., // optional
};

// Call the `createCategoryRef()` function to get a reference to the mutation.
const ref = createCategoryRef(createCategoryVars);
// Variables can be defined inline as well.
const ref = createCategoryRef({ name: ..., description: ..., isParent: ..., parentId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCategoryRef(dataConnect, createCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

## CreateStorageSpecs
You can execute the `CreateStorageSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createStorageSpecs(vars: CreateStorageSpecsVariables): MutationPromise<CreateStorageSpecsData, CreateStorageSpecsVariables>;

interface CreateStorageSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStorageSpecsVariables): MutationRef<CreateStorageSpecsData, CreateStorageSpecsVariables>;
}
export const createStorageSpecsRef: CreateStorageSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createStorageSpecs(dc: DataConnect, vars: CreateStorageSpecsVariables): MutationPromise<CreateStorageSpecsData, CreateStorageSpecsVariables>;

interface CreateStorageSpecsRef {
  ...
  (dc: DataConnect, vars: CreateStorageSpecsVariables): MutationRef<CreateStorageSpecsData, CreateStorageSpecsVariables>;
}
export const createStorageSpecsRef: CreateStorageSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createStorageSpecsRef:
```typescript
const name = createStorageSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateStorageSpecs` mutation requires an argument of type `CreateStorageSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateStorageSpecsVariables {
  productId: UUIDString;
  storageType: string;
  capacityGB: number;
  interface: string;
  formFactor: string;
  readSpeedMBps?: number | null;
  writeSpeedMBps?: number | null;
}
```
### Return Type
Recall that executing the `CreateStorageSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateStorageSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateStorageSpecsData {
  storage_insert: Storage_Key;
}
```
### Using `CreateStorageSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createStorageSpecs, CreateStorageSpecsVariables } from '@dataconnect/generated';

// The `CreateStorageSpecs` mutation requires an argument of type `CreateStorageSpecsVariables`:
const createStorageSpecsVars: CreateStorageSpecsVariables = {
  productId: ..., 
  storageType: ..., 
  capacityGB: ..., 
  interface: ..., 
  formFactor: ..., 
  readSpeedMBps: ..., // optional
  writeSpeedMBps: ..., // optional
};

// Call the `createStorageSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createStorageSpecs(createStorageSpecsVars);
// Variables can be defined inline as well.
const { data } = await createStorageSpecs({ productId: ..., storageType: ..., capacityGB: ..., interface: ..., formFactor: ..., readSpeedMBps: ..., writeSpeedMBps: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createStorageSpecs(dataConnect, createStorageSpecsVars);

console.log(data.storage_insert);

// Or, you can use the `Promise` API.
createStorageSpecs(createStorageSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.storage_insert);
});
```

### Using `CreateStorageSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createStorageSpecsRef, CreateStorageSpecsVariables } from '@dataconnect/generated';

// The `CreateStorageSpecs` mutation requires an argument of type `CreateStorageSpecsVariables`:
const createStorageSpecsVars: CreateStorageSpecsVariables = {
  productId: ..., 
  storageType: ..., 
  capacityGB: ..., 
  interface: ..., 
  formFactor: ..., 
  readSpeedMBps: ..., // optional
  writeSpeedMBps: ..., // optional
};

// Call the `createStorageSpecsRef()` function to get a reference to the mutation.
const ref = createStorageSpecsRef(createStorageSpecsVars);
// Variables can be defined inline as well.
const ref = createStorageSpecsRef({ productId: ..., storageType: ..., capacityGB: ..., interface: ..., formFactor: ..., readSpeedMBps: ..., writeSpeedMBps: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createStorageSpecsRef(dataConnect, createStorageSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.storage_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.storage_insert);
});
```

## CreatePSUSpecs
You can execute the `CreatePSUSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPsuSpecs(vars: CreatePsuSpecsVariables): MutationPromise<CreatePsuSpecsData, CreatePsuSpecsVariables>;

interface CreatePsuSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePsuSpecsVariables): MutationRef<CreatePsuSpecsData, CreatePsuSpecsVariables>;
}
export const createPsuSpecsRef: CreatePsuSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPsuSpecs(dc: DataConnect, vars: CreatePsuSpecsVariables): MutationPromise<CreatePsuSpecsData, CreatePsuSpecsVariables>;

interface CreatePsuSpecsRef {
  ...
  (dc: DataConnect, vars: CreatePsuSpecsVariables): MutationRef<CreatePsuSpecsData, CreatePsuSpecsVariables>;
}
export const createPsuSpecsRef: CreatePsuSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPsuSpecsRef:
```typescript
const name = createPsuSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreatePSUSpecs` mutation requires an argument of type `CreatePsuSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePsuSpecsVariables {
  productId: UUIDString;
  wattage: number;
  efficiencyRating: string;
  modular: string;
  formFactor: string;
}
```
### Return Type
Recall that executing the `CreatePSUSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePsuSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePsuSpecsData {
  psu_insert: Psu_Key;
}
```
### Using `CreatePSUSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPsuSpecs, CreatePsuSpecsVariables } from '@dataconnect/generated';

// The `CreatePSUSpecs` mutation requires an argument of type `CreatePsuSpecsVariables`:
const createPsuSpecsVars: CreatePsuSpecsVariables = {
  productId: ..., 
  wattage: ..., 
  efficiencyRating: ..., 
  modular: ..., 
  formFactor: ..., 
};

// Call the `createPsuSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPsuSpecs(createPsuSpecsVars);
// Variables can be defined inline as well.
const { data } = await createPsuSpecs({ productId: ..., wattage: ..., efficiencyRating: ..., modular: ..., formFactor: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPsuSpecs(dataConnect, createPsuSpecsVars);

console.log(data.psu_insert);

// Or, you can use the `Promise` API.
createPsuSpecs(createPsuSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.psu_insert);
});
```

### Using `CreatePSUSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPsuSpecsRef, CreatePsuSpecsVariables } from '@dataconnect/generated';

// The `CreatePSUSpecs` mutation requires an argument of type `CreatePsuSpecsVariables`:
const createPsuSpecsVars: CreatePsuSpecsVariables = {
  productId: ..., 
  wattage: ..., 
  efficiencyRating: ..., 
  modular: ..., 
  formFactor: ..., 
};

// Call the `createPsuSpecsRef()` function to get a reference to the mutation.
const ref = createPsuSpecsRef(createPsuSpecsVars);
// Variables can be defined inline as well.
const ref = createPsuSpecsRef({ productId: ..., wattage: ..., efficiencyRating: ..., modular: ..., formFactor: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPsuSpecsRef(dataConnect, createPsuSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.psu_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.psu_insert);
});
```

## CreateCPUCoolerSpecs
You can execute the `CreateCPUCoolerSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCpuCoolerSpecs(vars: CreateCpuCoolerSpecsVariables): MutationPromise<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;

interface CreateCpuCoolerSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCpuCoolerSpecsVariables): MutationRef<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
}
export const createCpuCoolerSpecsRef: CreateCpuCoolerSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCpuCoolerSpecs(dc: DataConnect, vars: CreateCpuCoolerSpecsVariables): MutationPromise<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;

interface CreateCpuCoolerSpecsRef {
  ...
  (dc: DataConnect, vars: CreateCpuCoolerSpecsVariables): MutationRef<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
}
export const createCpuCoolerSpecsRef: CreateCpuCoolerSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCpuCoolerSpecsRef:
```typescript
const name = createCpuCoolerSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateCPUCoolerSpecs` mutation requires an argument of type `CreateCpuCoolerSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateCpuCoolerSpecsVariables {
  productId: UUIDString;
  coolerType: string;
  radiatorSizeMM?: number | null;
  fanSizeMM?: number | null;
  maxTDP: number;
  socketCompatibility: string;
  heightMM: number;
}
```
### Return Type
Recall that executing the `CreateCPUCoolerSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCpuCoolerSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCpuCoolerSpecsData {
  cpuCooler_insert: CpuCooler_Key;
}
```
### Using `CreateCPUCoolerSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCpuCoolerSpecs, CreateCpuCoolerSpecsVariables } from '@dataconnect/generated';

// The `CreateCPUCoolerSpecs` mutation requires an argument of type `CreateCpuCoolerSpecsVariables`:
const createCpuCoolerSpecsVars: CreateCpuCoolerSpecsVariables = {
  productId: ..., 
  coolerType: ..., 
  radiatorSizeMM: ..., // optional
  fanSizeMM: ..., // optional
  maxTDP: ..., 
  socketCompatibility: ..., 
  heightMM: ..., 
};

// Call the `createCpuCoolerSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCpuCoolerSpecs(createCpuCoolerSpecsVars);
// Variables can be defined inline as well.
const { data } = await createCpuCoolerSpecs({ productId: ..., coolerType: ..., radiatorSizeMM: ..., fanSizeMM: ..., maxTDP: ..., socketCompatibility: ..., heightMM: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCpuCoolerSpecs(dataConnect, createCpuCoolerSpecsVars);

console.log(data.cpuCooler_insert);

// Or, you can use the `Promise` API.
createCpuCoolerSpecs(createCpuCoolerSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.cpuCooler_insert);
});
```

### Using `CreateCPUCoolerSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCpuCoolerSpecsRef, CreateCpuCoolerSpecsVariables } from '@dataconnect/generated';

// The `CreateCPUCoolerSpecs` mutation requires an argument of type `CreateCpuCoolerSpecsVariables`:
const createCpuCoolerSpecsVars: CreateCpuCoolerSpecsVariables = {
  productId: ..., 
  coolerType: ..., 
  radiatorSizeMM: ..., // optional
  fanSizeMM: ..., // optional
  maxTDP: ..., 
  socketCompatibility: ..., 
  heightMM: ..., 
};

// Call the `createCpuCoolerSpecsRef()` function to get a reference to the mutation.
const ref = createCpuCoolerSpecsRef(createCpuCoolerSpecsVars);
// Variables can be defined inline as well.
const ref = createCpuCoolerSpecsRef({ productId: ..., coolerType: ..., radiatorSizeMM: ..., fanSizeMM: ..., maxTDP: ..., socketCompatibility: ..., heightMM: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCpuCoolerSpecsRef(dataConnect, createCpuCoolerSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.cpuCooler_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.cpuCooler_insert);
});
```

## CreateCaseSpecs
You can execute the `CreateCaseSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCaseSpecs(vars: CreateCaseSpecsVariables): MutationPromise<CreateCaseSpecsData, CreateCaseSpecsVariables>;

interface CreateCaseSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCaseSpecsVariables): MutationRef<CreateCaseSpecsData, CreateCaseSpecsVariables>;
}
export const createCaseSpecsRef: CreateCaseSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCaseSpecs(dc: DataConnect, vars: CreateCaseSpecsVariables): MutationPromise<CreateCaseSpecsData, CreateCaseSpecsVariables>;

interface CreateCaseSpecsRef {
  ...
  (dc: DataConnect, vars: CreateCaseSpecsVariables): MutationRef<CreateCaseSpecsData, CreateCaseSpecsVariables>;
}
export const createCaseSpecsRef: CreateCaseSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCaseSpecsRef:
```typescript
const name = createCaseSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateCaseSpecs` mutation requires an argument of type `CreateCaseSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateCaseSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCaseSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCaseSpecsData {
  case_insert: Case_Key;
}
```
### Using `CreateCaseSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCaseSpecs, CreateCaseSpecsVariables } from '@dataconnect/generated';

// The `CreateCaseSpecs` mutation requires an argument of type `CreateCaseSpecsVariables`:
const createCaseSpecsVars: CreateCaseSpecsVariables = {
  productId: ..., 
  formFactor: ..., 
  moboSupport: ..., 
  maxGPULengthMM: ..., // optional
  maxCPUCoolerHeightMM: ..., // optional
  maxPSULengthMM: ..., // optional
  driveSlotsTwoHalf: ..., // optional
  driveSlotsThreeHalf: ..., // optional
  fanSlots: ..., // optional
  radiatorSupport: ..., // optional
};

// Call the `createCaseSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCaseSpecs(createCaseSpecsVars);
// Variables can be defined inline as well.
const { data } = await createCaseSpecs({ productId: ..., formFactor: ..., moboSupport: ..., maxGPULengthMM: ..., maxCPUCoolerHeightMM: ..., maxPSULengthMM: ..., driveSlotsTwoHalf: ..., driveSlotsThreeHalf: ..., fanSlots: ..., radiatorSupport: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCaseSpecs(dataConnect, createCaseSpecsVars);

console.log(data.case_insert);

// Or, you can use the `Promise` API.
createCaseSpecs(createCaseSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.case_insert);
});
```

### Using `CreateCaseSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCaseSpecsRef, CreateCaseSpecsVariables } from '@dataconnect/generated';

// The `CreateCaseSpecs` mutation requires an argument of type `CreateCaseSpecsVariables`:
const createCaseSpecsVars: CreateCaseSpecsVariables = {
  productId: ..., 
  formFactor: ..., 
  moboSupport: ..., 
  maxGPULengthMM: ..., // optional
  maxCPUCoolerHeightMM: ..., // optional
  maxPSULengthMM: ..., // optional
  driveSlotsTwoHalf: ..., // optional
  driveSlotsThreeHalf: ..., // optional
  fanSlots: ..., // optional
  radiatorSupport: ..., // optional
};

// Call the `createCaseSpecsRef()` function to get a reference to the mutation.
const ref = createCaseSpecsRef(createCaseSpecsVars);
// Variables can be defined inline as well.
const ref = createCaseSpecsRef({ productId: ..., formFactor: ..., moboSupport: ..., maxGPULengthMM: ..., maxCPUCoolerHeightMM: ..., maxPSULengthMM: ..., driveSlotsTwoHalf: ..., driveSlotsThreeHalf: ..., fanSlots: ..., radiatorSupport: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCaseSpecsRef(dataConnect, createCaseSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.case_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.case_insert);
});
```

## CreateRAMSpecs
You can execute the `CreateRAMSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createRamSpecs(vars: CreateRamSpecsVariables): MutationPromise<CreateRamSpecsData, CreateRamSpecsVariables>;

interface CreateRamSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRamSpecsVariables): MutationRef<CreateRamSpecsData, CreateRamSpecsVariables>;
}
export const createRamSpecsRef: CreateRamSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createRamSpecs(dc: DataConnect, vars: CreateRamSpecsVariables): MutationPromise<CreateRamSpecsData, CreateRamSpecsVariables>;

interface CreateRamSpecsRef {
  ...
  (dc: DataConnect, vars: CreateRamSpecsVariables): MutationRef<CreateRamSpecsData, CreateRamSpecsVariables>;
}
export const createRamSpecsRef: CreateRamSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createRamSpecsRef:
```typescript
const name = createRamSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateRAMSpecs` mutation requires an argument of type `CreateRamSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateRamSpecsVariables {
  productId: UUIDString;
  memoryType: string;
  speedMHz: number;
  capacityGB: number;
  modules: number;
  casLatency?: number | null;
  voltage?: number | null;
}
```
### Return Type
Recall that executing the `CreateRAMSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateRamSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateRamSpecsData {
  ram_insert: Ram_Key;
}
```
### Using `CreateRAMSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createRamSpecs, CreateRamSpecsVariables } from '@dataconnect/generated';

// The `CreateRAMSpecs` mutation requires an argument of type `CreateRamSpecsVariables`:
const createRamSpecsVars: CreateRamSpecsVariables = {
  productId: ..., 
  memoryType: ..., 
  speedMHz: ..., 
  capacityGB: ..., 
  modules: ..., 
  casLatency: ..., // optional
  voltage: ..., // optional
};

// Call the `createRamSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createRamSpecs(createRamSpecsVars);
// Variables can be defined inline as well.
const { data } = await createRamSpecs({ productId: ..., memoryType: ..., speedMHz: ..., capacityGB: ..., modules: ..., casLatency: ..., voltage: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createRamSpecs(dataConnect, createRamSpecsVars);

console.log(data.ram_insert);

// Or, you can use the `Promise` API.
createRamSpecs(createRamSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.ram_insert);
});
```

### Using `CreateRAMSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createRamSpecsRef, CreateRamSpecsVariables } from '@dataconnect/generated';

// The `CreateRAMSpecs` mutation requires an argument of type `CreateRamSpecsVariables`:
const createRamSpecsVars: CreateRamSpecsVariables = {
  productId: ..., 
  memoryType: ..., 
  speedMHz: ..., 
  capacityGB: ..., 
  modules: ..., 
  casLatency: ..., // optional
  voltage: ..., // optional
};

// Call the `createRamSpecsRef()` function to get a reference to the mutation.
const ref = createRamSpecsRef(createRamSpecsVars);
// Variables can be defined inline as well.
const ref = createRamSpecsRef({ productId: ..., memoryType: ..., speedMHz: ..., capacityGB: ..., modules: ..., casLatency: ..., voltage: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createRamSpecsRef(dataConnect, createRamSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.ram_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.ram_insert);
});
```

## CreateMotherboardSpecs
You can execute the `CreateMotherboardSpecs` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMotherboardSpecs(vars: CreateMotherboardSpecsVariables): MutationPromise<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;

interface CreateMotherboardSpecsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMotherboardSpecsVariables): MutationRef<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
}
export const createMotherboardSpecsRef: CreateMotherboardSpecsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMotherboardSpecs(dc: DataConnect, vars: CreateMotherboardSpecsVariables): MutationPromise<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;

interface CreateMotherboardSpecsRef {
  ...
  (dc: DataConnect, vars: CreateMotherboardSpecsVariables): MutationRef<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
}
export const createMotherboardSpecsRef: CreateMotherboardSpecsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMotherboardSpecsRef:
```typescript
const name = createMotherboardSpecsRef.operationName;
console.log(name);
```

### Variables
The `CreateMotherboardSpecs` mutation requires an argument of type `CreateMotherboardSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateMotherboardSpecs` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMotherboardSpecsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMotherboardSpecsData {
  motherboard_insert: Motherboard_Key;
}
```
### Using `CreateMotherboardSpecs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMotherboardSpecs, CreateMotherboardSpecsVariables } from '@dataconnect/generated';

// The `CreateMotherboardSpecs` mutation requires an argument of type `CreateMotherboardSpecsVariables`:
const createMotherboardSpecsVars: CreateMotherboardSpecsVariables = {
  productId: ..., 
  socketType: ..., 
  chipset: ..., 
  formFactor: ..., 
  memoryType: ..., 
  memorySlots: ..., 
  maxMemoryGB: ..., 
  m2Slots: ..., // optional
  sataSlots: ..., // optional
  pciSlots: ..., // optional
};

// Call the `createMotherboardSpecs()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMotherboardSpecs(createMotherboardSpecsVars);
// Variables can be defined inline as well.
const { data } = await createMotherboardSpecs({ productId: ..., socketType: ..., chipset: ..., formFactor: ..., memoryType: ..., memorySlots: ..., maxMemoryGB: ..., m2Slots: ..., sataSlots: ..., pciSlots: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMotherboardSpecs(dataConnect, createMotherboardSpecsVars);

console.log(data.motherboard_insert);

// Or, you can use the `Promise` API.
createMotherboardSpecs(createMotherboardSpecsVars).then((response) => {
  const data = response.data;
  console.log(data.motherboard_insert);
});
```

### Using `CreateMotherboardSpecs`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMotherboardSpecsRef, CreateMotherboardSpecsVariables } from '@dataconnect/generated';

// The `CreateMotherboardSpecs` mutation requires an argument of type `CreateMotherboardSpecsVariables`:
const createMotherboardSpecsVars: CreateMotherboardSpecsVariables = {
  productId: ..., 
  socketType: ..., 
  chipset: ..., 
  formFactor: ..., 
  memoryType: ..., 
  memorySlots: ..., 
  maxMemoryGB: ..., 
  m2Slots: ..., // optional
  sataSlots: ..., // optional
  pciSlots: ..., // optional
};

// Call the `createMotherboardSpecsRef()` function to get a reference to the mutation.
const ref = createMotherboardSpecsRef(createMotherboardSpecsVars);
// Variables can be defined inline as well.
const ref = createMotherboardSpecsRef({ productId: ..., socketType: ..., chipset: ..., formFactor: ..., memoryType: ..., memorySlots: ..., maxMemoryGB: ..., m2Slots: ..., sataSlots: ..., pciSlots: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMotherboardSpecsRef(dataConnect, createMotherboardSpecsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.motherboard_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.motherboard_insert);
});
```

