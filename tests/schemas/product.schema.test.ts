import { describe, it, expect } from 'vitest';
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
  getProductBySkuSchema,
  getProductsByManufacturerSchema,
  searchProductsByNameSchema,
  getLowStockProductsSchema,
  listProductsSchema,
  productResultSchema,
  productListItemSchema,
  productImageSchema,
} from '../../src/schemas/product.schema.js';

const VALID_UUID = '00000000-0000-4000-8000-000000000000';

const VALID_MANUFACTURER_REF = { id: VALID_UUID, name: 'Intel' };
const VALID_CATEGORY_REF = { id: VALID_UUID, name: 'CPUs' };

describe('createProductSchema', () => {
  const validProduct = {
    name: 'Core i9-14900K',
    sku: 'INTEL-I9-14900K',
    description: 'High-end desktop CPU',
    msrp: 589.99,
    quantity: 50,
    manufacturerId: VALID_UUID,
    categoryId: VALID_UUID,
  };

  it('accepts a valid product', () => {
    expect(createProductSchema.safeParse(validProduct).success).toBe(true);
  });

  it('accepts optional color and price', () => {
    const input = { ...validProduct, color: 'Silver', price: 549.99 };
    expect(createProductSchema.safeParse(input).success).toBe(true);
  });

  it('accepts null for optional color and price', () => {
    const input = { ...validProduct, color: null, price: null };
    expect(createProductSchema.safeParse(input).success).toBe(true);
  });

  it('rejects empty name', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, name: '' }).success
    ).toBe(false);
  });

  it('rejects empty sku', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, sku: '' }).success
    ).toBe(false);
  });

  it('rejects non-positive msrp', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, msrp: 0 }).success
    ).toBe(false);
  });

  it('rejects negative msrp', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, msrp: -10 }).success
    ).toBe(false);
  });

  it('rejects negative quantity', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, quantity: -1 }).success
    ).toBe(false);
  });

  it('accepts zero quantity', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, quantity: 0 }).success
    ).toBe(true);
  });

  it('rejects float quantity', () => {
    expect(
      createProductSchema.safeParse({ ...validProduct, quantity: 1.5 }).success
    ).toBe(false);
  });

  it('rejects invalid manufacturerId', () => {
    expect(
      createProductSchema.safeParse({
        ...validProduct,
        manufacturerId: 'bad-id',
      }).success
    ).toBe(false);
  });

  it('rejects invalid categoryId', () => {
    expect(
      createProductSchema.safeParse({
        ...validProduct,
        categoryId: 'bad-id',
      }).success
    ).toBe(false);
  });
});

describe('updateProductSchema', () => {
  it('accepts only id (all others optional)', () => {
    expect(
      updateProductSchema.safeParse({ id: VALID_UUID }).success
    ).toBe(true);
  });

  it('accepts partial update with name and price', () => {
    const input = { id: VALID_UUID, name: 'Updated Name', price: 499.99 };
    expect(updateProductSchema.safeParse(input).success).toBe(true);
  });

  it('accepts null price (clearing the price)', () => {
    const input = { id: VALID_UUID, price: null };
    expect(updateProductSchema.safeParse(input).success).toBe(true);
  });

  it('rejects missing id', () => {
    expect(updateProductSchema.safeParse({ name: 'New Name' }).success).toBe(
      false
    );
  });

  it('rejects invalid id', () => {
    expect(
      updateProductSchema.safeParse({ id: 'not-a-uuid' }).success
    ).toBe(false);
  });

  it('rejects empty name string', () => {
    expect(
      updateProductSchema.safeParse({ id: VALID_UUID, name: '' }).success
    ).toBe(false);
  });

  it('rejects non-positive price', () => {
    expect(
      updateProductSchema.safeParse({ id: VALID_UUID, price: 0 }).success
    ).toBe(false);
  });

  it('rejects negative quantity', () => {
    expect(
      updateProductSchema.safeParse({ id: VALID_UUID, quantity: -1 }).success
    ).toBe(false);
  });
});

describe('deleteProductSchema', () => {
  it('accepts a valid UUID', () => {
    expect(deleteProductSchema.safeParse({ id: VALID_UUID }).success).toBe(
      true
    );
  });

  it('rejects a non-UUID', () => {
    expect(deleteProductSchema.safeParse({ id: 'bad' }).success).toBe(false);
  });
});

describe('getProductBySkuSchema', () => {
  it('accepts a non-empty SKU', () => {
    expect(
      getProductBySkuSchema.safeParse({ sku: 'INTEL-I9-14900K' }).success
    ).toBe(true);
  });

  it('rejects an empty SKU', () => {
    expect(getProductBySkuSchema.safeParse({ sku: '' }).success).toBe(false);
  });
});

describe('getProductsByManufacturerSchema', () => {
  it('accepts valid manufacturerId', () => {
    expect(
      getProductsByManufacturerSchema.safeParse({ manufacturerId: VALID_UUID })
        .success
    ).toBe(true);
  });

  it('accepts manufacturerId with optional limit', () => {
    expect(
      getProductsByManufacturerSchema.safeParse({
        manufacturerId: VALID_UUID,
        limit: 10,
      }).success
    ).toBe(true);
  });

  it('rejects invalid manufacturerId', () => {
    expect(
      getProductsByManufacturerSchema.safeParse({ manufacturerId: 'bad' })
        .success
    ).toBe(false);
  });
});

describe('searchProductsByNameSchema', () => {
  it('accepts empty object (all optional)', () => {
    expect(searchProductsByNameSchema.safeParse({}).success).toBe(true);
  });

  it('accepts a search query', () => {
    expect(
      searchProductsByNameSchema.safeParse({ nameQuery: 'Core i9' }).success
    ).toBe(true);
  });

  it('accepts null nameQuery', () => {
    expect(
      searchProductsByNameSchema.safeParse({ nameQuery: null }).success
    ).toBe(true);
  });
});

describe('getLowStockProductsSchema', () => {
  it('accepts threshold of 0', () => {
    expect(
      getLowStockProductsSchema.safeParse({ threshold: 0 }).success
    ).toBe(true);
  });

  it('accepts a positive threshold', () => {
    expect(
      getLowStockProductsSchema.safeParse({ threshold: 10 }).success
    ).toBe(true);
  });

  it('rejects negative threshold', () => {
    expect(
      getLowStockProductsSchema.safeParse({ threshold: -1 }).success
    ).toBe(false);
  });

  it('rejects float threshold', () => {
    expect(
      getLowStockProductsSchema.safeParse({ threshold: 1.5 }).success
    ).toBe(false);
  });
});

describe('listProductsSchema', () => {
  it('accepts empty object', () => {
    expect(listProductsSchema.safeParse({}).success).toBe(true);
  });

  it('accepts a positive limit', () => {
    expect(listProductsSchema.safeParse({ limit: 50 }).success).toBe(true);
  });

  it('rejects zero limit', () => {
    expect(listProductsSchema.safeParse({ limit: 0 }).success).toBe(false);
  });
});

describe('productResultSchema', () => {
  const validResult = {
    id: VALID_UUID,
    name: 'Core i9-14900K',
    sku: 'INTEL-I9-14900K',
    description: 'High-end desktop CPU',
    msrp: 589.99,
    quantity: 50,
    manufacturer: {
      id: VALID_UUID,
      name: 'Intel',
      description: 'Semiconductor',
    },
    category: {
      id: VALID_UUID,
      name: 'CPUs',
      description: 'Processors',
    },
  };

  it('accepts a valid full product result', () => {
    expect(productResultSchema.safeParse(validResult).success).toBe(true);
  });

  it('accepts optional color and price', () => {
    const input = { ...validResult, color: 'Silver', price: 549.99 };
    expect(productResultSchema.safeParse(input).success).toBe(true);
  });

  it('rejects missing manufacturer', () => {
    const { manufacturer, ...rest } = validResult;
    expect(productResultSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects missing category', () => {
    const { category, ...rest } = validResult;
    expect(productResultSchema.safeParse(rest).success).toBe(false);
  });
});

describe('productListItemSchema', () => {
  const validItem = {
    id: VALID_UUID,
    name: 'Core i9-14900K',
    sku: 'INTEL-I9-14900K',
    description: 'High-end desktop CPU',
    msrp: 589.99,
    quantity: 50,
    manufacturer: VALID_MANUFACTURER_REF,
    category: VALID_CATEGORY_REF,
  };

  it('accepts a valid product list item', () => {
    expect(productListItemSchema.safeParse(validItem).success).toBe(true);
  });

  it('rejects missing sku', () => {
    const { sku, ...rest } = validItem;
    expect(productListItemSchema.safeParse(rest).success).toBe(false);
  });
});

describe('productImageSchema', () => {
  const validImage = {
    id: VALID_UUID,
    url: 'https://example.com/image.png',
    product: { id: VALID_UUID, name: 'Core i9', sku: 'INTEL-I9' },
  };

  it('accepts a valid product image', () => {
    expect(productImageSchema.safeParse(validImage).success).toBe(true);
  });

  it('accepts optional altText', () => {
    const input = { ...validImage, altText: 'Product photo' };
    expect(productImageSchema.safeParse(input).success).toBe(true);
  });

  it('rejects non-URL string for url', () => {
    const input = { ...validImage, url: 'not-a-url' };
    expect(productImageSchema.safeParse(input).success).toBe(false);
  });

  it('rejects invalid product id', () => {
    const input = {
      ...validImage,
      product: { id: 'bad', name: 'Core i9', sku: 'INTEL-I9' },
    };
    expect(productImageSchema.safeParse(input).success).toBe(false);
  });
});
