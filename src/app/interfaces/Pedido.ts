import { Usuario } from "./Usuario";
import { Producto } from './Producto'

export interface Product{
    productId:string,
    productName:string,
    imgUrl:string,
    oldPrice:number,
    actualPrice:number,
    discount:number,
    quantity:number,
    color:string,
    Usuario:Usuario
}

export interface Pedido{
    _id:string;
    userId:string;
    status:string;
    shippingCost:string;
    productsTotal:string;
    netTotal:string;
    products:Array<Product>;
    userData:Array<Usuario>;
    createdAt:Date;
    updatedAt:Date;
}