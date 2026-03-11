import { z } from 'zod';
import type {
  CreateCpuSpecsVariables,
  ListCpUsData,
  ListCpUsVariables,
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

export const createCpuSpecsSchema: z.ZodType<CreateCpuSpecsVariables> =
  z.object({
    productId: uuidSchema,
    cores: z.number().int().positive(),
    threads: z.number().int().positive(),
    baseClockGHz: z.number().positive(),
    boostClockGHz: z.number().positive().nullable().optional(),
    tdp: z.number().int().positive(),
    socketType: z.string().min(1),
    integratedGraphics: z.boolean(),
    cacheMB: z.number().int().positive().nullable().optional(),
  });

// ---- Query variable schemas ----

export const listCpUsSchema: z.ZodType<ListCpUsVariables> = z.object({
  limit: z.number().int().positive().nullable().optional(),
});

// ---- Result schemas ----

export const cpuSchema: z.ZodType<ListCpUsData['cpus'][number]> = z.object({
  id: uuidSchema,
  cores: z.number().int(),
  threads: z.number().int(),
  baseClockGHz: z.number(),
  boostClockGHz: z.number().nullable().optional(),
  tdp: z.number().int(),
  socketType: z.string(),
  integratedGraphics: z.boolean(),
  cacheMB: z.number().int().nullable().optional(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreateCpuSpecsInput = z.infer<typeof createCpuSpecsSchema>;
export type ListCpUsInput = z.infer<typeof listCpUsSchema>;
export type CpuResult = z.infer<typeof cpuSchema>;
