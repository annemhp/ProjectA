// user.service.ts
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class UserService {
  private loggedIn = false;
  private res: any;
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    this.res = new Object();
    if (email == "rakesh@mymla.com" && password == "asdf123") {
      this.res.success = true;
      this.res.auth_token = this.guid();
      localStorage.setItem('auth_token', this.res.auth_token);
      this.loggedIn = true;
    }
    return this.res.success;

  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}