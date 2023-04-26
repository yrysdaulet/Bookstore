import {Component, Input, OnInit} from '@angular/core';
import {Book, Genre} from "../models";
import {CategoryService} from "../category.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit{
  // @ts-ignore
  category: Genre;
  books: Book[] = [];
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getCategory();
    this.getBooks();
  }

  getCategory(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      return this.categoryService.getCategory(id).subscribe((genre)=>{
        this.category = genre;
      })
    })
  }
  getBooks(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      return this.categoryService.getBooks(id).subscribe((books)=>{
        this.books = books;
      })
    })
  }
}
