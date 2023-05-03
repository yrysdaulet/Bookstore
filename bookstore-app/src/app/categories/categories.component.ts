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
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left" ></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 5
      },
    },
    nav: true
  }
  genres: Genre[] = [];
  loaded: boolean = false;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private bookService: BookService) {
  }
  ngOnInit() {
    this.getGenresWithBooks();
    }

  getGenresWithBooks(){
    this.categoryService.getGenresWithBooks().subscribe((genres: Genre[]) => {
      this.genres = genres;
      this.loaded = true
    });
  }

}
