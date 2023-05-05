import {Component, OnInit} from '@angular/core';
import {Book} from "../models";
import {BookService} from "../book.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Book[] = [];
  constructor(private bookService: BookService,private login:AuthService, private router:Router) {
  }
  ngOnInit() {
    if (!this.login.isLoggedIn() ){
      this.router.navigate(['/login']);
    }
    this.getBooks();
  }
  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
    })
  }


}
