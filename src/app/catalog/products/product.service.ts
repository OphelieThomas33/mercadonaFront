import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from './product';
import { Discount } from '../discount';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  // request to the api to get all the products of the database
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products-list/`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // request to the api to get one product by id
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/api/products-list/${productId}/`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // request to the api to add new product
  addProduct(product: any): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/api/products/`, product).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // request to the api to modify product
  modifyProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/api/products/${id}/`, product).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // request to the api to add discount
  addDiscount(discount: Discount): Observable<Discount> {
    return this.http.post<Product>(`${environment.apiUrl}/api/discounts/`, discount).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // display response on console
  log(response: any) {
    console.table(response);
  }

  // display error on console
  handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue)
  }

}
