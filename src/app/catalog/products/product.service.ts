import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products/`)
  }

  getProductById(productId: number): Observable<Product|undefined> {
    return this.http.get<Product>(`${environment.apiUrl}/api/products/${productId}`)
  }

  getProductsByCategoryId(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products/`)
  }

}
