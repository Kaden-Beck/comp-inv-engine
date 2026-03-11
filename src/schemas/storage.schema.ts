import { z } from 'zod';
import type {
  CreateStorageSpecsVariables,
  ListStorageData,
  ListStorageVariables,
} from '@dataconnect/generated';

const uuidSchema = z.uuidv4();

const productRefSchema = z.object({
  id: uuidSchema,
  name: z.string(),
  sku: z.string(),
  price: z.number().nullable().optional(),
  quantity: z.number().int(),
  manufacturer: z.object({ id: uuidSchema, name: z.string() }),
});

// ---- Mutation variable schemas ----

export const createStorageSpecsSchema: z.ZodType<CreateStorageSpecsVariables> =
  z.object({
    productId: uuidSchema,
    storageType: z.string().min(1),
    capacityGB: z.number().int().positive(),
    interface: z.string().min(1),
    formFactor: z.string().min(1),
    readSpeedMBps: z.number().int().positive().nullable().optional(),
    writeSpeedMBps: z.number().int().positive().nullable().optional(),
  });

// ---- Query variable schemas ----

export const listStorageSchema: z.ZodType<ListStorageVariables> = z.object({
  limit: z.number().int().positive().nullable().optional(),
});

// ---- Result schemas ----

export const storageSchema: z.ZodType<ListStorageData['storages'][number]> =
  z.object({
    id: uuidSchema,
    storageType: z.string(),
    capacityGB: z.number().int(),
    interface: z.string(),
    formFactor: z.string(),
    readSpeedMBps: z.number().int().nullable().optional(),
    writeSpeedMBps: z.number().int().nullable().optional(),
    product: productRefSchema,
  });

// ---- Inferred types ----
export type CreateStorageSpecsInput = z.infer<typeof createStorageSpecsSchema>;
export type ListStorageInput = z.infer<typeof listStorageSchema>;
export type StorageResult = z.infer<typeof storageSchema>;
