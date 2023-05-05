import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

  // @ts-ignore
  book: Book;
  // @ts-ignore
  rating:number;
  ngOnInit() {
    if (!this.login.isLoggedIn() ){
      this.router.navigate(['/login']);
    }
    this.getBook();
  }
  constructor(private bookService: BookService, private route: ActivatedRoute,private login:AuthService, private router:Router) {
  }
  getBook(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      return this.bookService.getBook(id).subscribe((book)=>{
        this.book = book;
      })
    })
  }
  setRating(rating: number) {
    this.rating = rating;
    this.bookService.rateBook(this.book.id, rating).subscribe((response) => {
      this.book = response.book;
    });
  }
  // addToLibrary(){
  //   this.bookService.addToLibrary(this.book.id).subscribe((response) => {
  //     this.book = response.;
  //   });
  // }
  // @ts-ignore

}
