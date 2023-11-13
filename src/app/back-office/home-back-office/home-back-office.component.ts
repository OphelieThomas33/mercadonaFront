import { Component } from '@angular/core';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'mcd-home-back-office',
  templateUrl: './home-back-office.component.html',
  styleUrls: ['./home-back-office.component.css']
})
export class HomeBackOfficeComponent {

  imgUrl: string = '../../../assets/banner-back-office.jpg'

  constructor(
    private userService: UserService,
    ) {}

  // get user profile for welcome message
  ngOnInit():void {
    this.userService.getProfile()
  }

}
