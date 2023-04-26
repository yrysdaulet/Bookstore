import {Component, OnInit} from '@angular/core';
import {Book} from "../models";
import {BookService} from "../book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Book[] = [];
  constructor(private bookService: BookService) {
  }
  ngOnInit() {
    this.getBooks();
  }
  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
    })
  }


}
