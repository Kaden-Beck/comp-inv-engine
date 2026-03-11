import { z } from 'zod';
import { OrderDirection } from '@dataconnect/generated';
import type {
  CreateManufacturerVariables,
  ListManufacturersData,
  ListManufacturersVariables,
  GetManufacturerByIdData,
  GetManufacturerByIdVariables,
  GetManufacturerByNameData,
  GetManufacturerByNameVariables,
} from '@dataconnect/generated';

const uuidSchema = z.uuidv4();
const orderDirectionSchema = z.nativeEnum(OrderDirection);

// ---- Mutation variable schemas ----

export const createManufacturerSchema: z.ZodType<CreateManufacturerVariables> =
  z.object({
    name: z.string().min(1),
    description: z.string().min(1),
  });

// ---- Query variable schemas ----

export const listManufacturersSchema: z.ZodType<ListManufacturersVariables> =
  z.object({
    orderByName: orderDirectionSchema.nullable().optional(),
    limit: z.number().int().positive().nullable().optional(),
  });

export const getManufacturerByIdSchema: z.ZodType<GetManufacturerByIdVariables> =
  z.object({
    id: uuidSchema,
  });

export const getManufacturerByNameSchema: z.ZodType<GetManufacturerByNameVariables> =
  z.object({
    name: z.string().min(1),
  });

// ---- Result schemas ----

export const manufacturerSchema: z.ZodType<
  ListManufacturersData['manufacturers'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
});

export const manufacturerByIdSchema: z.ZodType<
  NonNullable<GetManufacturerByIdData['manufacturer']>
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
});

export const manufacturerByNameSchema: z.ZodType<
  GetManufacturerByNameData['manufacturers'][number]
> = z.object({
  id: uuidSchema,
  name: z.string(),
  description: z.string(),
});

// ---- Inferred types ----
export type CreateManufacturerInput = z.infer<typeof createManufacturerSchema>;
export type ListManufacturersInput = z.infer<typeof listManufacturersSchema>;
export type GetManufacturerByIdInput = z.infer<
  typeof getManufacturerByIdSchema
>;
export type GetManufacturerByNameInput = z.infer<
  typeof getManufacturerByNameSchema
>;
export type ManufacturerResult = z.infer<typeof manufacturerSchema>;
