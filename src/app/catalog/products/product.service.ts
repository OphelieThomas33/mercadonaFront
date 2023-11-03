import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
  //   const httpHeaders = {
  //     headers: new HttpHeaders({
  //     'Access-Control-Request-Headers':'Accept, Cookie, origin',
  //     'Access-Control-Allow-Method': 'GET, PUT, POST, DELETE, OPTIONS',
  //     })
  // }
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products/`)


  }

}
