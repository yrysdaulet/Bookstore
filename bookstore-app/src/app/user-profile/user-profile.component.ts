import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userInfo:boolean = true;
  favourite:boolean = false;
  library: boolean = false;

  onFavourite(){
    this.favourite = true;
    this.userInfo = false;
    this.library = false;
  }
  onUserInfo(){
    this.userInfo = true;
    this.favourite = false;
    this.library = false;
  }
  onLibrary(){
    this.userInfo = false;
    this.favourite = false;
    this.library = true;
  }
}
