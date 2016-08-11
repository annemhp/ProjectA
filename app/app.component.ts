import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

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

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/issues', name: 'Issues', component: IssuesComponent },
    { path: '/issues/new', name: 'NewIssue', component: IssueFormComponent },
    { path: '/users/:id', name: 'IssueDetails', component: IssueDetailsComponent },
    { path: '/reports', name: 'Reports', component: ReportsComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent }

])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }