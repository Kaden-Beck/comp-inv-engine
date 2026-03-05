import { ParentCategory, SubCategory } from '../schema/Category.js';
import { InventoryItem, ItemConstructor } from '../schema/inventoryItem.js';
import { Manufacturer } from '../schema/Manufacturer.js';

export function addInventory(data: ItemConstructor) {
  const newItem = new InventoryItem(data);
  return newItem;
}

export function addManufacturer(data: Manufacturer) {
  return {
    name: data.name,
    categoriesManufactured: data.categoriesManufactured,
    logoUrl: data.logoURL,
  };
}

export function addCategory(data: ParentCategory | SubCategory) {
  if ('parentCategory' in data) {
    return {
      categoryName: data.categoryName,
      categoryDescription: data.categoryDescription,
      parentCategory: data.categoryName,
    };
  } else {
    return {
      categoryName: data.categoryName,
      categoryDescription: data.categoryDescription,
      childCategories: data.childCategories,
    };
  }
}
