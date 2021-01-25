import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pregunta } from '../interfaces/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

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
}
