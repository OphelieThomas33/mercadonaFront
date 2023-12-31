import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  // connection conditions for secure pages
  canActivate(): Observable<boolean> {
      // authorization check
      return new Observable((observer) => {
        this.userService.getProfile().subscribe(profile => {
          observer.next(true);
          observer.complete()
        // redirection to login page if authorization refused
        }, error => {
            this.router.navigate(['/login']);
            observer.next(false);
            observer.complete();
          })
        })
  }
}
