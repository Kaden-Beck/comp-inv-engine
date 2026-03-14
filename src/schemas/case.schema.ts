import { z } from 'zod';
import type {
  CreateCaseSpecsVariables,
  ListCasesData,
  ListCasesVariables,
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

export const createCaseSpecsSchema: z.ZodType<CreateCaseSpecsVariables> =
  z.object({
    productId: uuidSchema,
    formFactor: z.string().min(1),
    moboSupport: z.string().min(1),
    maxGPULengthMM: z.number().int().positive().nullable().optional(),
    maxCPUCoolerHeightMM: z.number().int().positive().nullable().optional(),
    maxPSULengthMM: z.number().int().positive().nullable().optional(),
    driveSlotsTwoHalf: z.number().int().min(0).nullable().optional(),
    driveSlotsThreeHalf: z.number().int().min(0).nullable().optional(),
    fanSlots: z.number().int().min(0).nullable().optional(),
    radiatorSupport: z.string().nullable().optional(),
  });

// ---- Query variable schemas ----

export const listCasesSchema: z.ZodType<ListCasesVariables> = z.object({
  limit: z.number().int().positive().nullable().optional(),
});

// ---- Result schemas ----

export const caseSchema: z.ZodType<ListCasesData['cases'][number]> = z.object({
  id: uuidSchema,
  formFactor: z.string(),
  moboSupport: z.string(),
  maxGPULengthMM: z.number().int().nullable().optional(),
  maxCPUCoolerHeightMM: z.number().int().nullable().optional(),
  maxPSULengthMM: z.number().int().nullable().optional(),
  driveSlotsTwoHalf: z.number().int().nullable().optional(),
  driveSlotsThreeHalf: z.number().int().nullable().optional(),
  fanSlots: z.number().int().nullable().optional(),
  radiatorSupport: z.string().nullable().optional(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreateCaseSpecsInput = z.infer<typeof createCaseSpecsSchema>;
export type ListCasesInput = z.infer<typeof listCasesSchema>;
export type CaseResult = z.infer<typeof caseSchema>;
