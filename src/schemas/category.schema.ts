import { z } from 'zod';
import { OrderDirection } from '@dataconnect/generated';
import type {
  CreateCategoryVariables,
  ListCategoriesData,
  ListCategoriesVariables,
  GetCategoryByIdData,
  GetCategoryByIdVariables,
  GetCategoryByNameData,
  GetCategoryByNameVariables,
  GetChildCategoriesData,
  GetChildCategoriesVariables,
  GetParentCategoryData,
  GetParentCategoryVariables,
} from '@dataconnect/generated';

const uuidSchema = z.uuidv4();
const orderDirectionSchema = z.nativeEnum(OrderDirection);

// ---- Mutation variable schemas ----

export const createCategorySchema: z.ZodType<CreateCategoryVariables> =
  z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    isParent: z.boolean(),
    parentId: uuidSchema.nullable().optional(),
  });

// ---- Query variable schemas ----

export const listCategoriesSchema: z.ZodType<ListCategoriesVariables> =
  z.object({
    orderByName: orderDirectionSchema.nullable().optional(),
    limit: z.number().int().positive().nullable().optional(),
  });

export const getCategoryByIdSchema: z.ZodType<GetCategoryByIdVariables> =
  z.object({
    id: uuidSchema,
  });

export const getCategoryByNameSchema: z.ZodType<GetCategoryByNameVariables> =
  z.object({
    name: z.string().min(1),
  });

export const getChildCategoriesSchema: z.ZodType<GetChildCategoriesVariables> =
  z.object({
    parentId: uuidSchema,
    limit: z.number().int().positive().nullable().optional(),
  });

export const getParentCategorySchema: z.ZodType<GetParentCategoryVariables> =
  z.object({
    childId: uuidSchema,
  });

// ---- Result schemas ----

export const categoryListItemSchema: z.ZodType<
  ListCategoriesData['categories'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
  isParent: z.boolean(),
});

export const categoryByIdSchema: z.ZodType<
  NonNullable<GetCategoryByIdData['category']>
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
  isParent: z.boolean(),
  parentId: uuidSchema.nullable().optional(),
  parent: z.object({ id: uuidSchema, name: z.string() }).optional(),
});

export const categoryByNameSchema: z.ZodType<
  GetCategoryByNameData['categories'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
  isParent: z.boolean(),
  parent: z.object({ id: uuidSchema, name: z.string() }).optional(),
});

export const childCategorySchema: z.ZodType<
  GetChildCategoriesData['categories'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
  isParent: z.boolean(),
});

export const parentCategorySchema: z.ZodType<
  NonNullable<GetParentCategoryData['category']>
> = z.object({
  id: uuidSchema,
  name: z.string(),
  parent: z
    .object({
      id: uuidSchema,
      name: z.string(),
      description: z.string(),
      parent: z.object({ id: uuidSchema, name: z.string() }).optional(),
    })
    .optional(),
});

// ---- Inferred types ----
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type ListCategoriesInput = z.infer<typeof listCategoriesSchema>;
export type GetCategoryByIdInput = z.infer<typeof getCategoryByIdSchema>;
export type GetCategoryByNameInput = z.infer<typeof getCategoryByNameSchema>;
export type GetChildCategoriesInput = z.infer<typeof getChildCategoriesSchema>;
export type GetParentCategoryInput = z.infer<typeof getParentCategorySchema>;
export type CategoryListItem = z.infer<typeof categoryListItemSchema>;
export type CategoryById = z.infer<typeof categoryByIdSchema>;
