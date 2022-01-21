import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    // Retrieve the token string from local storage
    const idToken = localStorage.getItem("id_token");

    // Check if the token is present

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      // Clone the http headers add Authorization header including the token
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }

}
