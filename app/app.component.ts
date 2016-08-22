import {Component ,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import { LoginComponent } from './login.component';
import {NavBarComponent} from './navbar.component'
import {HomeComponent} from './home.component';
import {IssuesComponent} from './issues.component';
import {IssueFormComponent} from './issue-form.component';
import {IssueDetailsComponent} from './issue-details.component'
import {NotFoundComponent} from './not-found.component';
import {UpdateListComponent} from './update-list.component';

import {ReportsComponent} from './reports.component';
import {UpdateFormComponent} from './update-form.component'
import {SearchDepartmentComponent} from './search-department';
import {SearchComplaintComponent} from './search-complaint';

@RouteConfig([
    { path: '/', component: LoginComponent, name: 'LoginHome', useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/issues', name: 'Issues', component: IssuesComponent },
    { path: '/issues/new', name: 'NewIssue', component: IssueFormComponent },
    { path: '/users/:id', name: 'IssueDetails', component: IssueDetailsComponent },
    { path: '/reports', name: 'Reports', component: ReportsComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Login'] },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent }

])

@Component({
    selector: 'my-app',
    template: `
    
        <navbar ></navbar>
        <div class="container"  [ngStyle]="{'margin':'0px' , 'padding': '0px'}" >
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {

 }