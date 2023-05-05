import { Component } from '@angular/core';
import {Author} from "../models";
import {AuthorService} from "../author.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors: Author[] = [];
  loaded: boolean = false;

  constructor(private authorService: AuthorService,private login:AuthService, private router:Router) {
    if (!this.login.isLoggedIn() ){
      this.router.navigate(['/login']);
    }
    this.getAuthors();
  }
  getAuthors(){
    this.authorService.getAuthors().subscribe((authors)=>{
      this.authors=authors;
      this.loaded = true;
    })
  }
}
