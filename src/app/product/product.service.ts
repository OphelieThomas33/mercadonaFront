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
    }
    return this.http.get<Product[]>(`${environment.apiUrl}/products/`, httpHeaders)
  }
}
