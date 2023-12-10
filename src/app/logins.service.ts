import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Login,
  InsertedSuccess,
  Read,
  UniqueConstraintError,
} from './login';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private http: HttpClient) {} 
 
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

 
  Readreg(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}logging/Readreg${email}`);
  }
  
}


