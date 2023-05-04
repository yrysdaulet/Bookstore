import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL= 'http://127.0.0.1:8000/api/v1';

  constructor(private client: HttpClient) { }

  signUp(firstName: string, lastName: string, username: string, email: string, password: string): Observable<any> {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password,
      groups:["2"]
    };
    return this.client.post(`${this.BASE_URL}/register/`, formData);
  }

  // login(username: string, password: string) {
  //   return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  // }

  // logout() {
  //   localStorage.removeItem('token');
  // }
  //
  // getToken() {
  //   return localStorage.getItem('token');
  // }
  //
  // isLoggedIn() {
  //   return this.getToken() !== null;
  // }
}
