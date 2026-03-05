import { Category } from './Category.js';
import { Manufacturer } from './Manufacturer.js';

export interface ProductConstructor {
  lastID: number;
  productName: string;
  category: Category;
  MSRP: number;
  price?: number;
  manufacturer: Manufacturer;
  quantity?: number;
}

export class Product {
  proudctID: number;
  productName: string;
  category: Category;
  #MSRP: number;
  price: number;
  manufacturer: Manufacturer;
  #quantity: number;

  constructor(data: ProductConstructor) {
    this.proudctID = data.lastID + 1;
    this.productName = data.productName;
    this.category = data.category;
    this.#MSRP = data.MSRP;
    this.price = data.price ?? this.#MSRP;
    this.manufacturer = data.manufacturer;
    this.#quantity = data.quantity ?? 1;
  }

  get msrp(): number {
    return this.#MSRP;
  }

  getMarkup(): number {
    return this.price ? this.price - this.#MSRP : this.#MSRP;
  }

  updatePrice(price: number): number {
    if (price > 0) {
      this.price = price;
    }

    return this.price;
  }

  get quantity(): number {
    // if there is less than 0 return 0
    return this.#quantity > 0 ? this.#quantity : 0;
  }

  removeQuantity(q: number): number {
    const newQuantity = this.#quantity - q;

    if (newQuantity >= 0) {
      this.#quantity = newQuantity;
    } else {
      throw new Error('Cannot remove more than what is available.');
    }

    return this.quantity;
  }

  addQuantity(q: number): number {
    this.#quantity = this.quantity + q;

    return this.quantity;
  }

  printProductDetails(): void {
    console.log(this.productName);
  }
}
