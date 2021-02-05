import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenResponse } from '../interfaces/TokenResponse';
import { Admin }  from '../interfaces/Admin' ;
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URI = environment.URI;

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

  addAdmin(formData:any){
    const adminData={
      "adminEmail": formData.adminEmail,
      "adminPassword": formData.adminPassword,
      "adminName": formData.adminName
    }
    return this.http.post(this.URI+"admin/admin",adminData);
  }
  
  getAdminLogued(adminId:string){
    return this.http.get<Admin>(this.URI+"admin/admin/"+adminId);
  }

  getAdmins(){
    return this.http.get<Admin[]>(this.URI+"admin/admin");
  }

  deleteAdmin(adminId:string){
    return this.http.delete(this.URI+"admin/admin/"+adminId);
  }
}
