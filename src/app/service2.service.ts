import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  UniqueConstraintError,
} from './interface2';
import { Observable } from 'rxjs';
import { Interface2 } from './interface2';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  constructor(private http: HttpClient) {} 
  userName : string | undefined;
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insertreg(
    Details:Interface2
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'registration1/Insertreg',
      Details,
      { headers: this.headers }
    );
  }
  Readreg(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}registration1/Readreg${email}`);
  }
  Deletereg(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}registration1/Deletereg${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}registration1/Deletereg${email}`
    );
  } 
  Updatereg(email: String, Details: Interface2) {
    return this.http.put(`${this.url}registration1/Updatereg${email}`, Details, {
      headers: this.headers,
    });
  }
}


