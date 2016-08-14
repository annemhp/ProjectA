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
    constructor(private _router: Router,private userService: UserService) {
    }

    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    logout(){
        this.userService.logout();
         this._router.navigate(['Login']);
    }
}