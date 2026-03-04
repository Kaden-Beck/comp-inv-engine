import * as z from 'zod';

const Category = z.enum([
  'Display',
  'Peripheral',
  'Motherboard',
  'CPU',
  'GPU',
  'Memory',
  'Storage',
  'Cooling',
  'PowerSupply',
]);

const Manufacturer: object = z.object({
  name: z.string(),
  categoriesManufactured: z.array(Category),
  logoURL: z.url(),
});

const Hardware: object = z.object({
  id: z.string(),
  name: z.string(),
  category: Category,
  MSRP: z.number(),
  price: z.number().optional(),
  manufacturer: Manufacturer,
  imageURL: z.string(),
});

console.log(Hardware);
