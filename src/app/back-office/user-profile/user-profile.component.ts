import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'mcd-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}

  // returns employee informations
  ngOnInit(): void {
    this.userService.getProfile().subscribe(
      profile =>
        this.profile = profile
    )
  }

  // deconnection of back office
  logout() {
    this.authService.logout().subscribe(
      response => {
        // clears locally stored informations
        localStorage.clear();
        // returns to home page
        this.router.navigate(['/']);
        console.log('Déconnexion réussie');
        // clear authenticated profile
        this.userService.profile = '';
        console.log('profil :', this.profile)
      },
      // error message
      error => {
        console.error('Déconnexion échouée', error);
      }

    )


}

}

