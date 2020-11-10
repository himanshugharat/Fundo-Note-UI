import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken = localStorage.getItem('token')
    if(idToken){
      const clone=request.clone({
        headers:request.headers.set('Authorization',idToken)
      })
      return next.handle(clone);
    }
    else{
      return next.handle(request);
    }
    
  }
}
