import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthToken} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL= 'http://127.0.0.1:8000/api/v1';

  constructor(private client: HttpClient) { }

  signUp(firstName: string, lastName: string, username: string, email: string, password: string): Observable<any> {
    const formData = {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      groups:["2"]
    };
    // console.log(formData)
    return this.client.post(`${this.BASE_URL}/register/`, formData);
  }

  login(username: string, password: string):Observable<AuthToken> {
    const formData = {
      username: username,
      password: password,
    }
    return this.client.post<AuthToken>(`${this.BASE_URL}/token/`, formData);
  }


  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
}
