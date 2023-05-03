import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Author, Book} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  BASE_URL = "http://127.0.0.1:8000/api/v1"
  constructor(private client:HttpClient) { }

  getAuthors():Observable<Author[]>{
    return this.client.get<Author[]>(`${this.BASE_URL}/authors`);
  }
  getAuthor(id:number):Observable<Author>{
    return this.client.get<Author>(`${this.BASE_URL}/authors/${id}`)
  }
  getBooks(id:number):Observable<Book[]>{
    return this.client.get<Book[]>(`${this.BASE_URL}/authors/${id}/books`)
  }
}
