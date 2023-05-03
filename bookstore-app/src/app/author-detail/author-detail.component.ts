import {Component, OnInit} from '@angular/core';
import {Author, Book} from "../models";
import {AuthorService} from "../author.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit{
  // @ts-ignore
  author: Author;
  books: Book[] = [];

  ngOnInit(){
    this.getAuthor();
    this.getBooks();
  }

  constructor(private authorService: AuthorService, private route: ActivatedRoute) {

  }
  getAuthor(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      return this.authorService.getAuthor(id).subscribe((author)=>{
        this.author = author;
      })
    })
  }
  getBooks(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      return this.authorService.getBooks(id).subscribe((books)=>{
        this.books = books;
      })
    })
  }
}
