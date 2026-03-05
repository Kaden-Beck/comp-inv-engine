import { ParentCategory, SubCategory } from '../schema/Category.js';
import { Product, ProductConstructor } from '../schema/Product.js';
import { Manufacturer } from '../schema/Manufacturer.js';

export function addManufacturer(data: Manufacturer) {
  return {
    name: data.name,
    categoriesManufactured: data.categoriesManufactured,
    logoUrl: data.logoURL,
  };
}

// API function to create a new category
export async function addCategory(data: ParentCategory | SubCategory) {
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

// API Function to create a new item and add it to the inventory
export async function addProduct(data: ProductConstructor): Promise<Product> {
  const newItem = new Product(data);
  return newItem;
}
