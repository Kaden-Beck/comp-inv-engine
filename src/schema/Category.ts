export enum TopCategory {
  Display,
  Peripheral,
  Motherboard,
  CPU,
  GPU,
  Memory,
  Storage,
  Cooling,
  PowerSupply,
}

export interface Category {
  categoryName: TopCategory | string;
  categoryDescription: string;
}

export interface ParentCategory extends Category {
  categoryName: TopCategory;
  categoryDescription: string;
  childCategories?: SubCategory[];
}

export interface SubCategory extends Category {
  categoryName: string;
  categoryDescription: string;
  parentCategory: ParentCategory;
}
