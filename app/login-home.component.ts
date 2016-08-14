import {Component, OnInit} from 'angular2/core';


import { LoginComponent } from './login.component';

@Component({
    template: '<login> </login>',
    directives:[LoginComponent]
})
export class LoginHomeComponent  {
}