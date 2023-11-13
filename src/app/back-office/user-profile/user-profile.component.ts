import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'mcd-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: any;

  constructor(
    private userService: UserService,
  ) {}

  // returns employee informations
  ngOnInit(): void {
    this.userService.getProfile().subscribe(
      profile =>
        this.profile = profile
    )
  }

}

