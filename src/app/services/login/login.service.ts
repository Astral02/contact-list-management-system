import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {
  isLoggedIn = false;
  isAdmin = false;
  userName: string;
  user: User;

  constructor(private http: HttpClient) { }

  loginUser(user: User) {
    return this.http.post<User>('http://localhost:9001/login', user);
  }
}
