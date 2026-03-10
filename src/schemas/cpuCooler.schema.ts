import { z } from 'zod';
import type {
  CreateCpuCoolerSpecsVariables,
  ListCpuCoolersData,
  ListCpuCoolersVariables,
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

export const createCpuCoolerSpecsSchema: z.ZodType<CreateCpuCoolerSpecsVariables> =
  z.object({
    productId: uuidSchema,
    coolerType: z.string().min(1),
    radiatorSizeMM: z.number().int().positive().nullable().optional(),
    fanSizeMM: z.number().int().positive().nullable().optional(),
    maxTDP: z.number().int().positive(),
    socketCompatibility: z.string().min(1),
    heightMM: z.number().int().positive(),
  });

// ---- Query variable schemas ----

export const listCpuCoolersSchema: z.ZodType<ListCpuCoolersVariables> =
  z.object({
    limit: z.number().int().positive().nullable().optional(),
  });

// ---- Result schemas ----

export const cpuCoolerSchema: z.ZodType<
  ListCpuCoolersData['cpuCoolers'][number]
> = z.object({
  id: uuidSchema,
  coolerType: z.string(),
  radiatorSizeMM: z.number().int().nullable().optional(),
  fanSizeMM: z.number().int().nullable().optional(),
  maxTDP: z.number().int(),
  socketCompatibility: z.string(),
  heightMM: z.number().int(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreateCpuCoolerSpecsInput = z.infer<
  typeof createCpuCoolerSpecsSchema
>;
export type ListCpuCoolersInput = z.infer<typeof listCpuCoolersSchema>;
export type CpuCoolerResult = z.infer<typeof cpuCoolerSchema>;
