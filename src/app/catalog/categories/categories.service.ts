import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const httpHeaders = {
        headers: new HttpHeaders()
          // .set('Access-Control-Allow-Origin', 'http://mercadona-app.s3-website-us-east-1.amazonaws.com')
          // .set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
          // .set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    }
    return this.http.get<Category[]>(`${environment.apiUrl}/categories/`, httpHeaders)
  }

  getCategoryById(categoryId: number): Observable<Category> {

    const httpHeaders = {
      headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin':'*',
      // 'Access-Control-Allow-Headers': 'Accept, same-origin, Accept-Language, Content-Language, Content-Type, X-Requested-With, X-Content-Type-Options',
      // 'Access-Control-Allow-Methods': 'GET, PUT, PATCH, DELETE, HEAD, OPTIONS'
    })
  }
    return this.http.get<Category>(`${environment.apiUrl}/categories/${categoryId}/`, httpHeaders)
  }
}
