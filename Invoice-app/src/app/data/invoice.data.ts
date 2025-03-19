import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id:1,
    name: 'Componente de PC',
    client:{
        name: 'Cristopher',
        lastname: 'Castro',
        address:{
            country:'Guatemala',
            city:'Ciudad de Guatemala ',
            street:'4 avenida zona1',
            number:15
        }
    },
    company:{
        name:'Tecnolog ',
        fiscalNumber: 313333,
    },
    items:[{
        id: 1,
        product: 'Intel ultra core 9',
        price:599,
        quantity: 19,
    },
    {
        id: 2,
        product: 'Monitor ASUS 34 inch',
        price:399,
        quantity: 2,
    },
    {
        id: 3,
        product: 'Corsair Teclado Gamer',
        price:200,
        quantity: 1,
    },
]
}