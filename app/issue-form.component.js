System.register(['angular2/core', 'angular2/common', 'angular2/router', './issues.service', './department-code'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, issues_service_1, department_code_1;
    var IssueFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (department_code_1_1) {
                department_code_1 = department_code_1_1;
            }],
        execute: function() {
            IssueFormComponent = (function () {
                function IssueFormComponent(fb, _router, _issueService) {
                    this._router = _router;
                    this._issueService = _issueService;
                    this.departmentCode = new department_code_1.DepartmentCode();
                    this.departments = [];
                    this.form = fb.group({
                        name: [],
                        mobile: [],
                        place: [],
                        department: [],
                        subject: [],
                        problem: []
                    });
                }
                IssueFormComponent.prototype.ngOnInit = function () {
                    this.departments = this.departmentCode.departments;
                };
                IssueFormComponent.prototype.save = function () {
                    var _this = this;
                    var issue = this.form.value;
                    var today = new Date();
                    issue['date'] = today;
                    issue['status'] = "open";
                    this._issueService.addIssue(issue)
                        .subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['Issues']);
                    });
                };
                IssueFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/issue-form.component.html',
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, issues_service_1.IssuesService])
                ], IssueFormComponent);
                return IssueFormComponent;
            }());
            exports_1("IssueFormComponent", IssueFormComponent);
        }
    }
});
//# sourceMappingURL=issue-form.component.js.map