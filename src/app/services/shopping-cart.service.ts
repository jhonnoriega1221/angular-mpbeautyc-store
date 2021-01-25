import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingCart } from '../interfaces/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

  getShoppingCart(){
    return this.http.get(this.URI + "shoppingcart");
  }

  addToShoppingCart(productId:string, quantity:number){
    const newShoppingCartItem = {
      "productId":productId,
      "quantity":quantity
    }
    return this.http.put(this.URI + "shoppingcart",newShoppingCartItem);
  }

  deleteShoppingCartitem(productId:string){
    return this.http.delete(this.URI + "shoppingcart/" +productId);
  }
}