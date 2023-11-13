import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  profile: any;
  httpOptions: any;
  isLoggedIn: boolean = false;
  logoutMessage: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {
    this.httpOptions = {
      // headers for requests
      headers: new HttpHeaders(
        {'Content-Type': 'application/json',
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
        this.http.get(`${environment.apiUrl}/api/auth/user/`, this.httpOptions).subscribe(profile => {
          this.profile = profile;
          this.isLoggedIn = true;
          this.logoutMessage = false;
          observer.next(profile);
          observer.complete();
        // error message
        }, error => {
          this.isLoggedIn = false;
          observer.error(error);
          observer.complete();
        })
      }
    })
  }

  // deconnection of back office
  logout() {
    this.authService.logout().subscribe(
      response => {
        // clears locally stored informations
        localStorage.clear();
        // returns to home page
        this.router.navigate(['/login']);
        console.log('Déconnexion réussie');
        // clear authenticated profile
        this.profile = '';
        this.isLoggedIn = false;
        this.logoutMessage = true;
        console.log('profil :', this.profile)
      },
      // error message
      error => {
        console.error('Déconnexion échouée', error);
      }

    )
  }

}

