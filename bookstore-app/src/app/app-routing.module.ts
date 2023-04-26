import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoriesComponent} from "./categories/categories.component";
import {LoginComponent} from "./login/login.component";
import {BooksComponent} from "./books/books.component";
import {SignupComponent} from "./signup/signup.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component:CategoryDetailComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'about-us', component: AboutUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
