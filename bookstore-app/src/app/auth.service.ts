import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
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
