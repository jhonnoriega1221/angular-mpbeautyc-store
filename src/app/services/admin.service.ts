import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenResponse } from '../interfaces/TokenResponse';
import { Admin }  from '../interfaces/Admin' ;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URI = 'http://localhost:3000/api/';

  constructor(
    private http:HttpClient
  ) { }

  loginAdmin(formData:any){
    const adminData = {
      "adminEmail": formData.adminEmail,
      "adminPassword": formData.adminPassword
    }
    return this.http.post<TokenResponse>(this.URI+"admin/login", adminData);
  }
}
