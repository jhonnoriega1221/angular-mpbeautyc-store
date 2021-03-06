import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  URI = environment.URI;

  constructor(
    private http:HttpClient
  ) { }

  getShoppingCart(){
    return this.http.get<any>(this.URI + "shoppingcart");
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
