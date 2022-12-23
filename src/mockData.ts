import { ProductInCart } from "./entity/product.types";
import burguer from './assets/images/burguer.png';
import { Bill } from "./entity/billi.type";

export const mockData: ProductInCart[] = [
    {
        id: '1',
        name: 'Big Borzi',
        description: 'Pan de papa, 2 Carnes. 4 Cheddars',
        price: 1020,
        image: burguer,
        quantity: 1,
    },
    {
        id: '2',
        name: 'Tita',
        description: 'Pan de papa, 2 Carnes. 4 Cheddars',
        price: 1020,
        image: burguer,
        quantity: 1,
    },
];



export const billMockData: Bill = {
    items: [
        {
            subject: 'Delivery',
            amount: 150,
        },
        {
            subject: 'Propina',
            amount: 50,
        },
    ],
    total: 2040,
};