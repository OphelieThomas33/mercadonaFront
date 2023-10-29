import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const httpHeaders = {
        headers: new HttpHeaders()
          // .set('Access-Control-Allow-Origin', 'http://mercadona-app.s3-website-us-east-1.amazonaws.com')
          // .set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
          // .set('Access-Control-Allow-Methods', 'POST, GET, PUT, DLETE, OPTIONS')
    }
    return this.http.get<Category[]>(`${environment.apiUrl}/categories/`, httpHeaders)
  }


}
