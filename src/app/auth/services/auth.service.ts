import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${environment.apiUrl}/api/auth/login/`;
  logoutUrl = `${environment.apiUrl}/api/auth/logout/`;

  httpOptions: any;
  user: any;
  currentUser: any;


  constructor(
    private http: HttpClient,
    ) {
      // headears for requests
      this.httpOptions = {
        headers: new HttpHeaders(
          {'Content-Type': 'application/json',
          }),
      };
  }

  // login request
  login(user: any): Observable<any> {
    return this.http.post(this.loginUrl, JSON.stringify(user), this.httpOptions)
  }

  // logout request
  logout() {
    return this.http.post(this.logoutUrl, this.httpOptions)
  }


}


