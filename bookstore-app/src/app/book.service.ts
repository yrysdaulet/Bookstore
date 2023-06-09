import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./models";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class BookService{
  BASE_URL = "http://127.0.0.1:8000/api/v1";
  
  constructor(private client: HttpClient) { }
  token: any = localStorage.getItem('token') 
  
  getBooks():Observable<Book[]>{
    return this.client.get<Book[]>(`${this.BASE_URL}/books`);
  }
  getBook(id:number):Observable<Book>{
    return this.client.get<Book>(`${this.BASE_URL}/books/${id}`)
  }
  rateBook(bookId: number, rating: number): Observable<{ book: Book }> {
    const url = `${this.BASE_URL}/books/${bookId}/rate/`;
    const body = { rating };
    return this.client.post<{ book: Book }>(url, body);
  }
  addToLibrary(book_id:number){

    const decodedToken: any = jwt_decode(this.token);
    const user_id = decodedToken.user_id;
    return this.client.post(`${this.BASE_URL}/library/${user_id}/books/${book_id}/`,{});
  }
}
