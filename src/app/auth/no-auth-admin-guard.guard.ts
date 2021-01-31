import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthAdminGuardGuard implements CanActivate {

  constructor(
    private auth:AuthService,
    private router:Router
    ) { }

  canActivate(): boolean {
    if(this.auth.isAuthenticatedAdmin()){
      this.router.navigate(['admin/dashboard']);
      return false;
    }
    return true;
  }
  
}
