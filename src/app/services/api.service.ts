import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingCart } from '../interfaces/ShoppingCart';
import { Producto } from '../interfaces/producto';
import { Pregunta } from '../interfaces/pregunta';
import { Opinion } from '../interfaces/opinion';
import { Usuario } from '../interfaces/Usuario';
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
}
