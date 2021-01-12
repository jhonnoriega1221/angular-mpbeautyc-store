import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto';
import { Pregunta } from '../interfaces/pregunta';
import { Opinion } from '../interfaces/opinion';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI = 'http://localhost:3000/api/';

  constructor( private http:HttpClient) { }

  //-------------Obtener productos-------------

  getProductos(){
    return  this.http.get<Producto[]>(this.URI + "producto");
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

   //-------------Obtener opiniones-------------

  getOpiniones(productoId:string){
      return this.http.get<Opinion[]>(this.URI + "opinion/"+productoId);
  }
}
