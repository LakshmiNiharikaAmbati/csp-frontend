import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private firstname: string;

  setUserName(name: string): void {
    this.firstname = name;
  }

  getUserName(): string {
    return this.firstname;
  }

  constructor() {}
}



