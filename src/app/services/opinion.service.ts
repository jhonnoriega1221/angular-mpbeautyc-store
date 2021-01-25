import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Opinion } from '../interfaces/opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

  getOpiniones(productoId:string){
    return this.http.get<Opinion[]>(this.URI + "opinion/"+productoId);
}
}
