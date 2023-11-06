import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { HttpXsrfInterceptorService } from './interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'csrftoken'
    // })
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptorService, multi: true
  // }]
})
export class AuthModule { }
