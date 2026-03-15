import { describe, it, expect } from 'vitest';
import {
  createManufacturerSchema,
  listManufacturersSchema,
  getManufacturerByIdSchema,
  getManufacturerByNameSchema,
  manufacturerSchema,
  manufacturerByIdSchema,
} from '../../src/schemas/manufacturer.schema.js';

const VALID_UUID = '00000000-0000-4000-8000-000000000000';

describe('createManufacturerSchema', () => {
  it('accepts valid name and description', () => {
    const input = { name: 'Intel', description: 'Semiconductor company' };
    expect(createManufacturerSchema.safeParse(input).success).toBe(true);
  });

  it('rejects empty name', () => {
    const input = { name: '', description: 'Semiconductor company' };
    expect(createManufacturerSchema.safeParse(input).success).toBe(false);
  });

  it('rejects empty description', () => {
    const input = { name: 'Intel', description: '' };
    expect(createManufacturerSchema.safeParse(input).success).toBe(false);
  });

  it('rejects missing name', () => {
    const input = { description: 'Semiconductor company' };
    expect(createManufacturerSchema.safeParse(input).success).toBe(false);
  });

  it('rejects missing description', () => {
    const input = { name: 'Intel' };
    expect(createManufacturerSchema.safeParse(input).success).toBe(false);
  });
});

describe('listManufacturersSchema', () => {
  it('accepts empty object (all optional)', () => {
    expect(listManufacturersSchema.safeParse({}).success).toBe(true);
  });

  it('accepts a valid positive integer limit', () => {
    expect(listManufacturersSchema.safeParse({ limit: 25 }).success).toBe(true);
  });

  it('accepts null limit', () => {
    expect(
      listManufacturersSchema.safeParse({ limit: null }).success
    ).toBe(true);
  });

  it('rejects zero limit', () => {
    expect(listManufacturersSchema.safeParse({ limit: 0 }).success).toBe(false);
  });

  it('rejects negative limit', () => {
    expect(listManufacturersSchema.safeParse({ limit: -5 }).success).toBe(
      false
    );
  });

  it('rejects float limit', () => {
    expect(listManufacturersSchema.safeParse({ limit: 2.5 }).success).toBe(
      false
    );
  });
});

describe('getManufacturerByIdSchema', () => {
  it('accepts a valid UUID', () => {
    expect(
      getManufacturerByIdSchema.safeParse({ id: VALID_UUID }).success
    ).toBe(true);
  });

  it('rejects a non-UUID string', () => {
    expect(
      getManufacturerByIdSchema.safeParse({ id: 'not-a-uuid' }).success
    ).toBe(false);
  });

  it('rejects missing id', () => {
    expect(getManufacturerByIdSchema.safeParse({}).success).toBe(false);
  });
});

describe('getManufacturerByNameSchema', () => {
  it('accepts a valid name', () => {
    expect(
      getManufacturerByNameSchema.safeParse({ name: 'Intel' }).success
    ).toBe(true);
  });

  it('rejects empty name', () => {
    expect(getManufacturerByNameSchema.safeParse({ name: '' }).success).toBe(
      false
    );
  });
});

describe('manufacturerSchema (list result)', () => {
  it('accepts a valid manufacturer object', () => {
    const mfr = {
      id: VALID_UUID,
      name: 'AMD',
      description: 'Advanced Micro Devices',
    };
    expect(manufacturerSchema.safeParse(mfr).success).toBe(true);
  });

  it('rejects invalid UUID for id', () => {
    const mfr = { id: 'bad', name: 'AMD', description: 'Advanced Micro Devices' };
    expect(manufacturerSchema.safeParse(mfr).success).toBe(false);
  });

  it('rejects missing fields', () => {
    const mfr = { id: VALID_UUID, name: 'AMD' };
    expect(manufacturerSchema.safeParse(mfr).success).toBe(false);
  });
});

describe('manufacturerByIdSchema', () => {
  it('accepts a valid manufacturer', () => {
    const mfr = {
      id: VALID_UUID,
      name: 'NVIDIA',
      description: 'GPU manufacturer',
    };
    expect(manufacturerByIdSchema.safeParse(mfr).success).toBe(true);
  });

  it('rejects missing description', () => {
    const mfr = { id: VALID_UUID, name: 'NVIDIA' };
    expect(manufacturerByIdSchema.safeParse(mfr).success).toBe(false);
  });
});
