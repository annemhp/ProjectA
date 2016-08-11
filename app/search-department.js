System.register(['angular2/core', 'angular2/common', 'angular2/router', './issues.service', './status-code'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, issues_service_1, status_code_1;
    var SearchDepartmentComponent;
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
            function (status_code_1_1) {
                status_code_1 = status_code_1_1;
            }],
        execute: function() {
            SearchDepartmentComponent = (function () {
                function SearchDepartmentComponent(fb, _service, _router) {
                    this._service = _service;
                    this._router = _router;
                    this.statusCode = new status_code_1.StatusCode();
                    this.statuses = this.statusCode.statuses;
                    this.status = new core_1.EventEmitter();
                    this.form = fb.group({
                        status: []
                    });
                }
                SearchDepartmentComponent.prototype.search = function () {
                    var update = this.form.value;
                    this.status.emit(update['status']);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchDepartmentComponent.prototype, "status", void 0);
                SearchDepartmentComponent = __decorate([
                    core_1.Component({
                        selector: 'search-department',
                        templateUrl: 'app/search-department.html',
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, issues_service_1.IssuesService, router_1.Router])
                ], SearchDepartmentComponent);
                return SearchDepartmentComponent;
            }());
            exports_1("SearchDepartmentComponent", SearchDepartmentComponent);
        }
    }
});
//# sourceMappingURL=search-department.js.map