import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  profile: any;
  httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.httpOptions = {
      // headers for requests
      headers: new HttpHeaders(
        {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        }),
      };
    };

  // get the user profile
  getProfile() {
    return new Observable((observer) => {
      // return profile if it's already authenticated
      if (this.profile) {
        observer.next(this.profile)
        observer.complete();
        console.log(this.profile)
      // request to obtain user information
      } else {
        this.http.get(`${environment.apiUrl}/dj-rest-auth/user/`, this.httpOptions).subscribe(profile => {
          this.profile = profile;
          observer.next(profile);
          observer.complete();
        // error message
        }, error => {
          observer.error(error);
          observer.complete();
        })
      }
    })
  }



}

