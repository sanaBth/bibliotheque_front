import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string = 'http://localhost:4000';

  constructor(private httpClient: HttpClient, public router: Router) { }

  // Sign-in
  login(user: User) {
    return this.httpClient.post<any>(`${this.api_url}/apiuser/login`, user);

  }
  //register
  register(user: User) {
    return this.httpClient.post(`${this.api_url}/apiuser/register`, user);
  }
  //register as admin
  registerAdmin(user: User) {
    return this.httpClient.post(`${this.api_url}/apiuser/registeradmin`, user);
  }
}
