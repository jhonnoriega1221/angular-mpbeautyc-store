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

    getPreguntasProducto(productoId:string){
      return this.http.get<Pregunta[]>(this.URI + "producto/"+productoId+"/pregunta");
  }

  realizarPregunta(userId:string, productoId:string,question:string){
    const newPregunta = {
      "usuarioId": userId,
      "productoId": productoId,
      "preguntaUsuario": question
    }
    return this.http.post<Pregunta>(this.URI + "producto/"+productoId+"/pregunta", newPregunta);
  }

  getPreguntas(){
    return this.http.get<Pregunta[]>(this.URI + "pregunta");
  }

  getPregunta(preguntaId){
    return this.http.get<Pregunta>(this.URI + "pregunta/"+preguntaId);
  }

  responderPregunta(respuesta, preguntaId){
    const newRespuesta = {
      "respuesta":respuesta
    }
    
    return this.http.put(this.URI+ "pregunta/"+preguntaId,newRespuesta);
  }
}