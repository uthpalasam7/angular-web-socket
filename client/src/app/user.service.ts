import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
    { id: 3, username: 'user3', password: 'pass3' },
    { id: 4, username: 'user4', password: 'pass4' },
    { id: 5, username: 'user5', password: 'pass5' },
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  validateUser(username: string, password: string) {
    return this.users.find(user => user.username === username && user.password === password);
  }
}
