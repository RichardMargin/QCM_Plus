import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userType: string = '';

  constructor() {
    this.userType = localStorage.getItem('userType') || '';
  }

}
