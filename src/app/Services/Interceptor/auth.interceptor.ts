import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

//chaque requete http intercepté par token
//send token from browser to server by interceptor
// yjib token mn back yhotu f local storage baed ujibu m local storage w yhotu al ay requete besh tmchi ll back :)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     // console.log(localStorage.getItem('token'))
      // console.log(req.url)
    const accessToken = localStorage.getItem('token');



    if (accessToken) {
      //clone http request plus add modification to the request cloned
      const cloned = request.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` }//key value
      });
      return next.handle(cloned);
    }
    else {
      //block middleware chain
      return next.handle(request)
    }
  }
}
