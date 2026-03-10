# Data Connect API Reference

To normalize the names of some of the functions from Data Connect I have exported the mutations and queries in the dcAPI.ts file (in this directory).

## Examples

Add a new CPU with specs:

```typescript
// Create a new product
import { addProduct } from "/lib/dataConnect/dcAPI.js"

const { data } = await addProduct({
    name: ...,
    sku: ...,
    description: ...,
    color: ..., // optional
    msrp: ...,
    price: ..., // optional
    quantity: ...,
    manufacturerId: ...,
    categoryId: ...,
})

// The returned data result has a productID Property to pass when adding specs
mutation UpdateCPUSpecs(
  $productId: data.product_insert;
  $cores: ...
  $threads: ...
  $baseClockGHz: ...
  $boostClockGHz: ...
  $tdp: ...
  $socketType: ...
  $integratedGraphics: ...
  $cacheMB: ...
) {
  cpu_update(
    key: { productId: $productId }
    data: {
      cores: $cores
      threads: $threads
      baseClockGHz: $baseClockGHz
      boostClockGHz: $boostClockGHz
      tdp: $tdp
      socketType: $socketType
      integratedGraphics: $integratedGraphics
      cacheMB: $cacheMB
    }
  )
}
```
