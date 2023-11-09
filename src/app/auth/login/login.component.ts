import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

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
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.user = {
      username: '',
      password: ''
    }
  }

  onSubmit(): any {
    this.wrongCredentials = false;
    this.user = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.authService.login(this.user).subscribe(
      response => {
        localStorage.setItem('token', response.access);
        localStorage.setItem('user', response.user);
        this.router.navigate(['/intranet']);
        console.log('Connexion réussie');
        return response.user
      },
      error => {
        console.error('Erreur de connexion', error);
        this.wrongCredentials = true;
      }
    )
  }


  }



