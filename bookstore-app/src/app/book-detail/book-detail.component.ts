import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../models";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

  // @ts-ignore
  book: Book;
  ngOnInit() {
    this.getBook();
  }

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }
  getBook(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      return this.bookService.getBook(id).subscribe((book)=>{
        this.book = book;
      })
    })
  }

}
