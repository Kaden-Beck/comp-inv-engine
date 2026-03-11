# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateProduct, useUpdateProduct, useDeleteProduct, useCreateCpuSpecs, useCreateGpuSpecs, useCreateCategory, useCreateManufacturer, useCreateStorageSpecs, useCreatePsuSpecs, useCreateCpuCoolerSpecs } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateProduct(createProductVars);

const { data, isPending, isSuccess, isError, error } = useUpdateProduct(updateProductVars);

const { data, isPending, isSuccess, isError, error } = useDeleteProduct(deleteProductVars);

const { data, isPending, isSuccess, isError, error } = useCreateCpuSpecs(createCpuSpecsVars);

const { data, isPending, isSuccess, isError, error } = useCreateGpuSpecs(createGpuSpecsVars);

const { data, isPending, isSuccess, isError, error } = useCreateCategory(createCategoryVars);

const { data, isPending, isSuccess, isError, error } = useCreateManufacturer(createManufacturerVars);

const { data, isPending, isSuccess, isError, error } = useCreateStorageSpecs(createStorageSpecsVars);

const { data, isPending, isSuccess, isError, error } = useCreatePsuSpecs(createPsuSpecsVars);

const { data, isPending, isSuccess, isError, error } = useCreateCpuCoolerSpecs(createCpuCoolerSpecsVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createProduct, updateProduct, deleteProduct, createCpuSpecs, createGpuSpecs, createCategory, createManufacturer, createStorageSpecs, createPsuSpecs, createCpuCoolerSpecs } from '@dataconnect/generated';


// Operation CreateProduct:  For variables, look at type CreateProductVars in ../index.d.ts
const { data } = await CreateProduct(dataConnect, createProductVars);

// Operation UpdateProduct:  For variables, look at type UpdateProductVars in ../index.d.ts
const { data } = await UpdateProduct(dataConnect, updateProductVars);

// Operation DeleteProduct:  For variables, look at type DeleteProductVars in ../index.d.ts
const { data } = await DeleteProduct(dataConnect, deleteProductVars);

// Operation CreateCPUSpecs:  For variables, look at type CreateCpuSpecsVars in ../index.d.ts
const { data } = await CreateCpuSpecs(dataConnect, createCpuSpecsVars);

// Operation CreateGPUSpecs:  For variables, look at type CreateGpuSpecsVars in ../index.d.ts
const { data } = await CreateGpuSpecs(dataConnect, createGpuSpecsVars);

// Operation CreateCategory:  For variables, look at type CreateCategoryVars in ../index.d.ts
const { data } = await CreateCategory(dataConnect, createCategoryVars);

// Operation CreateManufacturer:  For variables, look at type CreateManufacturerVars in ../index.d.ts
const { data } = await CreateManufacturer(dataConnect, createManufacturerVars);

// Operation CreateStorageSpecs:  For variables, look at type CreateStorageSpecsVars in ../index.d.ts
const { data } = await CreateStorageSpecs(dataConnect, createStorageSpecsVars);

// Operation CreatePSUSpecs:  For variables, look at type CreatePsuSpecsVars in ../index.d.ts
const { data } = await CreatePsuSpecs(dataConnect, createPsuSpecsVars);

// Operation CreateCPUCoolerSpecs:  For variables, look at type CreateCpuCoolerSpecsVars in ../index.d.ts
const { data } = await CreateCpuCoolerSpecs(dataConnect, createCpuCoolerSpecsVars);


```