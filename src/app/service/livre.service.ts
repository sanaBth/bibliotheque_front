import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categorie } from '../model/categorie';
import { Livre } from '../model/livre';
@Injectable({
  providedIn: 'root'
})
export class LivreService {

  api_url: string = 'http://localhost:4000';
  constructor(private httpClient: HttpClient, public router: Router) { }

  //get liste des livres
  getLivre() {
    return this.httpClient.get(`${this.api_url}/categorie/getcat`);
  }

  //ajouter un livre
  addLivre(form: FormData, id: string): Observable<any> {
    return this.httpClient.post(`${this.api_url}/livre/add/${id}`, form).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
