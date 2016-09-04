System.register(['angular2/core', 'angular2/router', './issues.service', './department-code', './search-complaint', './search-department', './pagination.component', './status-code'], function(exports_1, context_1) {
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
    var core_1, router_1, issues_service_1, department_code_1, search_complaint_1, search_department_1, pagination_component_1, status_code_1;
    var IssuesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (department_code_1_1) {
                department_code_1 = department_code_1_1;
            },
            function (search_complaint_1_1) {
                search_complaint_1 = search_complaint_1_1;
            },
            function (search_department_1_1) {
                search_department_1 = search_department_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (status_code_1_1) {
                status_code_1 = status_code_1_1;
            }],
        execute: function() {
            IssuesComponent = (function () {
                function IssuesComponent(_service) {
                    this._service = _service;
                    this.pagedPosts = [];
                    this.departmentCode = new department_code_1.DepartmentCode();
                    this.pageSize = 10;
                    this.statusCode = new status_code_1.StatusCode();
                    this.statuses = this.statusCode.statusMap;
                    this.issues = [];
                }
                IssuesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.departmentsMap = this.departmentCode.departmentsMap;
                    this.commentsLoading = true;
                    this._service.getIssues()
                        .subscribe(function (issues) {
                        _this.issuesObj = issues,
                            _this.issues = Object.keys(issues).map(function (key) { return key; }),
                            _this.pagedPosts = _.take(_this.issues, _this.pageSize),
                            _this.commentsLoading = false;
                    });
                };
                IssuesComponent.prototype.onStatusChange = function ($event) {
                    var _this = this;
                    if ($event == "all") {
                        this.ngOnInit();
                    }
                    else {
                        this.commentsLoading = true;
                        this._service.getIssuesByStatus($event)
                            .subscribe(function (issues) {
                            _this.issuesObj = issues,
                                _this.issues = Object.keys(issues).map(function (key) { return key; }),
                                _this.pagedPosts = _.take(_this.issues, _this.pageSize),
                                _this.commentsLoading = false;
                        });
                    }
                };
                IssuesComponent.prototype.onIdSearch = function ($event) {
                    var _this = this;
                    this._service.getIssuesByComplaintId($event)
                        .subscribe(function (issues) {
                        _this.issuesObj = issues,
                            _this.issues = Object.keys(issues).map(function (key) { return key; });
                        _this.pagedPosts = _this.issues;
                    });
                };
                IssuesComponent.prototype.onPageChanged = function (page) {
                    var startIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.issues, startIndex), this.pageSize);
                };
                IssuesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/issues.component.html',
                        providers: [issues_service_1.IssuesService],
                        directives: [router_1.RouterLink, search_department_1.SearchDepartmentComponent, search_complaint_1.SearchComplaintComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], IssuesComponent);
                return IssuesComponent;
            }());
            exports_1("IssuesComponent", IssuesComponent);
        }
    }
});
//# sourceMappingURL=issues.component.js.map