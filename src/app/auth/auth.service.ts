import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper:JwtHelperService) { }

  public isAuthenticated():boolean {
    const token = localStorage.getItem('TOKEN');

    if(token == undefined)
      return false
    
    if(this.jwtHelper.isTokenExpired(token))
      return false;
    else
      if(this.jwtHelper.decodeToken(token).isAdmin!=undefined)
        return false
      else
        return true

  }

  public isAuthenticatedAdmin():boolean {
    const token = localStorage.getItem('TOKEN');

    if(token == undefined)
      return false
    
    if(this.jwtHelper.isTokenExpired(token))
      return false;
    else
      if(this.jwtHelper.decodeToken(token).isAdmin)
        return true
      else
        return false

  }

}
