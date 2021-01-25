import { Injectable } from '@angular/core';

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
  
  //-------------Obtener productos-------------

  

   //-------------Obtener preguntas-------------


   //-------------Obtener opiniones-------------



  //-------------------CARRITO DE COMPRAS----------------------
 

  
}
