import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'mcd-interceptor',
  template: '',
})
export class InterceptorComponent implements HttpInterceptor {

  // include the token saved in local storage for secure pages
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if(req.url.includes('/api/auth/user/')) {
      const otherReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(otherReq);
    }
    if(req.method == 'POST' && req.url.includes('/api/products/')) {
      const postReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(postReq);
    }
    if(req.method == 'POST' && req.url.includes('/api/discounts/')) {
      const postReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(postReq);
    }
    if(req.method == 'PUT' && req.url.includes('/api/products/')) {
      const postReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(postReq);
    }
    return next.handle(req)
  }


}
