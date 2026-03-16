import { z } from 'zod';
import { OrderDirection } from '@dataconnect/generated';
import type {
  CreateProductVariables,
  UpdateProductVariables,
  DeleteProductVariables,
  GetProductByIdData,
  GetProductBySkuData,
  GetProductsByManufacturerData,
  SearchProductsByNameData,
  GetLowStockProductsData,
  ListProductsData,
  ListProductsVariables,
  ListProductImagesData,
  GetProductImagesByProductIdData,
  GetProductBySkuVariables,
  GetProductsByManufacturerVariables,
  SearchProductsByNameVariables,
  GetLowStockProductsVariables,
  ListProductImagesVariables,
  GetProductImagesByProductIdVariables,
} from '@dataconnect/generated';

const uuidSchema = z.preprocess((val) => {
  if (typeof val === 'string' && /^[0-9a-fA-F]{32}$/.test(val)) {
    return `${val.slice(0, 8)}-${val.slice(8, 12)}-${val.slice(12, 16)}-${val.slice(16, 20)}-${val.slice(20)}`;
  }
  return val;
}, z.uuidv4());

export const createProductSchema: z.ZodType<CreateProductVariables> = z.object({
  name: z.string().min(1),
  sku: z.string().min(1),
  description: z.string().min(1),
  color: z.string().nullable().optional(),
  msrp: z.number().positive(),
  price: z.number().positive().nullable().optional(),
  quantity: z.number().int().min(0),
  manufacturerId: uuidSchema,
  categoryId: uuidSchema,
});

export const updateProductSchema: z.ZodType<UpdateProductVariables> = z.object({
  id: uuidSchema,
  name: z.string().min(1).nullable().optional(),
  description: z.string().min(1).nullable().optional(),
  color: z.string().nullable().optional(),
  price: z.number().positive().nullable().optional(),
  quantity: z.number().int().min(0).nullable().optional(),
  categoryId: uuidSchema.nullable().optional(),
});

export const productResultSchema: z.ZodType<
  NonNullable<GetProductByIdData['product']>
> = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  description: z.string(),
  color: z.string().nullable().optional(),
  msrp: z.number(),
  price: z.number().nullable().optional(),
  quantity: z.number().int(),
  manufacturer: z.object({
    id: uuidSchema,
    name: z.string(),
    description: z.string(),
  }),
  category: z.object({
    id: uuidSchema,
    name: z.string(),
    description: z.string(),
  }),
});

// ---- Mutation variable schemas ----

export const deleteProductSchema: z.ZodType<DeleteProductVariables> = z.object({
  id: uuidSchema,
});

// ---- Query variable schemas ----

export const getProductBySkuSchema: z.ZodType<GetProductBySkuVariables> =
  z.object({
    sku: z.string().min(1),
  });

export const getProductsByManufacturerSchema: z.ZodType<GetProductsByManufacturerVariables> =
  z.object({
    manufacturerId: uuidSchema,
    limit: z.number().int().positive().nullable().optional(),
  });

export const searchProductsByNameSchema: z.ZodType<SearchProductsByNameVariables> =
  z.object({
    nameQuery: z.string().nullable().optional(),
    limit: z.number().int().positive().nullable().optional(),
  });

export const getLowStockProductsSchema: z.ZodType<GetLowStockProductsVariables> =
  z.object({
    threshold: z.number().int().min(0),
    limit: z.number().int().positive().nullable().optional(),
  });

const orderDirectionSchema = z.nativeEnum(OrderDirection);

export const listProductsSchema: z.ZodType<ListProductsVariables> = z.object({
  orderByName: orderDirectionSchema.nullable().optional(),
  orderByQuantity: orderDirectionSchema.nullable().optional(),
  orderByPrice: orderDirectionSchema.nullable().optional(),
  limit: z.number().int().positive().nullable().optional(),
});

export const listProductImagesSchema: z.ZodType<ListProductImagesVariables> =
  z.object({
    limit: z.number().int().positive().nullable().optional(),
  });

export const getProductImagesByProductIdSchema: z.ZodType<GetProductImagesByProductIdVariables> =
  z.object({
    productId: uuidSchema,
  });

// ---- Result schemas ----

const manufacturerRefSchema = z.object({
  id: uuidSchema,
  name: z.string(),
});

const categoryRefSchema = z.object({
  id: uuidSchema,
  name: z.string(),
});

export const productListItemSchema: z.ZodType<
  ListProductsData['products'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  description: z.string(),
  color: z.string().nullable().optional(),
  msrp: z.number(),
  price: z.number().nullable().optional(),
  quantity: z.number().int(),
  manufacturer: manufacturerRefSchema,
  category: categoryRefSchema,
});

export const productBySkuSchema: z.ZodType<
  GetProductBySkuData['products'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  description: z.string(),
  color: z.string().nullable().optional(),
  msrp: z.number(),
  price: z.number().nullable().optional(),
  quantity: z.number().int(),
  manufacturer: manufacturerRefSchema,
  category: categoryRefSchema,
});

export const productByManufacturerSchema: z.ZodType<
  GetProductsByManufacturerData['products'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  price: z.number().nullable().optional(),
  quantity: z.number().int(),
  category: categoryRefSchema,
});

export const searchProductResultSchema: z.ZodType<
  SearchProductsByNameData['products'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  description: z.string(),
  price: z.number().nullable().optional(),
  quantity: z.number().int(),
  manufacturer: manufacturerRefSchema,
  category: categoryRefSchema,
});

export const lowStockProductSchema: z.ZodType<
  GetLowStockProductsData['products'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  quantity: z.number().int(),
  manufacturer: z.object({
    id: uuidSchema,
    name: z.string(),
    description: z.string(),
  }),
  category: z.object({
    id: uuidSchema,
    name: z.string(),
  }),
});

export const productImageSchema: z.ZodType<
  ListProductImagesData['productImages'][number]
> = z.object({
  id: uuidSchema,
  url: z.string().url(),
  altText: z.string().nullable().optional(),
  product: z.object({
    id: uuidSchema,
    name: z.string(),
    sku: z.string(),
  }),
});

export const productImageByProductSchema: z.ZodType<
  GetProductImagesByProductIdData['productImages'][number]
> = z.object({
  id: uuidSchema,
  url: z.string().url(),
  altText: z.string().nullable().optional(),
});

// ---- Inferred types ----
export type ProductResult = z.infer<typeof productResultSchema>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type DeleteProductInput = z.infer<typeof deleteProductSchema>;
export type GetProductBySkuInput = z.infer<typeof getProductBySkuSchema>;
export type GetProductsByManufacturerInput = z.infer<
  typeof getProductsByManufacturerSchema
>;
export type SearchProductsByNameInput = z.infer<
  typeof searchProductsByNameSchema
>;
export type GetLowStockProductsInput = z.infer<
  typeof getLowStockProductsSchema
>;
export type ListProductsInput = z.infer<typeof listProductsSchema>;
export type ListProductImagesInput = z.infer<typeof listProductImagesSchema>;
export type GetProductImagesByProductIdInput = z.infer<
  typeof getProductImagesByProductIdSchema
>;
