import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Category[]>(`${environment.apiUrl}/api/categories/`)
  }

  getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/api/categories/${categoryId}/`)
  }
}
