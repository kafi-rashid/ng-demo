import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  username: string = "";
  password: string = "";

  submit() {
    let user = {
      username: this.username,
      password: this.password
    }
    // console.log(user);
    console.log(user);
  }

}
