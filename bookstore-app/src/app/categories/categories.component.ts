import {Component, OnInit} from '@angular/core';
import { OwlOptions} from "ngx-owl-carousel-o";
import {Book, Genre} from "../models";
import {CategoryService} from "../category.service";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  customOptions: OwlOptions = {
    margin: 0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left" ></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  categories: Genre[] = [];
  books: Book[] = [];
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private bookService: BookService) {
  }
  ngOnInit() {
    this.getCategories();
    this.getBooks();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((genres)=>{
      this.categories = genres;
    })
  }
  getBooks(){
      return this.bookService.getBooks().subscribe((books)=>{
        this.books = books;
        console.log(this.books)
      })
  }
  genreContains(genres: Genre[], genre: Genre){
    for(let g of genres){
      if(g.id == genre.id){
        return true;
      }
    }
    return false;
  }

}
