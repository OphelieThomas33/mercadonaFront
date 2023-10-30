import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const httpHeaders = {
        headers: new HttpHeaders()
          // .set('Access-Control-Allow-Origin', 'http://mercadona-app.s3-website-us-east-1.amazonaws.com')
          // .set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
          // .set('Access-Control-Allow-Methods', 'POST, GET, PUT, DLETE, OPTIONS')
    }
    return this.http.get<Product[]>(`${environment.apiUrl}/products/`, httpHeaders)
  }




}
