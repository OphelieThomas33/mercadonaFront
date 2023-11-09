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

  ngOnInit(): void {
    this.userService.getProfile().subscribe(
      profile =>
        this.profile = profile
    )
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        localStorage.clear();
        this.router.navigate(['/']);
        console.log('Déconnexion réussie');
        this.userService.profile = '';
        console.log('profil :', this.profile)
      },
      error => {
        console.error('Déconnexion échouée', error);
      }

    )


}

}

