import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(localStorage.getItem('TOKEN') == null)
      return next.handle(req);

    const headers = new HttpHeaders({
      'x-access-token': localStorage.getItem('TOKEN')
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
    
  }

 /* handleError( error: HttpErrorResponse){
    return throwError(error);
  }*/

}
