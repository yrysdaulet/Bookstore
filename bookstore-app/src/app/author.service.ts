import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Author} from "./models";
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

}
