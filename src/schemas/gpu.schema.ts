import { z } from 'zod';
import type {
  CreateGpuSpecsVariables,
  ListGpUsData,
  ListGpUsVariables,
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

export const createGpuSpecsSchema: z.ZodType<CreateGpuSpecsVariables> =
  z.object({
    productId: uuidSchema,
    chipset: z.string().min(1),
    vramGB: z.number().int().positive(),
    vramType: z.string().min(1),
    coreCount: z.number().int().positive().nullable().optional(),
    baseClockMHz: z.number().int().positive().nullable().optional(),
    boostClockMHz: z.number().int().positive().nullable().optional(),
    tdp: z.number().int().positive(),
    lengthMM: z.number().int().positive().nullable().optional(),
    powerConnectors: z.string().nullable().optional(),
  });

// ---- Query variable schemas ----

export const listGpUsSchema: z.ZodType<ListGpUsVariables> = z.object({
  limit: z.number().int().positive().nullable().optional(),
});

// ---- Result schemas ----

export const gpuSchema: z.ZodType<ListGpUsData['gpus'][number]> = z.object({
  id: uuidSchema,
  chipset: z.string(),
  vramGB: z.number().int(),
  vramType: z.string(),
  coreCount: z.number().int().nullable().optional(),
  tdp: z.number().int(),
  lengthMM: z.number().int().nullable().optional(),
  powerConnectors: z.string().nullable().optional(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreateGpuSpecsInput = z.infer<typeof createGpuSpecsSchema>;
export type ListGpUsInput = z.infer<typeof listGpUsSchema>;
export type GpuResult = z.infer<typeof gpuSchema>;
