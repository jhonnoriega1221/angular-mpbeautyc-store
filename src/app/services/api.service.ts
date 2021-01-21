import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingCart } from '../interfaces/ShoppingCart';
import { Producto } from '../interfaces/producto';
import { Pregunta } from '../interfaces/pregunta';
import { Opinion } from '../interfaces/opinion';
import { Usuario } from '../interfaces/Usuario';
import { Pedido } from '../interfaces/Pedido';
import { TokenResponse } from '../interfaces/TokenResponse';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI = 'http://localhost:3000/api/';

  constructor( private http:HttpClient) { }
//_______________________________________________________AUTH RELATED__________________________________________
  //----------------Registrar usuario----------------
  registerUsuario(formData:any){
    const newUserData ={
      "email": formData.email,
      "password": formData.password,
      "name": formData.name,
      "surname": formData.surname,
      "cc": formData.cc,
      "address": formData.address,
      "addressComplement": formData.addressComplement,
      "country": formData.country,
      "city": formData.city,
      "phoneNumber": formData.phoneNumber
    }
    
    return this.http.post<TokenResponse>(this.URI+"user/signup",newUserData)
    
  }

  //-------------Loguear usuario------------
  loginUsuario(formData:any){
    const userData  = {
      "email": formData.email,
      "password": formData.password
    }

    return this.http.post<TokenResponse>(this.URI+"auth/login",userData);
  }

  //_________________________________________________END AUTH RELATED_____________________________________________________

  //--------------Obtener datos usuario-----------------//

  getUsuario(){
    return this.http.get<Usuario>(this.URI+"user");
  }

  //-------------Obtener productos-------------

  getProductos(){
    return this.http.get<Producto[]>(this.URI + "producto");
  }

  getProducto(id:string){
      return this.http.get<Producto>(this.URI + "producto/" + id);
  }

  searchProducto(query:string){
    return this.http.get<Producto[]>(this.URI + "busqueda=" + query);
  }

  updateProducto(id,updateProductData, brand, category){

    const updatedProducto = {
      "name":updateProductData.productName,
      "category":{
        "categoryIndex":updateProductData.productCategory,
        "categoryName":category
      },
      "brand" : {
        "brandIndex":updateProductData.productBrand,
        "brandName":brand
      },
      "description":updateProductData.productDescription,
      "originalPrice":updateProductData.productPrice,
      "discount":updateProductData.productDiscount,
      "stockSize":updateProductData.productStockSize
    }

    return this.http.put(this.URI+"producto/"+id,updatedProducto)
  }

  createProducto(productData, brandName, categoryName, photo:File){
    const fd = new FormData();

    fd.append('name',productData.productName);
    fd.append('categoryIndex',productData.productCategory);
    fd.append('categoryName',categoryName);
    fd.append('brandIndex',productData.productBrand);
    fd.append('brandName',brandName);
    fd.append('description',productData.productDescription);
    fd.append('originalPrice',productData.productPrice);
    fd.append('discount',productData.productDiscount);
    fd.append('stockSize',productData.productStockSize);
    fd.append('image',photo);

     return this.http.post(this.URI+"producto",fd) 
  }

  unsubscribeProduct(id){
    return this.http.delete(this.URI+"producto/"+id)
  }

  subscribeProduct(id){
    return this.http.post(this.URI+"producto/"+id,null)
  }

   //-------------Obtener preguntas-------------

  getPreguntas(productoId:string){
      return this.http.get<Pregunta[]>(this.URI + "pregunta/"+productoId);
  }

  realizarPregunta(userId:string, productoId:string,question:string){
    const newPregunta = {
      "usuarioId": userId,
      "productoId": productoId,
      "preguntaUsuario": question,
      "respuesta": ''
    }
    return this.http.post<Pregunta>(this.URI + "pregunta", newPregunta);
  }

   //-------------Obtener opiniones-------------

  getOpiniones(productoId:string){
      return this.http.get<Opinion[]>(this.URI + "opinion/"+productoId);
  }

  //-------------------CARRITO DE COMPRAS----------------------
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
