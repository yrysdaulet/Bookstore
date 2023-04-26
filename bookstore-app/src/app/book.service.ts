import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./models";

@Injectable({
  providedIn: 'root'
})
export class BookService{
  BASE_URL = "http://127.0.0.1:8000/api/v1";

  constructor(private client: HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.client.get<Book[]>(`${this.BASE_URL}/books`);
  }
  getBook(id:number):Observable<Book>{
    return this.client.get<Book>(`${this.BASE_URL}/books/${id}`)
  }
}
