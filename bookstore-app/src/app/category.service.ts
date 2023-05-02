import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, forkJoin} from "rxjs";
import {Book, Genre} from "./models";
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = "http://127.0.0.1:8000/api/v1";
  constructor(private client: HttpClient) { }
  getCategories():Observable<Genre[]>{
    return this.client.get<Genre[]>(`${this.BASE_URL}/genres/`)
  }
  getCategory(id:number):Observable<Genre>{
    return this.client.get<Genre>(`${this.BASE_URL}/genres/${id}`)
  }
  getBooks(id:number):Observable<Book[]>{
    return this.client.get<Book[]>(`${this.BASE_URL}/genres/${id}/books`)
  }
  
  getGenresWithBooks(): Observable<Genre[]> {
    return this.client.get<Genre[]>(`${this.BASE_URL}/genres`).pipe(
      switchMap((genres: Genre[]) =>
        forkJoin(
          genres.map((genre: Genre) =>
            this.client.get<Book[]>(`${this.BASE_URL}/genres/${genre.id}/books`).pipe(
              map((books: Book[]) => ({ ...genre, books }))
            )
          )
        )
      )
    );
  }

}
