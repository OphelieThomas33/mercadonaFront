import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  // request to the api to get all the products of the database
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products/`)
  }

  // request to the api to get one product by id
  getProductById(productId: number): Observable<Product|undefined> {
    return this.http.get<Product>(`${environment.apiUrl}/api/products/${productId}`)
  }

}
