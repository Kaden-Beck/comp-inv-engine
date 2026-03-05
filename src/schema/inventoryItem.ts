import { Category } from './Category.js';
import { Manufacturer } from './Manufacturer.js';

export interface ItemConstructor {
  lastID: number;
  productName: string;
  category: Category;
  MSRP: number;
  price?: number;
  manufacturer: Manufacturer;
}

export class InventoryItem {
  invID: number;
  productName: string;
  category: Category;
  #MSRP: number;
  price: number;
  manufacturer: Manufacturer;

  constructor(data: ItemConstructor) {
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

  getMarkup(): number {
    return this.price ? this.price - this.#MSRP : this.#MSRP;
  }

  printProductDetails(): void {
    console.log(this.productName);
  }
}
