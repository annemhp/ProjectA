import {Component, OnInit} from 'angular2/core';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';
import { UserService } from './user.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  invalidCredentials = false;
  form = new ControlGroup({
    username: new Control('', Validators.required),
    password: new Control('', Validators.required)

  });
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.invalidCredentials = false;
    if(this.userService.isLoggedIn() ){
        this.router.navigate(['Home']);
    }
  }


  signIn() {

    this.invalidCredentials = false;

    var email = this.form.value.username;
    var password = this.form.value.password;
    var result = this.userService.login(email, password);
    if (result) {
      this.router.navigate(['Home']);
    } else {
      this.invalidCredentials = true;
    }

  }

}