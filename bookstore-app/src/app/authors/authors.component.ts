import { Component } from '@angular/core';
import {Author} from "../models";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors: Author[] = [];
  loaded: boolean = false;

  constructor(private authorService: AuthorService) {
    this.getAuthors();
  }
  getAuthors(){
    this.authorService.getAuthors().subscribe((authors)=>{
      this.authors=authors;
      this.loaded = true;
    })
  }
}
