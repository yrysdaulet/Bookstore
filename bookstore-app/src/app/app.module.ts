import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule} from "ngx-owl-carousel-o";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import {AppRoutingModule} from "./app-routing.module";
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FormsModule} from "@angular/forms";
// import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BooksComponent,
    CategoriesComponent,
    TopComponent,
    BottomComponent,
    SignupComponent,
    AboutUsComponent,
    CategoryDetailComponent,
    BookDetailComponent,
    AuthorsComponent,
    AuthorDetailComponent,
    UserProfileComponent,
    // BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
