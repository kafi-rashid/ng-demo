import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = "Partha";
  count: number = 10;
  dob: Date = new Date();

  // formatDate(date: Date) {
  //   return date.getDay() + " " + (date.getMonth() + 1) + " " + date.getFullYear();
  // }
}
