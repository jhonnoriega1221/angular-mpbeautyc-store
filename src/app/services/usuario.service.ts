import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../interfaces/Usuario';
import { TokenResponse } from '../interfaces/TokenResponse';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URI = environment.URI;

  constructor(
    private http:HttpClient
  ) { }

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

    return this.http.post<TokenResponse>(this.URI+"user/login",userData);
  }

  //_________________________________________________END AUTH RELATED_____________________________________________________

  //--------------Obtener datos usuario-----------------//

  getUsuarioLogued(){
    return this.http.get<Usuario>(this.URI+"user");
  }

  getUsuario(id:string){
    return this.http.get<Usuario>(this.URI+'user/' +id)
  }

}
