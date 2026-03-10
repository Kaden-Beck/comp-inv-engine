# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `inventory-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
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

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `inventory-connector`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `inventory-connector`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `inventory-connector` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## ListProducts
You can execute the `ListProducts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListProducts(dc: DataConnect, vars?: ListProductsVariables, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, ListProductsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListProducts(vars?: ListProductsVariables, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, ListProductsVariables>;
```

### Variables
The `ListProducts` Query has an optional argument of type `ListProductsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListProductsVariables {
  orderByName?: OrderDirection | null;
  orderByQuantity?: OrderDirection | null;
  orderByPrice?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListProducts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListProducts` Query is of type `ListProductsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListProducts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListProductsVariables } from '@dataconnect/generated';
import { useListProducts } from '@dataconnect/generated/react'

export default function ListProductsComponent() {
  // The `useListProducts` Query hook has an optional argument of type `ListProductsVariables`:
  const listProductsVars: ListProductsVariables = {
    orderByName: ..., // optional
    orderByQuantity: ..., // optional
    orderByPrice: ..., // optional
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListProducts(listProductsVars);
  // Variables can be defined inline as well.
  const query = useListProducts({ orderByName: ..., orderByQuantity: ..., orderByPrice: ..., limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListProductsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListProducts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListProducts(dataConnect, listProductsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListProducts(listProductsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListProducts(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListProducts(dataConnect, listProductsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.products);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetProductById
You can execute the `GetProductById` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetProductById(dc: DataConnect, vars: GetProductByIdVariables, options?: useDataConnectQueryOptions<GetProductByIdData>): UseDataConnectQueryResult<GetProductByIdData, GetProductByIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetProductById(vars: GetProductByIdVariables, options?: useDataConnectQueryOptions<GetProductByIdData>): UseDataConnectQueryResult<GetProductByIdData, GetProductByIdVariables>;
```

### Variables
The `GetProductById` Query requires an argument of type `GetProductByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetProductByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetProductById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetProductById` Query is of type `GetProductByIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetProductById`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetProductByIdVariables } from '@dataconnect/generated';
import { useGetProductById } from '@dataconnect/generated/react'

export default function GetProductByIdComponent() {
  // The `useGetProductById` Query hook requires an argument of type `GetProductByIdVariables`:
  const getProductByIdVars: GetProductByIdVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetProductById(getProductByIdVars);
  // Variables can be defined inline as well.
  const query = useGetProductById({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetProductById(dataConnect, getProductByIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductById(getProductByIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductById(dataConnect, getProductByIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.product);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetProductBySku
You can execute the `GetProductBySku` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetProductBySku(dc: DataConnect, vars: GetProductBySkuVariables, options?: useDataConnectQueryOptions<GetProductBySkuData>): UseDataConnectQueryResult<GetProductBySkuData, GetProductBySkuVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetProductBySku(vars: GetProductBySkuVariables, options?: useDataConnectQueryOptions<GetProductBySkuData>): UseDataConnectQueryResult<GetProductBySkuData, GetProductBySkuVariables>;
```

### Variables
The `GetProductBySku` Query requires an argument of type `GetProductBySkuVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetProductBySkuVariables {
  sku: string;
}
```
### Return Type
Recall that calling the `GetProductBySku` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetProductBySku` Query is of type `GetProductBySkuData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetProductBySku`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetProductBySkuVariables } from '@dataconnect/generated';
import { useGetProductBySku } from '@dataconnect/generated/react'

export default function GetProductBySkuComponent() {
  // The `useGetProductBySku` Query hook requires an argument of type `GetProductBySkuVariables`:
  const getProductBySkuVars: GetProductBySkuVariables = {
    sku: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetProductBySku(getProductBySkuVars);
  // Variables can be defined inline as well.
  const query = useGetProductBySku({ sku: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetProductBySku(dataConnect, getProductBySkuVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductBySku(getProductBySkuVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductBySku(dataConnect, getProductBySkuVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.products);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SearchProductsByName
You can execute the `SearchProductsByName` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useSearchProductsByName(dc: DataConnect, vars?: SearchProductsByNameVariables, options?: useDataConnectQueryOptions<SearchProductsByNameData>): UseDataConnectQueryResult<SearchProductsByNameData, SearchProductsByNameVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useSearchProductsByName(vars?: SearchProductsByNameVariables, options?: useDataConnectQueryOptions<SearchProductsByNameData>): UseDataConnectQueryResult<SearchProductsByNameData, SearchProductsByNameVariables>;
```

### Variables
The `SearchProductsByName` Query has an optional argument of type `SearchProductsByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SearchProductsByNameVariables {
  nameQuery?: string | null;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `SearchProductsByName` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `SearchProductsByName` Query is of type `SearchProductsByNameData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `SearchProductsByName`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, SearchProductsByNameVariables } from '@dataconnect/generated';
import { useSearchProductsByName } from '@dataconnect/generated/react'

export default function SearchProductsByNameComponent() {
  // The `useSearchProductsByName` Query hook has an optional argument of type `SearchProductsByNameVariables`:
  const searchProductsByNameVars: SearchProductsByNameVariables = {
    nameQuery: ..., // optional
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useSearchProductsByName(searchProductsByNameVars);
  // Variables can be defined inline as well.
  const query = useSearchProductsByName({ nameQuery: ..., limit: ..., });
  // Since all variables are optional for this Query, you can omit the `SearchProductsByNameVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useSearchProductsByName();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useSearchProductsByName(dataConnect, searchProductsByNameVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useSearchProductsByName(searchProductsByNameVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useSearchProductsByName(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useSearchProductsByName(dataConnect, searchProductsByNameVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.products);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetProductsByCategory
You can execute the `GetProductsByCategory` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables, options?: useDataConnectQueryOptions<GetProductsByCategoryData>): UseDataConnectQueryResult<GetProductsByCategoryData, GetProductsByCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetProductsByCategory(vars: GetProductsByCategoryVariables, options?: useDataConnectQueryOptions<GetProductsByCategoryData>): UseDataConnectQueryResult<GetProductsByCategoryData, GetProductsByCategoryVariables>;
```

### Variables
The `GetProductsByCategory` Query requires an argument of type `GetProductsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetProductsByCategoryVariables {
  categoryId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `GetProductsByCategory` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetProductsByCategory` Query is of type `GetProductsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetProductsByCategory`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetProductsByCategoryVariables } from '@dataconnect/generated';
import { useGetProductsByCategory } from '@dataconnect/generated/react'

export default function GetProductsByCategoryComponent() {
  // The `useGetProductsByCategory` Query hook requires an argument of type `GetProductsByCategoryVariables`:
  const getProductsByCategoryVars: GetProductsByCategoryVariables = {
    categoryId: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetProductsByCategory(getProductsByCategoryVars);
  // Variables can be defined inline as well.
  const query = useGetProductsByCategory({ categoryId: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetProductsByCategory(dataConnect, getProductsByCategoryVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductsByCategory(getProductsByCategoryVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductsByCategory(dataConnect, getProductsByCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.products);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetProductsByManufacturer
You can execute the `GetProductsByManufacturer` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetProductsByManufacturer(dc: DataConnect, vars: GetProductsByManufacturerVariables, options?: useDataConnectQueryOptions<GetProductsByManufacturerData>): UseDataConnectQueryResult<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetProductsByManufacturer(vars: GetProductsByManufacturerVariables, options?: useDataConnectQueryOptions<GetProductsByManufacturerData>): UseDataConnectQueryResult<GetProductsByManufacturerData, GetProductsByManufacturerVariables>;
```

### Variables
The `GetProductsByManufacturer` Query requires an argument of type `GetProductsByManufacturerVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetProductsByManufacturerVariables {
  manufacturerId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `GetProductsByManufacturer` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetProductsByManufacturer` Query is of type `GetProductsByManufacturerData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetProductsByManufacturer`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetProductsByManufacturerVariables } from '@dataconnect/generated';
import { useGetProductsByManufacturer } from '@dataconnect/generated/react'

export default function GetProductsByManufacturerComponent() {
  // The `useGetProductsByManufacturer` Query hook requires an argument of type `GetProductsByManufacturerVariables`:
  const getProductsByManufacturerVars: GetProductsByManufacturerVariables = {
    manufacturerId: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetProductsByManufacturer(getProductsByManufacturerVars);
  // Variables can be defined inline as well.
  const query = useGetProductsByManufacturer({ manufacturerId: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetProductsByManufacturer(dataConnect, getProductsByManufacturerVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductsByManufacturer(getProductsByManufacturerVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductsByManufacturer(dataConnect, getProductsByManufacturerVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.products);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetLowStockProducts
You can execute the `GetLowStockProducts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetLowStockProducts(dc: DataConnect, vars: GetLowStockProductsVariables, options?: useDataConnectQueryOptions<GetLowStockProductsData>): UseDataConnectQueryResult<GetLowStockProductsData, GetLowStockProductsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetLowStockProducts(vars: GetLowStockProductsVariables, options?: useDataConnectQueryOptions<GetLowStockProductsData>): UseDataConnectQueryResult<GetLowStockProductsData, GetLowStockProductsVariables>;
```

### Variables
The `GetLowStockProducts` Query requires an argument of type `GetLowStockProductsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetLowStockProductsVariables {
  threshold: number;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `GetLowStockProducts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetLowStockProducts` Query is of type `GetLowStockProductsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetLowStockProducts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetLowStockProductsVariables } from '@dataconnect/generated';
import { useGetLowStockProducts } from '@dataconnect/generated/react'

export default function GetLowStockProductsComponent() {
  // The `useGetLowStockProducts` Query hook requires an argument of type `GetLowStockProductsVariables`:
  const getLowStockProductsVars: GetLowStockProductsVariables = {
    threshold: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetLowStockProducts(getLowStockProductsVars);
  // Variables can be defined inline as well.
  const query = useGetLowStockProducts({ threshold: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetLowStockProducts(dataConnect, getLowStockProductsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetLowStockProducts(getLowStockProductsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetLowStockProducts(dataConnect, getLowStockProductsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.products);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListProductImages
You can execute the `ListProductImages` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListProductImages(dc: DataConnect, vars?: ListProductImagesVariables, options?: useDataConnectQueryOptions<ListProductImagesData>): UseDataConnectQueryResult<ListProductImagesData, ListProductImagesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListProductImages(vars?: ListProductImagesVariables, options?: useDataConnectQueryOptions<ListProductImagesData>): UseDataConnectQueryResult<ListProductImagesData, ListProductImagesVariables>;
```

### Variables
The `ListProductImages` Query has an optional argument of type `ListProductImagesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListProductImagesVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListProductImages` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListProductImages` Query is of type `ListProductImagesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListProductImages`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListProductImagesVariables } from '@dataconnect/generated';
import { useListProductImages } from '@dataconnect/generated/react'

export default function ListProductImagesComponent() {
  // The `useListProductImages` Query hook has an optional argument of type `ListProductImagesVariables`:
  const listProductImagesVars: ListProductImagesVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListProductImages(listProductImagesVars);
  // Variables can be defined inline as well.
  const query = useListProductImages({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListProductImagesVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListProductImages();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListProductImages(dataConnect, listProductImagesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListProductImages(listProductImagesVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListProductImages(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListProductImages(dataConnect, listProductImagesVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.productImages);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetProductImagesByProductId
You can execute the `GetProductImagesByProductId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetProductImagesByProductId(dc: DataConnect, vars: GetProductImagesByProductIdVariables, options?: useDataConnectQueryOptions<GetProductImagesByProductIdData>): UseDataConnectQueryResult<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetProductImagesByProductId(vars: GetProductImagesByProductIdVariables, options?: useDataConnectQueryOptions<GetProductImagesByProductIdData>): UseDataConnectQueryResult<GetProductImagesByProductIdData, GetProductImagesByProductIdVariables>;
```

### Variables
The `GetProductImagesByProductId` Query requires an argument of type `GetProductImagesByProductIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetProductImagesByProductIdVariables {
  productId: UUIDString;
}
```
### Return Type
Recall that calling the `GetProductImagesByProductId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetProductImagesByProductId` Query is of type `GetProductImagesByProductIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetProductImagesByProductIdData {
  productImages: ({
    id: UUIDString;
    url: string;
    altText?: string | null;
  } & ProductImage_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetProductImagesByProductId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetProductImagesByProductIdVariables } from '@dataconnect/generated';
import { useGetProductImagesByProductId } from '@dataconnect/generated/react'

export default function GetProductImagesByProductIdComponent() {
  // The `useGetProductImagesByProductId` Query hook requires an argument of type `GetProductImagesByProductIdVariables`:
  const getProductImagesByProductIdVars: GetProductImagesByProductIdVariables = {
    productId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetProductImagesByProductId(getProductImagesByProductIdVars);
  // Variables can be defined inline as well.
  const query = useGetProductImagesByProductId({ productId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetProductImagesByProductId(dataConnect, getProductImagesByProductIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductImagesByProductId(getProductImagesByProductIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetProductImagesByProductId(dataConnect, getProductImagesByProductIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.productImages);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListManufacturers
You can execute the `ListManufacturers` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListManufacturers(dc: DataConnect, vars?: ListManufacturersVariables, options?: useDataConnectQueryOptions<ListManufacturersData>): UseDataConnectQueryResult<ListManufacturersData, ListManufacturersVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListManufacturers(vars?: ListManufacturersVariables, options?: useDataConnectQueryOptions<ListManufacturersData>): UseDataConnectQueryResult<ListManufacturersData, ListManufacturersVariables>;
```

### Variables
The `ListManufacturers` Query has an optional argument of type `ListManufacturersVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListManufacturersVariables {
  orderByName?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListManufacturers` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListManufacturers` Query is of type `ListManufacturersData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListManufacturersData {
  manufacturers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListManufacturers`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListManufacturersVariables } from '@dataconnect/generated';
import { useListManufacturers } from '@dataconnect/generated/react'

export default function ListManufacturersComponent() {
  // The `useListManufacturers` Query hook has an optional argument of type `ListManufacturersVariables`:
  const listManufacturersVars: ListManufacturersVariables = {
    orderByName: ..., // optional
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListManufacturers(listManufacturersVars);
  // Variables can be defined inline as well.
  const query = useListManufacturers({ orderByName: ..., limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListManufacturersVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListManufacturers();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListManufacturers(dataConnect, listManufacturersVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListManufacturers(listManufacturersVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListManufacturers(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListManufacturers(dataConnect, listManufacturersVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.manufacturers);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetManufacturerById
You can execute the `GetManufacturerById` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetManufacturerById(dc: DataConnect, vars: GetManufacturerByIdVariables, options?: useDataConnectQueryOptions<GetManufacturerByIdData>): UseDataConnectQueryResult<GetManufacturerByIdData, GetManufacturerByIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetManufacturerById(vars: GetManufacturerByIdVariables, options?: useDataConnectQueryOptions<GetManufacturerByIdData>): UseDataConnectQueryResult<GetManufacturerByIdData, GetManufacturerByIdVariables>;
```

### Variables
The `GetManufacturerById` Query requires an argument of type `GetManufacturerByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetManufacturerByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetManufacturerById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetManufacturerById` Query is of type `GetManufacturerByIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetManufacturerByIdData {
  manufacturer?: {
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetManufacturerById`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetManufacturerByIdVariables } from '@dataconnect/generated';
import { useGetManufacturerById } from '@dataconnect/generated/react'

export default function GetManufacturerByIdComponent() {
  // The `useGetManufacturerById` Query hook requires an argument of type `GetManufacturerByIdVariables`:
  const getManufacturerByIdVars: GetManufacturerByIdVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetManufacturerById(getManufacturerByIdVars);
  // Variables can be defined inline as well.
  const query = useGetManufacturerById({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetManufacturerById(dataConnect, getManufacturerByIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetManufacturerById(getManufacturerByIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetManufacturerById(dataConnect, getManufacturerByIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.manufacturer);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetManufacturerByName
You can execute the `GetManufacturerByName` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetManufacturerByName(dc: DataConnect, vars: GetManufacturerByNameVariables, options?: useDataConnectQueryOptions<GetManufacturerByNameData>): UseDataConnectQueryResult<GetManufacturerByNameData, GetManufacturerByNameVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetManufacturerByName(vars: GetManufacturerByNameVariables, options?: useDataConnectQueryOptions<GetManufacturerByNameData>): UseDataConnectQueryResult<GetManufacturerByNameData, GetManufacturerByNameVariables>;
```

### Variables
The `GetManufacturerByName` Query requires an argument of type `GetManufacturerByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetManufacturerByNameVariables {
  name: string;
}
```
### Return Type
Recall that calling the `GetManufacturerByName` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetManufacturerByName` Query is of type `GetManufacturerByNameData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetManufacturerByNameData {
  manufacturers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Manufacturer_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetManufacturerByName`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetManufacturerByNameVariables } from '@dataconnect/generated';
import { useGetManufacturerByName } from '@dataconnect/generated/react'

export default function GetManufacturerByNameComponent() {
  // The `useGetManufacturerByName` Query hook requires an argument of type `GetManufacturerByNameVariables`:
  const getManufacturerByNameVars: GetManufacturerByNameVariables = {
    name: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetManufacturerByName(getManufacturerByNameVars);
  // Variables can be defined inline as well.
  const query = useGetManufacturerByName({ name: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetManufacturerByName(dataConnect, getManufacturerByNameVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetManufacturerByName(getManufacturerByNameVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetManufacturerByName(dataConnect, getManufacturerByNameVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.manufacturers);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCategories
You can execute the `ListCategories` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListCategories(dc: DataConnect, vars?: ListCategoriesVariables, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, ListCategoriesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCategories(vars?: ListCategoriesVariables, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, ListCategoriesVariables>;
```

### Variables
The `ListCategories` Query has an optional argument of type `ListCategoriesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListCategoriesVariables {
  orderByName?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListCategories` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCategories` Query is of type `ListCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
  } & Category_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCategories`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListCategoriesVariables } from '@dataconnect/generated';
import { useListCategories } from '@dataconnect/generated/react'

export default function ListCategoriesComponent() {
  // The `useListCategories` Query hook has an optional argument of type `ListCategoriesVariables`:
  const listCategoriesVars: ListCategoriesVariables = {
    orderByName: ..., // optional
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCategories(listCategoriesVars);
  // Variables can be defined inline as well.
  const query = useListCategories({ orderByName: ..., limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListCategoriesVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListCategories();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCategories(dataConnect, listCategoriesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCategories(listCategoriesVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListCategories(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCategories(dataConnect, listCategoriesVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.categories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetCategoryById
You can execute the `GetCategoryById` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetCategoryById(dc: DataConnect, vars: GetCategoryByIdVariables, options?: useDataConnectQueryOptions<GetCategoryByIdData>): UseDataConnectQueryResult<GetCategoryByIdData, GetCategoryByIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCategoryById(vars: GetCategoryByIdVariables, options?: useDataConnectQueryOptions<GetCategoryByIdData>): UseDataConnectQueryResult<GetCategoryByIdData, GetCategoryByIdVariables>;
```

### Variables
The `GetCategoryById` Query requires an argument of type `GetCategoryByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCategoryByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetCategoryById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCategoryById` Query is of type `GetCategoryByIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCategoryById`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetCategoryByIdVariables } from '@dataconnect/generated';
import { useGetCategoryById } from '@dataconnect/generated/react'

export default function GetCategoryByIdComponent() {
  // The `useGetCategoryById` Query hook requires an argument of type `GetCategoryByIdVariables`:
  const getCategoryByIdVars: GetCategoryByIdVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCategoryById(getCategoryByIdVars);
  // Variables can be defined inline as well.
  const query = useGetCategoryById({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCategoryById(dataConnect, getCategoryByIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetCategoryById(getCategoryByIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetCategoryById(dataConnect, getCategoryByIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.category);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetCategoryByName
You can execute the `GetCategoryByName` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetCategoryByName(dc: DataConnect, vars: GetCategoryByNameVariables, options?: useDataConnectQueryOptions<GetCategoryByNameData>): UseDataConnectQueryResult<GetCategoryByNameData, GetCategoryByNameVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCategoryByName(vars: GetCategoryByNameVariables, options?: useDataConnectQueryOptions<GetCategoryByNameData>): UseDataConnectQueryResult<GetCategoryByNameData, GetCategoryByNameVariables>;
```

### Variables
The `GetCategoryByName` Query requires an argument of type `GetCategoryByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCategoryByNameVariables {
  name: string;
}
```
### Return Type
Recall that calling the `GetCategoryByName` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCategoryByName` Query is of type `GetCategoryByNameData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCategoryByName`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetCategoryByNameVariables } from '@dataconnect/generated';
import { useGetCategoryByName } from '@dataconnect/generated/react'

export default function GetCategoryByNameComponent() {
  // The `useGetCategoryByName` Query hook requires an argument of type `GetCategoryByNameVariables`:
  const getCategoryByNameVars: GetCategoryByNameVariables = {
    name: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCategoryByName(getCategoryByNameVars);
  // Variables can be defined inline as well.
  const query = useGetCategoryByName({ name: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCategoryByName(dataConnect, getCategoryByNameVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetCategoryByName(getCategoryByNameVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetCategoryByName(dataConnect, getCategoryByNameVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.categories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetChildCategories
You can execute the `GetChildCategories` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetChildCategories(dc: DataConnect, vars: GetChildCategoriesVariables, options?: useDataConnectQueryOptions<GetChildCategoriesData>): UseDataConnectQueryResult<GetChildCategoriesData, GetChildCategoriesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetChildCategories(vars: GetChildCategoriesVariables, options?: useDataConnectQueryOptions<GetChildCategoriesData>): UseDataConnectQueryResult<GetChildCategoriesData, GetChildCategoriesVariables>;
```

### Variables
The `GetChildCategories` Query requires an argument of type `GetChildCategoriesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetChildCategoriesVariables {
  parentId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `GetChildCategories` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetChildCategories` Query is of type `GetChildCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetChildCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description: string;
    isParent: boolean;
  } & Category_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetChildCategories`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetChildCategoriesVariables } from '@dataconnect/generated';
import { useGetChildCategories } from '@dataconnect/generated/react'

export default function GetChildCategoriesComponent() {
  // The `useGetChildCategories` Query hook requires an argument of type `GetChildCategoriesVariables`:
  const getChildCategoriesVars: GetChildCategoriesVariables = {
    parentId: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetChildCategories(getChildCategoriesVars);
  // Variables can be defined inline as well.
  const query = useGetChildCategories({ parentId: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetChildCategories(dataConnect, getChildCategoriesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetChildCategories(getChildCategoriesVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetChildCategories(dataConnect, getChildCategoriesVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.categories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetParentCategory
You can execute the `GetParentCategory` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetParentCategory(dc: DataConnect, vars: GetParentCategoryVariables, options?: useDataConnectQueryOptions<GetParentCategoryData>): UseDataConnectQueryResult<GetParentCategoryData, GetParentCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetParentCategory(vars: GetParentCategoryVariables, options?: useDataConnectQueryOptions<GetParentCategoryData>): UseDataConnectQueryResult<GetParentCategoryData, GetParentCategoryVariables>;
```

### Variables
The `GetParentCategory` Query requires an argument of type `GetParentCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetParentCategoryVariables {
  childId: UUIDString;
}
```
### Return Type
Recall that calling the `GetParentCategory` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetParentCategory` Query is of type `GetParentCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetParentCategory`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetParentCategoryVariables } from '@dataconnect/generated';
import { useGetParentCategory } from '@dataconnect/generated/react'

export default function GetParentCategoryComponent() {
  // The `useGetParentCategory` Query hook requires an argument of type `GetParentCategoryVariables`:
  const getParentCategoryVars: GetParentCategoryVariables = {
    childId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetParentCategory(getParentCategoryVars);
  // Variables can be defined inline as well.
  const query = useGetParentCategory({ childId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetParentCategory(dataConnect, getParentCategoryVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetParentCategory(getParentCategoryVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetParentCategory(dataConnect, getParentCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.category);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCPUs
You can execute the `ListCPUs` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListCpUs(dc: DataConnect, vars?: ListCpUsVariables, options?: useDataConnectQueryOptions<ListCpUsData>): UseDataConnectQueryResult<ListCpUsData, ListCpUsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCpUs(vars?: ListCpUsVariables, options?: useDataConnectQueryOptions<ListCpUsData>): UseDataConnectQueryResult<ListCpUsData, ListCpUsVariables>;
```

### Variables
The `ListCPUs` Query has an optional argument of type `ListCpUsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListCpUsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListCPUs` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCPUs` Query is of type `ListCpUsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCPUs`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListCpUsVariables } from '@dataconnect/generated';
import { useListCpUs } from '@dataconnect/generated/react'

export default function ListCpUsComponent() {
  // The `useListCpUs` Query hook has an optional argument of type `ListCpUsVariables`:
  const listCpUsVars: ListCpUsVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCpUs(listCpUsVars);
  // Variables can be defined inline as well.
  const query = useListCpUs({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListCpUsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListCpUs();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCpUs(dataConnect, listCpUsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCpUs(listCpUsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListCpUs(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCpUs(dataConnect, listCpUsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cpus);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListGPUs
You can execute the `ListGPUs` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListGpUs(dc: DataConnect, vars?: ListGpUsVariables, options?: useDataConnectQueryOptions<ListGpUsData>): UseDataConnectQueryResult<ListGpUsData, ListGpUsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListGpUs(vars?: ListGpUsVariables, options?: useDataConnectQueryOptions<ListGpUsData>): UseDataConnectQueryResult<ListGpUsData, ListGpUsVariables>;
```

### Variables
The `ListGPUs` Query has an optional argument of type `ListGpUsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListGpUsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListGPUs` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListGPUs` Query is of type `ListGpUsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListGPUs`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListGpUsVariables } from '@dataconnect/generated';
import { useListGpUs } from '@dataconnect/generated/react'

export default function ListGpUsComponent() {
  // The `useListGpUs` Query hook has an optional argument of type `ListGpUsVariables`:
  const listGpUsVars: ListGpUsVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListGpUs(listGpUsVars);
  // Variables can be defined inline as well.
  const query = useListGpUs({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListGpUsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListGpUs();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListGpUs(dataConnect, listGpUsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListGpUs(listGpUsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListGpUs(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListGpUs(dataConnect, listGpUsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.gpus);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListStorage
You can execute the `ListStorage` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListStorage(dc: DataConnect, vars?: ListStorageVariables, options?: useDataConnectQueryOptions<ListStorageData>): UseDataConnectQueryResult<ListStorageData, ListStorageVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListStorage(vars?: ListStorageVariables, options?: useDataConnectQueryOptions<ListStorageData>): UseDataConnectQueryResult<ListStorageData, ListStorageVariables>;
```

### Variables
The `ListStorage` Query has an optional argument of type `ListStorageVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListStorageVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListStorage` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListStorage` Query is of type `ListStorageData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListStorage`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListStorageVariables } from '@dataconnect/generated';
import { useListStorage } from '@dataconnect/generated/react'

export default function ListStorageComponent() {
  // The `useListStorage` Query hook has an optional argument of type `ListStorageVariables`:
  const listStorageVars: ListStorageVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListStorage(listStorageVars);
  // Variables can be defined inline as well.
  const query = useListStorage({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListStorageVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListStorage();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListStorage(dataConnect, listStorageVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListStorage(listStorageVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListStorage(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListStorage(dataConnect, listStorageVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.storages);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPSUs
You can execute the `ListPSUs` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPsUs(dc: DataConnect, vars?: ListPsUsVariables, options?: useDataConnectQueryOptions<ListPsUsData>): UseDataConnectQueryResult<ListPsUsData, ListPsUsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPsUs(vars?: ListPsUsVariables, options?: useDataConnectQueryOptions<ListPsUsData>): UseDataConnectQueryResult<ListPsUsData, ListPsUsVariables>;
```

### Variables
The `ListPSUs` Query has an optional argument of type `ListPsUsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListPsUsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListPSUs` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPSUs` Query is of type `ListPsUsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPSUs`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListPsUsVariables } from '@dataconnect/generated';
import { useListPsUs } from '@dataconnect/generated/react'

export default function ListPsUsComponent() {
  // The `useListPsUs` Query hook has an optional argument of type `ListPsUsVariables`:
  const listPsUsVars: ListPsUsVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPsUs(listPsUsVars);
  // Variables can be defined inline as well.
  const query = useListPsUs({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListPsUsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListPsUs();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPsUs(dataConnect, listPsUsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPsUs(listPsUsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListPsUs(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPsUs(dataConnect, listPsUsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.psus);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCPUCoolers
You can execute the `ListCPUCoolers` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListCpuCoolers(dc: DataConnect, vars?: ListCpuCoolersVariables, options?: useDataConnectQueryOptions<ListCpuCoolersData>): UseDataConnectQueryResult<ListCpuCoolersData, ListCpuCoolersVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCpuCoolers(vars?: ListCpuCoolersVariables, options?: useDataConnectQueryOptions<ListCpuCoolersData>): UseDataConnectQueryResult<ListCpuCoolersData, ListCpuCoolersVariables>;
```

### Variables
The `ListCPUCoolers` Query has an optional argument of type `ListCpuCoolersVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListCpuCoolersVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListCPUCoolers` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCPUCoolers` Query is of type `ListCpuCoolersData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCPUCoolers`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListCpuCoolersVariables } from '@dataconnect/generated';
import { useListCpuCoolers } from '@dataconnect/generated/react'

export default function ListCpuCoolersComponent() {
  // The `useListCpuCoolers` Query hook has an optional argument of type `ListCpuCoolersVariables`:
  const listCpuCoolersVars: ListCpuCoolersVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCpuCoolers(listCpuCoolersVars);
  // Variables can be defined inline as well.
  const query = useListCpuCoolers({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListCpuCoolersVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListCpuCoolers();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCpuCoolers(dataConnect, listCpuCoolersVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCpuCoolers(listCpuCoolersVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListCpuCoolers(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCpuCoolers(dataConnect, listCpuCoolersVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cpuCoolers);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCases
You can execute the `ListCases` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListCases(dc: DataConnect, vars?: ListCasesVariables, options?: useDataConnectQueryOptions<ListCasesData>): UseDataConnectQueryResult<ListCasesData, ListCasesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCases(vars?: ListCasesVariables, options?: useDataConnectQueryOptions<ListCasesData>): UseDataConnectQueryResult<ListCasesData, ListCasesVariables>;
```

### Variables
The `ListCases` Query has an optional argument of type `ListCasesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListCasesVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListCases` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCases` Query is of type `ListCasesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCases`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListCasesVariables } from '@dataconnect/generated';
import { useListCases } from '@dataconnect/generated/react'

export default function ListCasesComponent() {
  // The `useListCases` Query hook has an optional argument of type `ListCasesVariables`:
  const listCasesVars: ListCasesVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCases(listCasesVars);
  // Variables can be defined inline as well.
  const query = useListCases({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListCasesVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListCases();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCases(dataConnect, listCasesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCases(listCasesVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListCases(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCases(dataConnect, listCasesVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cases);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListRAM
You can execute the `ListRAM` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListRam(dc: DataConnect, vars?: ListRamVariables, options?: useDataConnectQueryOptions<ListRamData>): UseDataConnectQueryResult<ListRamData, ListRamVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListRam(vars?: ListRamVariables, options?: useDataConnectQueryOptions<ListRamData>): UseDataConnectQueryResult<ListRamData, ListRamVariables>;
```

### Variables
The `ListRAM` Query has an optional argument of type `ListRamVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListRamVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListRAM` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListRAM` Query is of type `ListRamData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListRAM`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListRamVariables } from '@dataconnect/generated';
import { useListRam } from '@dataconnect/generated/react'

export default function ListRamComponent() {
  // The `useListRam` Query hook has an optional argument of type `ListRamVariables`:
  const listRamVars: ListRamVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListRam(listRamVars);
  // Variables can be defined inline as well.
  const query = useListRam({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListRamVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListRam();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListRam(dataConnect, listRamVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListRam(listRamVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListRam(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListRam(dataConnect, listRamVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.rams);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListMotherboards
You can execute the `ListMotherboards` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListMotherboards(dc: DataConnect, vars?: ListMotherboardsVariables, options?: useDataConnectQueryOptions<ListMotherboardsData>): UseDataConnectQueryResult<ListMotherboardsData, ListMotherboardsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListMotherboards(vars?: ListMotherboardsVariables, options?: useDataConnectQueryOptions<ListMotherboardsData>): UseDataConnectQueryResult<ListMotherboardsData, ListMotherboardsVariables>;
```

### Variables
The `ListMotherboards` Query has an optional argument of type `ListMotherboardsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListMotherboardsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListMotherboards` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListMotherboards` Query is of type `ListMotherboardsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListMotherboards`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListMotherboardsVariables } from '@dataconnect/generated';
import { useListMotherboards } from '@dataconnect/generated/react'

export default function ListMotherboardsComponent() {
  // The `useListMotherboards` Query hook has an optional argument of type `ListMotherboardsVariables`:
  const listMotherboardsVars: ListMotherboardsVariables = {
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListMotherboards(listMotherboardsVars);
  // Variables can be defined inline as well.
  const query = useListMotherboards({ limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListMotherboardsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListMotherboards();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListMotherboards(dataConnect, listMotherboardsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListMotherboards(listMotherboardsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListMotherboards(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListMotherboards(dataConnect, listMotherboardsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.motherboards);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `inventory-connector` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CreateProduct
You can execute the `CreateProduct` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateProduct(options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;
```

### Variables
The `CreateProduct` Mutation requires an argument of type `CreateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateProduct` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateProduct` Mutation is of type `CreateProductData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateProductData {
  product_insert: Product_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateProduct`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateProductVariables } from '@dataconnect/generated';
import { useCreateProduct } from '@dataconnect/generated/react'

export default function CreateProductComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateProduct();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateProduct(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateProduct(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateProduct(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateProduct` Mutation requires an argument of type `CreateProductVariables`:
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
  mutation.mutate(createProductVars);
  // Variables can be defined inline as well.
  mutation.mutate({ name: ..., sku: ..., description: ..., color: ..., msrp: ..., price: ..., quantity: ..., manufacturerId: ..., categoryId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createProductVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.product_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateProduct
You can execute the `UpdateProduct` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateProduct(options?: useDataConnectMutationOptions<UpdateProductData, FirebaseError, UpdateProductVariables>): UseDataConnectMutationResult<UpdateProductData, UpdateProductVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProductData, FirebaseError, UpdateProductVariables>): UseDataConnectMutationResult<UpdateProductData, UpdateProductVariables>;
```

### Variables
The `UpdateProduct` Mutation requires an argument of type `UpdateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateProduct` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateProduct` Mutation is of type `UpdateProductData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateProductData {
  product_update?: Product_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateProduct`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateProductVariables } from '@dataconnect/generated';
import { useUpdateProduct } from '@dataconnect/generated/react'

export default function UpdateProductComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateProduct();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateProduct(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateProduct(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateProduct(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateProduct` Mutation requires an argument of type `UpdateProductVariables`:
  const updateProductVars: UpdateProductVariables = {
    id: ..., 
    name: ..., // optional
    description: ..., // optional
    color: ..., // optional
    price: ..., // optional
    quantity: ..., // optional
    categoryId: ..., // optional
  };
  mutation.mutate(updateProductVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., name: ..., description: ..., color: ..., price: ..., quantity: ..., categoryId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateProductVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.product_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteProduct
You can execute the `DeleteProduct` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteProduct(options?: useDataConnectMutationOptions<DeleteProductData, FirebaseError, DeleteProductVariables>): UseDataConnectMutationResult<DeleteProductData, DeleteProductVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteProduct(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProductData, FirebaseError, DeleteProductVariables>): UseDataConnectMutationResult<DeleteProductData, DeleteProductVariables>;
```

### Variables
The `DeleteProduct` Mutation requires an argument of type `DeleteProductVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteProductVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteProduct` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteProduct` Mutation is of type `DeleteProductData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteProductData {
  product_delete?: Product_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteProduct`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteProductVariables } from '@dataconnect/generated';
import { useDeleteProduct } from '@dataconnect/generated/react'

export default function DeleteProductComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteProduct();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteProduct(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteProduct(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteProduct(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteProduct` Mutation requires an argument of type `DeleteProductVariables`:
  const deleteProductVars: DeleteProductVariables = {
    id: ..., 
  };
  mutation.mutate(deleteProductVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteProductVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.product_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateCPUSpecs
You can execute the `CreateCPUSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateCpuSpecs(options?: useDataConnectMutationOptions<CreateCpuSpecsData, FirebaseError, CreateCpuSpecsVariables>): UseDataConnectMutationResult<CreateCpuSpecsData, CreateCpuSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateCpuSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCpuSpecsData, FirebaseError, CreateCpuSpecsVariables>): UseDataConnectMutationResult<CreateCpuSpecsData, CreateCpuSpecsVariables>;
```

### Variables
The `CreateCPUSpecs` Mutation requires an argument of type `CreateCpuSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateCPUSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateCPUSpecs` Mutation is of type `CreateCpuSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateCpuSpecsData {
  cpu_insert: Cpu_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateCPUSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateCpuSpecsVariables } from '@dataconnect/generated';
import { useCreateCpuSpecs } from '@dataconnect/generated/react'

export default function CreateCpuSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateCpuSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateCpuSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCpuSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCpuSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateCpuSpecs` Mutation requires an argument of type `CreateCpuSpecsVariables`:
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
  mutation.mutate(createCpuSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., cores: ..., threads: ..., baseClockGHz: ..., boostClockGHz: ..., tdp: ..., socketType: ..., integratedGraphics: ..., cacheMB: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createCpuSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.cpu_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateGPUSpecs
You can execute the `CreateGPUSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateGpuSpecs(options?: useDataConnectMutationOptions<CreateGpuSpecsData, FirebaseError, CreateGpuSpecsVariables>): UseDataConnectMutationResult<CreateGpuSpecsData, CreateGpuSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateGpuSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateGpuSpecsData, FirebaseError, CreateGpuSpecsVariables>): UseDataConnectMutationResult<CreateGpuSpecsData, CreateGpuSpecsVariables>;
```

### Variables
The `CreateGPUSpecs` Mutation requires an argument of type `CreateGpuSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateGPUSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateGPUSpecs` Mutation is of type `CreateGpuSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateGpuSpecsData {
  gpu_insert: Gpu_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateGPUSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateGpuSpecsVariables } from '@dataconnect/generated';
import { useCreateGpuSpecs } from '@dataconnect/generated/react'

export default function CreateGpuSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateGpuSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateGpuSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateGpuSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateGpuSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateGpuSpecs` Mutation requires an argument of type `CreateGpuSpecsVariables`:
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
  mutation.mutate(createGpuSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., chipset: ..., vramGB: ..., vramType: ..., coreCount: ..., baseClockMHz: ..., boostClockMHz: ..., tdp: ..., lengthMM: ..., powerConnectors: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createGpuSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.gpu_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateCategory
You can execute the `CreateCategory` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
```

### Variables
The `CreateCategory` Mutation requires an argument of type `CreateCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateCategoryVariables {
  name: string;
  description: string;
  isParent: boolean;
  parentId?: UUIDString | null;
}
```
### Return Type
Recall that calling the `CreateCategory` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateCategory` Mutation is of type `CreateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateCategoryData {
  category_insert: Category_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateCategory`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateCategoryVariables } from '@dataconnect/generated';
import { useCreateCategory } from '@dataconnect/generated/react'

export default function CreateCategoryComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateCategory();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateCategory(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCategory(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCategory(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateCategory` Mutation requires an argument of type `CreateCategoryVariables`:
  const createCategoryVars: CreateCategoryVariables = {
    name: ..., 
    description: ..., 
    isParent: ..., 
    parentId: ..., // optional
  };
  mutation.mutate(createCategoryVars);
  // Variables can be defined inline as well.
  mutation.mutate({ name: ..., description: ..., isParent: ..., parentId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.category_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateStorageSpecs
You can execute the `CreateStorageSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateStorageSpecs(options?: useDataConnectMutationOptions<CreateStorageSpecsData, FirebaseError, CreateStorageSpecsVariables>): UseDataConnectMutationResult<CreateStorageSpecsData, CreateStorageSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateStorageSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateStorageSpecsData, FirebaseError, CreateStorageSpecsVariables>): UseDataConnectMutationResult<CreateStorageSpecsData, CreateStorageSpecsVariables>;
```

### Variables
The `CreateStorageSpecs` Mutation requires an argument of type `CreateStorageSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateStorageSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateStorageSpecs` Mutation is of type `CreateStorageSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateStorageSpecsData {
  storage_insert: Storage_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateStorageSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateStorageSpecsVariables } from '@dataconnect/generated';
import { useCreateStorageSpecs } from '@dataconnect/generated/react'

export default function CreateStorageSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateStorageSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateStorageSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateStorageSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateStorageSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateStorageSpecs` Mutation requires an argument of type `CreateStorageSpecsVariables`:
  const createStorageSpecsVars: CreateStorageSpecsVariables = {
    productId: ..., 
    storageType: ..., 
    capacityGB: ..., 
    interface: ..., 
    formFactor: ..., 
    readSpeedMBps: ..., // optional
    writeSpeedMBps: ..., // optional
  };
  mutation.mutate(createStorageSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., storageType: ..., capacityGB: ..., interface: ..., formFactor: ..., readSpeedMBps: ..., writeSpeedMBps: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createStorageSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.storage_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePSUSpecs
You can execute the `CreatePSUSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePsuSpecs(options?: useDataConnectMutationOptions<CreatePsuSpecsData, FirebaseError, CreatePsuSpecsVariables>): UseDataConnectMutationResult<CreatePsuSpecsData, CreatePsuSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePsuSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePsuSpecsData, FirebaseError, CreatePsuSpecsVariables>): UseDataConnectMutationResult<CreatePsuSpecsData, CreatePsuSpecsVariables>;
```

### Variables
The `CreatePSUSpecs` Mutation requires an argument of type `CreatePsuSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreatePsuSpecsVariables {
  productId: UUIDString;
  wattage: number;
  efficiencyRating: string;
  modular: string;
  formFactor: string;
}
```
### Return Type
Recall that calling the `CreatePSUSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePSUSpecs` Mutation is of type `CreatePsuSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePsuSpecsData {
  psu_insert: Psu_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePSUSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePsuSpecsVariables } from '@dataconnect/generated';
import { useCreatePsuSpecs } from '@dataconnect/generated/react'

export default function CreatePsuSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePsuSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePsuSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePsuSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePsuSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePsuSpecs` Mutation requires an argument of type `CreatePsuSpecsVariables`:
  const createPsuSpecsVars: CreatePsuSpecsVariables = {
    productId: ..., 
    wattage: ..., 
    efficiencyRating: ..., 
    modular: ..., 
    formFactor: ..., 
  };
  mutation.mutate(createPsuSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., wattage: ..., efficiencyRating: ..., modular: ..., formFactor: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPsuSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.psu_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateCPUCoolerSpecs
You can execute the `CreateCPUCoolerSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateCpuCoolerSpecs(options?: useDataConnectMutationOptions<CreateCpuCoolerSpecsData, FirebaseError, CreateCpuCoolerSpecsVariables>): UseDataConnectMutationResult<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateCpuCoolerSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCpuCoolerSpecsData, FirebaseError, CreateCpuCoolerSpecsVariables>): UseDataConnectMutationResult<CreateCpuCoolerSpecsData, CreateCpuCoolerSpecsVariables>;
```

### Variables
The `CreateCPUCoolerSpecs` Mutation requires an argument of type `CreateCpuCoolerSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateCPUCoolerSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateCPUCoolerSpecs` Mutation is of type `CreateCpuCoolerSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateCpuCoolerSpecsData {
  cpuCooler_insert: CpuCooler_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateCPUCoolerSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateCpuCoolerSpecsVariables } from '@dataconnect/generated';
import { useCreateCpuCoolerSpecs } from '@dataconnect/generated/react'

export default function CreateCpuCoolerSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateCpuCoolerSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateCpuCoolerSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCpuCoolerSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCpuCoolerSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateCpuCoolerSpecs` Mutation requires an argument of type `CreateCpuCoolerSpecsVariables`:
  const createCpuCoolerSpecsVars: CreateCpuCoolerSpecsVariables = {
    productId: ..., 
    coolerType: ..., 
    radiatorSizeMM: ..., // optional
    fanSizeMM: ..., // optional
    maxTDP: ..., 
    socketCompatibility: ..., 
    heightMM: ..., 
  };
  mutation.mutate(createCpuCoolerSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., coolerType: ..., radiatorSizeMM: ..., fanSizeMM: ..., maxTDP: ..., socketCompatibility: ..., heightMM: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createCpuCoolerSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.cpuCooler_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateCaseSpecs
You can execute the `CreateCaseSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateCaseSpecs(options?: useDataConnectMutationOptions<CreateCaseSpecsData, FirebaseError, CreateCaseSpecsVariables>): UseDataConnectMutationResult<CreateCaseSpecsData, CreateCaseSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateCaseSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCaseSpecsData, FirebaseError, CreateCaseSpecsVariables>): UseDataConnectMutationResult<CreateCaseSpecsData, CreateCaseSpecsVariables>;
```

### Variables
The `CreateCaseSpecs` Mutation requires an argument of type `CreateCaseSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateCaseSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateCaseSpecs` Mutation is of type `CreateCaseSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateCaseSpecsData {
  case_insert: Case_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateCaseSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateCaseSpecsVariables } from '@dataconnect/generated';
import { useCreateCaseSpecs } from '@dataconnect/generated/react'

export default function CreateCaseSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateCaseSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateCaseSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCaseSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCaseSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateCaseSpecs` Mutation requires an argument of type `CreateCaseSpecsVariables`:
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
  mutation.mutate(createCaseSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., formFactor: ..., moboSupport: ..., maxGPULengthMM: ..., maxCPUCoolerHeightMM: ..., maxPSULengthMM: ..., driveSlotsTwoHalf: ..., driveSlotsThreeHalf: ..., fanSlots: ..., radiatorSupport: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createCaseSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.case_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateRAMSpecs
You can execute the `CreateRAMSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateRamSpecs(options?: useDataConnectMutationOptions<CreateRamSpecsData, FirebaseError, CreateRamSpecsVariables>): UseDataConnectMutationResult<CreateRamSpecsData, CreateRamSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateRamSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateRamSpecsData, FirebaseError, CreateRamSpecsVariables>): UseDataConnectMutationResult<CreateRamSpecsData, CreateRamSpecsVariables>;
```

### Variables
The `CreateRAMSpecs` Mutation requires an argument of type `CreateRamSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateRAMSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateRAMSpecs` Mutation is of type `CreateRamSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateRamSpecsData {
  ram_insert: Ram_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateRAMSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateRamSpecsVariables } from '@dataconnect/generated';
import { useCreateRamSpecs } from '@dataconnect/generated/react'

export default function CreateRamSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateRamSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateRamSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateRamSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateRamSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateRamSpecs` Mutation requires an argument of type `CreateRamSpecsVariables`:
  const createRamSpecsVars: CreateRamSpecsVariables = {
    productId: ..., 
    memoryType: ..., 
    speedMHz: ..., 
    capacityGB: ..., 
    modules: ..., 
    casLatency: ..., // optional
    voltage: ..., // optional
  };
  mutation.mutate(createRamSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., memoryType: ..., speedMHz: ..., capacityGB: ..., modules: ..., casLatency: ..., voltage: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createRamSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.ram_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateMotherboardSpecs
You can execute the `CreateMotherboardSpecs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateMotherboardSpecs(options?: useDataConnectMutationOptions<CreateMotherboardSpecsData, FirebaseError, CreateMotherboardSpecsVariables>): UseDataConnectMutationResult<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateMotherboardSpecs(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMotherboardSpecsData, FirebaseError, CreateMotherboardSpecsVariables>): UseDataConnectMutationResult<CreateMotherboardSpecsData, CreateMotherboardSpecsVariables>;
```

### Variables
The `CreateMotherboardSpecs` Mutation requires an argument of type `CreateMotherboardSpecsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateMotherboardSpecs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateMotherboardSpecs` Mutation is of type `CreateMotherboardSpecsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateMotherboardSpecsData {
  motherboard_insert: Motherboard_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateMotherboardSpecs`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateMotherboardSpecsVariables } from '@dataconnect/generated';
import { useCreateMotherboardSpecs } from '@dataconnect/generated/react'

export default function CreateMotherboardSpecsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateMotherboardSpecs();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateMotherboardSpecs(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateMotherboardSpecs(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateMotherboardSpecs(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateMotherboardSpecs` Mutation requires an argument of type `CreateMotherboardSpecsVariables`:
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
  mutation.mutate(createMotherboardSpecsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ productId: ..., socketType: ..., chipset: ..., formFactor: ..., memoryType: ..., memorySlots: ..., maxMemoryGB: ..., m2Slots: ..., sataSlots: ..., pciSlots: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createMotherboardSpecsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.motherboard_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

