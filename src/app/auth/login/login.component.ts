import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'mcd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password:  new FormControl('')
  })
  wrongCredentials: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  login() {
    const formData = this.loginForm.value
    this.wrongCredentials = false;
    this.auth.login(formData.username, formData.password).subscribe(result => {
      this.router.navigate(['/promotions'])
    }, error => {
      this.wrongCredentials = true
    })
  }


  }
