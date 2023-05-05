import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(private authService: AuthService, private router: Router) {
    this.username = ''
    this.email = ''
    this.password = ''
    this.lastName = ''
    this.firstName= ''
  }

  signUp(){
    this.authService.signUp(this.firstName, this.lastName, this.username, this.email, this.password).subscribe((data)=>{
      console.log(data);
    })
  }
}

