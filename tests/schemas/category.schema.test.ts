import { describe, it, expect } from 'vitest';
import {
  createCategorySchema,
  listCategoriesSchema,
  getCategoryByIdSchema,
  getCategoryByNameSchema,
  getChildCategoriesSchema,
  categoryListItemSchema,
  categoryByIdSchema,
} from '../../src/schemas/category.schema.js';

const VALID_UUID = '00000000-0000-4000-8000-000000000000';

describe('createCategorySchema', () => {
  it('accepts valid input without a parent', () => {
    const input = { name: 'CPUs', description: 'Processors', isParent: false };
    expect(createCategorySchema.safeParse(input).success).toBe(true);
  });

  it('accepts valid input with a parentId', () => {
    const input = {
      name: 'Intel CPUs',
      description: 'Intel processors',
      isParent: false,
      parentId: VALID_UUID,
    };
    expect(createCategorySchema.safeParse(input).success).toBe(true);
  });

  it('accepts parentId as null', () => {
    const input = {
      name: 'CPUs',
      description: 'Processors',
      isParent: true,
      parentId: null,
    };
    expect(createCategorySchema.safeParse(input).success).toBe(true);
  });

  it('rejects empty name', () => {
    const input = { name: '', description: 'Processors', isParent: false };
    expect(createCategorySchema.safeParse(input).success).toBe(false);
  });

  it('rejects empty description', () => {
    const input = { name: 'CPUs', description: '', isParent: false };
    expect(createCategorySchema.safeParse(input).success).toBe(false);
  });

  it('rejects invalid parentId', () => {
    const input = {
      name: 'CPUs',
      description: 'Processors',
      isParent: false,
      parentId: 'not-a-uuid',
    };
    expect(createCategorySchema.safeParse(input).success).toBe(false);
  });

  it('rejects missing required fields', () => {
    expect(createCategorySchema.safeParse({ name: 'CPUs' }).success).toBe(
      false
    );
  });
});

describe('listCategoriesSchema', () => {
  it('accepts empty object (all optional)', () => {
    expect(listCategoriesSchema.safeParse({}).success).toBe(true);
  });

  it('accepts valid limit', () => {
    expect(listCategoriesSchema.safeParse({ limit: 10 }).success).toBe(true);
  });

  it('rejects non-positive limit', () => {
    expect(listCategoriesSchema.safeParse({ limit: 0 }).success).toBe(false);
  });

  it('rejects negative limit', () => {
    expect(listCategoriesSchema.safeParse({ limit: -1 }).success).toBe(false);
  });

  it('rejects non-integer limit', () => {
    expect(listCategoriesSchema.safeParse({ limit: 1.5 }).success).toBe(false);
  });
});

describe('getCategoryByIdSchema', () => {
  it('accepts a valid UUID', () => {
    expect(getCategoryByIdSchema.safeParse({ id: VALID_UUID }).success).toBe(
      true
    );
  });

  it('rejects a non-UUID string', () => {
    expect(getCategoryByIdSchema.safeParse({ id: 'not-a-uuid' }).success).toBe(
      false
    );
  });

  it('rejects missing id', () => {
    expect(getCategoryByIdSchema.safeParse({}).success).toBe(false);
  });
});

describe('getCategoryByNameSchema', () => {
  it('accepts a valid name', () => {
    expect(
      getCategoryByNameSchema.safeParse({ name: 'CPUs' }).success
    ).toBe(true);
  });

  it('rejects empty name', () => {
    expect(getCategoryByNameSchema.safeParse({ name: '' }).success).toBe(false);
  });
});

describe('getChildCategoriesSchema', () => {
  it('accepts valid parentId', () => {
    expect(
      getChildCategoriesSchema.safeParse({ parentId: VALID_UUID }).success
    ).toBe(true);
  });

  it('accepts valid parentId with limit', () => {
    expect(
      getChildCategoriesSchema.safeParse({ parentId: VALID_UUID, limit: 5 })
        .success
    ).toBe(true);
  });

  it('rejects invalid parentId', () => {
    expect(
      getChildCategoriesSchema.safeParse({ parentId: 'bad' }).success
    ).toBe(false);
  });
});

describe('categoryListItemSchema', () => {
  it('accepts a valid category list item', () => {
    const item = {
      id: VALID_UUID,
      name: 'Storage',
      description: 'Storage devices',
      isParent: true,
    };
    expect(categoryListItemSchema.safeParse(item).success).toBe(true);
  });

  it('rejects missing id', () => {
    const item = { name: 'Storage', description: 'desc', isParent: true };
    expect(categoryListItemSchema.safeParse(item).success).toBe(false);
  });

  it('rejects invalid UUID for id', () => {
    const item = {
      id: 'not-a-uuid',
      name: 'Storage',
      description: 'desc',
      isParent: true,
    };
    expect(categoryListItemSchema.safeParse(item).success).toBe(false);
  });
});

describe('categoryByIdSchema', () => {
  it('accepts valid category without parent', () => {
    const item = {
      id: VALID_UUID,
      name: 'CPUs',
      description: 'Processors',
      isParent: false,
    };
    expect(categoryByIdSchema.safeParse(item).success).toBe(true);
  });

  it('accepts valid category with parent object', () => {
    const item = {
      id: VALID_UUID,
      name: 'Intel CPUs',
      description: 'Intel processors',
      isParent: false,
      parentId: VALID_UUID,
      parent: { id: VALID_UUID, name: 'CPUs' },
    };
    expect(categoryByIdSchema.safeParse(item).success).toBe(true);
  });

  it('rejects invalid parent id format', () => {
    const item = {
      id: VALID_UUID,
      name: 'Intel CPUs',
      description: 'Intel processors',
      isParent: false,
      parent: { id: 'bad-uuid', name: 'CPUs' },
    };
    expect(categoryByIdSchema.safeParse(item).success).toBe(false);
  });
});
