import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  logged : boolean = this.login.isLoggedIn()
  constructor(private login:AuthService, private router:Router) {
  }
}
