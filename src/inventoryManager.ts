import { Category } from './schema/Category.js';
import { Manufacturer } from './schema/Manufacturer.js';

export interface InventoryManager {
  categoryNames: string[];
  manufacturerNames: string[];
}

export function initializeInventoryManager(
  categories: Category[],
  manufacturers: Manufacturer[],
): InventoryManager {
  const categoryNames = categories.map((category) =>
    String(category.categoryName),
  );
  const manufacturerNames = manufacturers.map(
    (manufacturer) => manufacturer.name,
  );

  return {
    categoryNames,
    manufacturerNames,
  };
}
