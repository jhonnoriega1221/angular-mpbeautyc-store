import { WishList } from './WishList';

export interface Usuario{
    _id?: string;
    email:string;
    name:string;
    surname:string;
    cc:number;
    address:string;
    addressComplement:string;
    country:string;
    city:string;
    phoneNumber:string;
    wishList:WishList[];
}