import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router, private loginService:AuthService,) {
    this.username = ''
    this.password = ''
  }

  login() {
    this.authService.login( this.username, this.password).subscribe((data) => {
      // this.loginService.logged=true;
      this.router.navigate(['/home']);
      localStorage.setItem('token', data.access)
    })
  }


}
