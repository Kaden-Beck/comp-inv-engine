import { Product } from '../schema/Product.js';

export async function removeQuantity(
  proudctID: number,
  itemID: number,
  quantity: number,
): Promise<Product> {}

export async function addQuantity(
  proudctID: number,
  itemID: number,
  quantity: number,
): Promise<Product> {}

export async function updateProduct(
  proudctID: number,
  name?: string,
  category?: string,
  manufacturer?: string,
): Promiser<Product> {}

export async function updatePrice(
  proudctID: number,
  price: number,
): Promise<Product> {}
