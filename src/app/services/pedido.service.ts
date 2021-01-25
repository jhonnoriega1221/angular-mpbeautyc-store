import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from '../interfaces/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

  deleteShoppingCartitem(productId:string){
    return this.http.delete(this.URI + "shoppingcart/" +productId);
  }

  //-----------------PEDIDOS---------------------//
  realizarPedido(shippingCost:number, subtotal:number, total:number, shoppingCart:any[]){
    const newPedido = {
      "shippingCost":shippingCost,
      "productsTotal":subtotal,
      "netTotal":total,
      "products":shoppingCart
    }

    console.log(shoppingCart);
    return this.http.post(this.URI + "pedido",newPedido); 
  }

  getPedido(id:string){
    return this.http.get<Pedido>(this.URI+"pedido/"+id);
  }

  getPedidosUsuario(){
    return this.http.get<Pedido[]>(this.URI+"pedido/user");
  }
}