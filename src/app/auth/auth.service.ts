import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminMode = true;

  constructor(private jwtHelper:JwtHelperService) { }

  public isAuthenticated():boolean {
    const token = localStorage.getItem('TOKEN');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public setAdminMode(adminMode:boolean):boolean{
    console.log(adminMode);
    return this.adminMode = adminMode;
  }

  public getAdminMode():boolean{
    console.log(this.adminMode);
    return this.adminMode;
  }
}
