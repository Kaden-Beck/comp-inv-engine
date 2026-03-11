import { z } from 'zod';
import type {
  CreateMotherboardSpecsVariables,
  ListMotherboardsData,
  ListMotherboardsVariables,
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

export const createMotherboardSpecsSchema: z.ZodType<CreateMotherboardSpecsVariables> =
  z.object({
    productId: uuidSchema,
    socketType: z.string().min(1),
    chipset: z.string().min(1),
    formFactor: z.string().min(1),
    memoryType: z.string().min(1),
    memorySlots: z.number().int().positive(),
    maxMemoryGB: z.number().int().positive(),
    m2Slots: z.number().int().min(0).nullable().optional(),
    sataSlots: z.number().int().min(0).nullable().optional(),
    pciSlots: z.number().int().min(0).nullable().optional(),
  });

// ---- Query variable schemas ----

export const listMotherboardsSchema: z.ZodType<ListMotherboardsVariables> =
  z.object({
    limit: z.number().int().positive().nullable().optional(),
  });

// ---- Result schemas ----

export const motherboardSchema: z.ZodType<
  ListMotherboardsData['motherboards'][number]
> = z.object({
  id: uuidSchema,
  socketType: z.string(),
  chipset: z.string(),
  formFactor: z.string(),
  memoryType: z.string(),
  memorySlots: z.number().int(),
  maxMemoryGB: z.number().int(),
  m2Slots: z.number().int().nullable().optional(),
  sataSlots: z.number().int().nullable().optional(),
  pciSlots: z.number().int().nullable().optional(),
  product: productRefSchema,
});

// ---- Inferred types ----
export type CreateMotherboardSpecsInput = z.infer<
  typeof createMotherboardSpecsSchema
>;
export type ListMotherboardsInput = z.infer<typeof listMotherboardsSchema>;
export type MotherboardResult = z.infer<typeof motherboardSchema>;
