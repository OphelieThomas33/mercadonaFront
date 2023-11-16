import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mcd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  profile: any;
  textButton: string;
  urlButton: string;
  displayLogin: string = 'block';
  displayLogout: string = 'none';
  isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngDoCheck() {
    this.isLoggedIn = this.userService.isLoggedIn
  }

  logout() {
    this.userService.logout()
  }

  login() {
    this.router.navigate(['/login'])
  }

}
