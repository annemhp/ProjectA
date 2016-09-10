System.register(['angular2/core', 'angular2/router', './issues.service', './update-form.component', './update-list.component', './status-code'], function(exports_1, context_1) {
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
    var core_1, router_1, issues_service_1, update_form_component_1, update_list_component_1, status_code_1;
    var IssueDetailsComponent;
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
            function (update_form_component_1_1) {
                update_form_component_1 = update_form_component_1_1;
            },
            function (update_list_component_1_1) {
                update_list_component_1 = update_list_component_1_1;
            },
            function (status_code_1_1) {
                status_code_1 = status_code_1_1;
            }],
        execute: function() {
            IssueDetailsComponent = (function () {
                function IssueDetailsComponent(_routeParams, _service) {
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this.isEdit = false;
                    this.statusCode = new status_code_1.StatusCode();
                    this.statuses = this.statusCode.statusMap;
                }
                IssueDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.statuses = this.statusCode.statusMap;
                    this.issueId = this._routeParams.get("id");
                    this._service.getIssue(this.issueId)
                        .subscribe(function (issue) {
                        _this.issue = issue,
                            _this.showImage(issue.imageUri);
                    });
                    this._service.getUpdate(this.issueId)
                        .subscribe(function (updates) {
                        _this.updates = (updates) ? Object.keys(updates).map(function (key) { return updates[key]; }) : null;
                    });
                };
                IssueDetailsComponent.prototype.toggle = function () {
                    this.isEdit = !this.isEdit;
                };
                IssueDetailsComponent.prototype.showImage = function (imageUrl) {
                    console.log(imageUrl);
                    //const storageRef = firebase.storage().ref().child(imageUrl);
                    //console.log(storageRef);
                    //storageRef.getDownloadURL().then(url=> this.image=url);
                };
                IssueDetailsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/issue-details.component.html',
                        providers: [issues_service_1.IssuesService],
                        directives: [update_form_component_1.UpdateFormComponent, update_list_component_1.UpdateListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, issues_service_1.IssuesService])
                ], IssueDetailsComponent);
                return IssueDetailsComponent;
            }());
            exports_1("IssueDetailsComponent", IssueDetailsComponent);
        }
    }
});
//# sourceMappingURL=issue-details.component.js.map