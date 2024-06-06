import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNzE0MTE4MzM5NDQ0IiwiaWF0IjoxNzE1MTYwNzIxfQ.JI-5nv7IZscuvrVJr6QiLOKbJ9k17fZdPR31JdSVaAY"
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({setHeaders: {Authorization: `Bearer ${this.token}`}})
    return next.handle(modifiedRequest)
  }
};
