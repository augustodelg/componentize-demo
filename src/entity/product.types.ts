export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductInCart extends Product {
    quantity: number;
}