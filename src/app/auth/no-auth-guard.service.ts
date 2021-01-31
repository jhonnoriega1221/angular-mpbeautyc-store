import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { timestamp } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthService implements CanActivate{

  constructor(
    private auth:AuthService,
    private router:Router
    ) { }

  canActivate(): boolean {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}