import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit{
  logged : boolean = this.login.logged

  constructor(private login:AuthService, private router:Router, private cd: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.logged = this.login.logged;
    this.cd.detectChanges();
    // if(!this.logged){
    //   this.router.navigate(['/home']);
    // }
  }
  logout(){
    this.login.logout();

    this.logged = false;
    this.cd.detectChanges();
  }
}
