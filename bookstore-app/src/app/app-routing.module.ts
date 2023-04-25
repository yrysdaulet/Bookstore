import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoriesComponent} from "./categories/categories.component";
import {LoginComponent} from "./login/login.component";
import {BooksComponent} from "./books/books.component";
import {SignupComponent} from "./signup/signup.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'category-detail/:id', component:CategoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
