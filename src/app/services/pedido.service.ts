import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from '../interfaces/Pedido';
import { NonNullAssert } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

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

  getPedidos(){
    return this.http.get<Pedido[]>(this.URI+"pedido");
  }

  getPedido(id:string){
    return this.http.get<Pedido[]>(this.URI+"pedido/"+id);
  }

  getPedidosUsuario(){
    return this.http.get<Pedido[]>(this.URI+"pedido/user");
  }

  cancelPedido(pedidoId:string){
    return this.http.delete(this.URI+"pedido/"+pedidoId);
  }

  updatePedido(pedidoId:string){
    return this.http.put(this.URI+"pedido/"+pedidoId, null);
  }
}
