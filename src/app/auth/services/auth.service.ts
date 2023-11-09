import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/auth/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${environment.apiUrl}/dj-rest-auth/login/`;
  logoutUrl = `${environment.apiUrl}/dj-rest-auth/logout/`;

  httpOptions: any;
  user: any;
  currentUser: any;


  constructor(
    private http: HttpClient,
    private userService: UserService,
    ) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {'Content-Type': 'application/json',
          }),
      };
  }

  login(user: any): Observable<any> {
    return this.http.post(this.loginUrl, JSON.stringify(user), this.httpOptions)
  }

  logout() {
    return this.http.post(this.logoutUrl, this.httpOptions)
  }


}


