
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  UniqueConstraintError,
} from './interface1';
import { Observable } from 'rxjs';
import { Interface1 } from './interface1';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details:Interface1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Students10/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(Unitname: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Students10/Read${Unitname}`);
  }
  Delete(Unitname: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Students10/Delete${Unitname}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Students10/Delete${Unitname}`
    );
  } 
  Update(Unitname: String, Details: Interface1) {
    return this.http.put(`${this.url}Students10/Update${Unitname}`, Details, {
      headers: this.headers,
    });
  }
  private isLoggedIn = false;
  // constructor() { }
  login() {
    // Perform login logic here
    this.isLoggedIn = true;
  }
  
  logout() {
    // Perform logout logic here
    this.isLoggedIn = false;
  }

  isLoggedInUser() {
    return this.isLoggedIn;
  }

  Insertbio(
    Details:Interface1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'biology/Insertbio',
      Details,
      { headers: this.headers }
    );
  }
  Readbio(Unitname: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}biology/Readbio${Unitname}`);
  }
  Deletebio(Unitname: String): Observable<InsertedSuccess> {
    console.log(`${this.url}biology/Deletebio${Unitname}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}biology/Deletebio${Unitname}`
    );
  } 
  Updatebio(Unitname: String, Details: Interface1) {
    return this.http.put(`${this.url}biology/Updatebio${Unitname}`, Details, {
      headers: this.headers,
    });
  }

  Insertche(
    Details:Interface1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Chemistry/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Readche(Unitname: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Chemistry/Read${Unitname}`);
  }
  Deleteche(Unitname: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Chemistry/Delete${Unitname}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Chemistry/Delete${Unitname}`
    );
  } 
  Updateche(Unitname: String, Details: Interface1) {
    return this.http.put(`${this.url}Chemistry/Update${Unitname}`, Details, {
      headers: this.headers,
    });
  }

  Insertmat(
    Details:Interface1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'maths/Insertmat',
      Details,
      { headers: this.headers }
    );
  }
  Readmat(Unitname: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}maths/Readmat${Unitname}`);
  }
  Deletemat(Unitname: String): Observable<InsertedSuccess> {
    console.log(`${this.url}maths/Deletemat${Unitname}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}maths/Deletemat${Unitname}`
    );
  } 
  Updatemat(Unitname: String, Details: Interface1) {
    return this.http.put(`${this.url}maths/Updatemat${Unitname}`, Details, {
      headers: this.headers,
    });
  }

  Insertsci(
    Details:Interface1
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Science/Insertsci',
      Details,
      { headers: this.headers }
    );
  }
  Readsci(Unitname: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Science/Readsci${Unitname}`);
  }
  Deletesci(Unitname: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Science/Deletesci${Unitname}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Science/Deletesci${Unitname}`
    );
  } 
  Updatesci(Unitname: String, Details: Interface1) {
    return this.http.put(`${this.url}Science/Updatesci${Unitname}`, Details, {
      headers: this.headers,
    });
  }

  // Insertreg(
  //   Details:Interface1
  // ): Observable<InsertedSuccess | UniqueConstraintError> {
  //   return this.http.post<InsertedSuccess | UniqueConstraintError>(
  //     this.url + 'registration/Insertreg',
  //     Details,
  //     { headers: this.headers }
  //   );
  // }
  // Readreg(username: String): Observable<Read> {
  //   return this.http.get<Read>(`${this.url}registration/Readreg${username}`);
  // }
  // Deletereg(username: String): Observable<InsertedSuccess> {
  //   console.log(`${this.url}registration/Deletereg${username}`);
  //   return this.http.delete<InsertedSuccess>(
  //     `${this.url}registration/Deletereg${username}`
  //   );
  // } 
  // Updatereg(username: String, Details: Interface1) {
  //   return this.http.put(`${this.url}registration/Updatereg${username}`, Details, {
  //     headers: this.headers,
  //   });
  // }


}
  
