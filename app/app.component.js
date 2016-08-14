System.register(['angular2/core', 'angular2/router', './login-home.component', './login.component', './navbar.component', './home.component', './issues.component', './issue-form.component', './issue-details.component', './not-found.component', './reports.component', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_home_component_1, login_component_1, navbar_component_1, home_component_1, issues_component_1, issue_form_component_1, issue_details_component_1, not_found_component_1, reports_component_1, user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_home_component_1_1) {
                login_home_component_1 = login_home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (issues_component_1_1) {
                issues_component_1 = issues_component_1_1;
            },
            function (issue_form_component_1_1) {
                issue_form_component_1 = issue_form_component_1_1;
            },
            function (issue_details_component_1_1) {
                issue_details_component_1 = issue_details_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (reports_component_1_1) {
                reports_component_1 = reports_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(userService) {
                    this.userService = userService;
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: login_home_component_1.LoginHomeComponent, name: 'LoginHome', useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/issues', name: 'Issues', component: issues_component_1.IssuesComponent },
                        { path: '/issues/new', name: 'NewIssue', component: issue_form_component_1.IssueFormComponent },
                        { path: '/users/:id', name: 'IssueDetails', component: issue_details_component_1.IssueDetailsComponent },
                        { path: '/reports', name: 'Reports', component: reports_component_1.ReportsComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <navbar ></navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map