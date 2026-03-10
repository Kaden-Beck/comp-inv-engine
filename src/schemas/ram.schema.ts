import { z } from 'zod';
import type {
  CreateRamSpecsVariables,
  ListRamData,
  ListRamVariables,
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

export const createRamSpecsSchema: z.ZodType<CreateRamSpecsVariables> =
  z.object({
    productId: uuidSchema,
    memoryType: z.string().min(1),
    speedMHz: z.number().int().positive(),
    capacityGB: z.number().int().positive(),
    modules: z.number().int().positive(),
    casLatency: z.number().int().positive().nullable().optional(),
    voltage: z.number().positive().nullable().optional(),
  });

// ---- Query variable schemas ----

export const listRamSchema: z.ZodType<ListRamVariables> = z.object({
  limit: z.number().int().positive().nullable().optional(),
});

// ---- Result schemas ----

export const ramSchema: z.ZodType<ListRamData['rams'][number]> = z.object({
  id: uuidSchema,
  memoryType: z.string(),
  speedMHz: z.number().int(),
  capacityGB: z.number().int(),
  modules: z.number().int(),
  casLatency: z.number().int().nullable().optional(),
  voltage: z.number().nullable().optional(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreateRamSpecsInput = z.infer<typeof createRamSpecsSchema>;
export type ListRamInput = z.infer<typeof listRamSchema>;
export type RamResult = z.infer<typeof ramSchema>;
