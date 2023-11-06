import {  } from '@angular/common';import { Component } from '@angular/core';

@Component({
  selector: 'mcd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  goToAdminPanel(): any {
    window.location.href = 'http://15.237.203.102/admin';
  }

}
