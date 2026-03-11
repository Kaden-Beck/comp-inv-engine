import { z } from 'zod';
import type {
  CreatePsuSpecsVariables,
  ListPsUsData,
  ListPsUsVariables,
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

export const createPsuSpecsSchema: z.ZodType<CreatePsuSpecsVariables> =
  z.object({
    productId: uuidSchema,
    wattage: z.number().int().positive(),
    efficiencyRating: z.string().min(1),
    modular: z.string().min(1),
    formFactor: z.string().min(1),
  });

// ---- Query variable schemas ----

export const listPsUsSchema: z.ZodType<ListPsUsVariables> = z.object({
  limit: z.number().int().positive().nullable().optional(),
});

// ---- Result schemas ----

export const psuSchema: z.ZodType<ListPsUsData['psus'][number]> = z.object({
  id: uuidSchema,
  wattage: z.number().int(),
  efficiencyRating: z.string(),
  modular: z.string(),
  formFactor: z.string(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreatePsuSpecsInput = z.infer<typeof createPsuSpecsSchema>;
export type ListPsUsInput = z.infer<typeof listPsUsSchema>;
export type PsuResult = z.infer<typeof psuSchema>;
