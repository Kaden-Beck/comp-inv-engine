import {
  getChildCategories,
  GetChildCategoriesVariables,
  getCategoryByName,
  GetCategoryByNameVariables,
  getProductsByCategory,
  UUIDString,
} from '@dataconnect/generated';

// Expected shape of a search result for a category
export interface CategorySearchResult {
  id: UUIDString;
  name: string;
  depth: number;
}

// Retrieve the id of a category using its common name (string), return id if not null
export async function getCategoryUUIDByName(categoryName: string) {
  const result = await getCategoryByName({ name: categoryName });
  const category = result.data.categories[0];

  return category?.id ?? null;
}

// Get a list of products by a given category's common na,e
export async function getProductsByCategoryName(categoryName: string) {
  const categoryId = await getCategoryUUIDByName(categoryName);

  if (!categoryId) return null;

  // Validate data shape
  const args: { categoryId: UUIDString; limit?: number | null } = {
    categoryId: categoryId,
    limit: 50,
  };

  // return result
  const result = await getProductsByCategory(args);
  return result.data;
}

// Recursively retrieve the child categories of a given parent and return result
export async function getChildCategoriesRecursive(
  parentId: UUIDString,
  depth = 1,
  visited = new Set<UUIDString>(),
): Promise<CategorySearchResult[]> {
  // If parent has been visited (through passed Set) return empty list, otherwise add parentId to set
  if (visited.has(parentId)) {
    return [];
  } else {
    visited.add(parentId);
  }

  // Await SDK function to retrieve child categories
  const result = await getChildCategories({ parentId, limit: 100 });
  const directChildren = result.data.categories;

  if (directChildren.length < 1) return [];

  // init a list of category search results and iterate through
  // directChildren and add objects to the array and there nested children
  // then return the descendents array
  const descendants: CategorySearchResult[] = [];
  for (const child of directChildren) {
    descendants.push({
      id: child.id,
      name: child.name,
      depth,
    });
    const nestedChildren = await getChildCategoriesRecursive(
      child.id,
      depth + 1,
      visited,
    );
    descendants.push(...nestedChildren);
  }

  return descendants;
}

// get category by tree name (via rootID), returns object with both rootID and descendants
export async function getCategoryTreeByName(categoryName: string) {
  const rootId = await getCategoryUUIDByName(categoryName);

  if (!rootId) return null;

  const descendants = await getChildCategoriesRecursive(rootId);
  return { rootId, descendants };
}

// Out put products in a category given its common name
export async function printProductsInCategoryByName(categoryName: string) {
  const result = await getProductsByCategoryName(categoryName);

  // Log message if no result
  if (!result) {
    console.log('unable to locate a category by that name');
    return;
  }

  // Log message if no items in category
  const products = result.products;
  if (!products[0]) {
    console.log('No products in that category');
    return;
  }

  // For each product in returned array print formatted details
  for (const prod of products) {
    console.log(
      `- ${prod.name} - ${prod.manufacturer.name} |  Price: $${prod.price ?? 0} | There are ${prod.quantity} in stock.`,
    );
  }
}
