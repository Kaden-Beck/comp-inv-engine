export interface Manufacturer {
  name: string;
  categoriesManufactured: Category[];
  logoURL: string;
}

export enum Category {
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

export type InventoryConstructor = {
  lastID: number;
  productName: string;
  category: Category;
  MSRP: number;
  price?: number;
  manufacturer: Manufacturer;
};

export class InventoryItem {
  invID: number;
  productName: string;
  category: Category;
  #MSRP: number;
  price: number;
  manufacturer: Manufacturer;

  constructor(data: InventoryConstructor) {
    this.invID = data.lastID + 1;
    this.productName = data.productName;
    this.category = data.category;
    this.#MSRP = data.MSRP;
    this.price = data.price ?? this.#MSRP;
    this.manufacturer = data.manufacturer;
  }

  public get MSRP(): number {
    return this.#MSRP;
  }
}
