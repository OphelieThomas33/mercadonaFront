import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${environment.apiUrl}/dj-rest-auth/login/`;
  logoutUrl = `${environment.apiUrl}/dj-rest-auth/logout/`;

  // goToAdminPanel(): void {
  //   //   const httpHeaders = {
  //   //     headers: new HttpHeaders({
  //   //     'Access-Control-Request-Headers':'Accept, Cookie, origin',
  //   //     'Access-Control-Allow-Method': 'GET, PUT, POST, DELETE, OPTIONS',
  //   //     })
  //   // }
  //     return this.http.(`/admin`)

  //   }

  constructor(
    private router: Router,
    private httpClient: HttpClient
) {
}


  login(pUsername: string, pPassword: string) {
    const loginData = {
      username: pUsername,
      password: pPassword
    }

    return new Observable<boolean>((observer) => {
      this.httpClient.post(this.loginUrl, loginData).subscribe(result => {
        observer.next(true);
        observer.complete();
        console.log(loginData)
      }, error => {
        observer.error(false);
        observer.complete();
      })
    })
  }

  logout() {
    return new Observable<boolean>((observer) => {
      this.httpClient.get(this.logoutUrl).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      })
    })
  }
}
