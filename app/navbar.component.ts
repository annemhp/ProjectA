import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import { UserService } from './user.service';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class NavBarComponent {

    isLoggedIn = false;
    constructor(private _router: Router, private userService: UserService) {
        _router.subscribe(val => this.hideNav(val))
    }

    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    logout() {
        this.userService.logout();
        this._router.navigate(['Login']);
    }

    hideNav(path) {
        if (path == 'login') {
            this.isLoggedIn = false;
        } else {
            this.isLoggedIn = true;
        }

    }
}