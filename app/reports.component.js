System.register(['angular2/core', './issues.service', './department-code'], function(exports_1, context_1) {
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
    var core_1, issues_service_1, department_code_1;
    var ReportsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (department_code_1_1) {
                department_code_1 = department_code_1_1;
            }],
        execute: function() {
            ReportsComponent = (function () {
                function ReportsComponent(_service) {
                    this._service = _service;
                    this.departmentCode = new department_code_1.DepartmentCode();
                    this.departmentsMap = this.departmentCode.departmentsMap;
                    this.departmentsMap['all'] = 'All Departments';
                }
                ReportsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getReport()
                        .subscribe(function (report) {
                        _this.reportObj = report;
                        _this.departments = Object.keys(report);
                    });
                };
                ReportsComponent = __decorate([
                    core_1.Component({
                        selector: 'reports',
                        template: "<table [ngStyle] =\n                    \"{'margin-left':'6%', 'margin-top':'5%'}\"class=\"table table-bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Department</th>\n\t\t\t<th>Open</th>\n\t\t\t<th>InProgress</th>\n\t\t\t<th>Resolved</th>\n            <th>Invalid</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"#department of departments\">\n\t\t\t<td>{{ departmentsMap[department]}}</td>\n\t\t\t<td>{{ reportObj[department].open }}</td>\n\t\t\t<td>{{ reportObj[department].inprogress }}</td>\n\t\t\t<td>{{ reportObj[department].resolved }}</td>\n\t\t\t<td>{{ reportObj[department].invalid }}</td>\n\t\t</tr>\n\t</tbody>\n</table>\n<div [ngStyle] =\n          \"{'margin-left':'6%', 'margin-top':'1%'}\" >\n\t\t*Reports will be update daily midnight<div>",
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], ReportsComponent);
                return ReportsComponent;
            }());
            exports_1("ReportsComponent", ReportsComponent);
        }
    }
});
//# sourceMappingURL=reports.component.js.map