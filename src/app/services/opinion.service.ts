import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Opinion } from '../interfaces/opinion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  URI = environment.URI;

  constructor(
    private http:HttpClient
  ) { }

  getOpiniones(productoId:string){
    return this.http.get<Opinion[]>(this.URI + "opinion/"+productoId);
}
}
