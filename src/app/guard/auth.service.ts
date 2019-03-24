import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  isLogin: boolean = false;

  checkLogin() {
    if (localStorage.getItem('currentUser')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
  constructor() { }
}
