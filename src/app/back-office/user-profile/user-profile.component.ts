import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/auth/services/user.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'mcd-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: User;

  constructor(
    private userService: UserService,
  ) {
    this.profile = new User()
  }

  // returns employee informations
  ngOnInit(): void {
    this.userService.getProfile().subscribe(
      profile =>
        this.profile = profile
    )
  }

}

