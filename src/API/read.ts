import { Product } from "../schema/Product.js"
import { Manufacturer } from "../schema/Manufacturer.js";
import { Category } from "../schema/Category.js";

export async function getProduct(invID: number): Promise<Product> {
    const productData: Product = // query item by invID
    return productData;
}

export async function getManufacturer(name: string ): Promise<Manufacturer> {
    const manufacturerData: Manufacturer = // query manufacturer by name
    return manufacturerData;
}

export async function getCategory(name: string): Promise<Category> {

}


/*****************w
Filtered GET 
******************/
export async function getItemsByCategory(category: Category): Promise<Product[]>{

}

export async function getItemsByManufacturer(manufacturer: Manufacturer): Promise<Product[]> {

}

export async function getSaleItems(): Promise<Product[]>{

}