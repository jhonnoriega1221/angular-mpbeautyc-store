import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenResponse } from '../interfaces/TokenResponse';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

  //Registrar usuario
  registerUsuario(formData:any){
    const newUserData = {
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
  
  //Autenticar usuario
  loginUsuario(formData:any){
    const userData  = {
      "email": formData.email,
      "password": formData.password
    }

    return this.http.post<TokenResponse>(this.URI+"auth/login",userData);
  }

  //Obtener datos del usuario
  getUsuario(){
    return this.http.get<Usuario>(this.URI+"user");
  }
  
}