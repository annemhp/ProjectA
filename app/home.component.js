System.register(['angular2/core', './home-panel.component', './issues.service'], function(exports_1, context_1) {
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
    var core_1, home_panel_component_1, issues_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_panel_component_1_1) {
                home_panel_component_1 = home_panel_component_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_service) {
                    this._service = _service;
                    this.panelTitle1 = 'Received Complaints';
                    this.panelText1 = 0;
                    this.panelTitle2 = 'Resolved Complaints';
                    this.panelText2 = 0;
                    this.panelTitle3 = 'Pending Complaints';
                    this.panelText3 = 0;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getReport()
                        .subscribe(function (report) {
                        _this.reportObj = report,
                            _this.panelText1 = _this.reportObj['all'].open + _this.reportObj['all'].inprogress
                                + _this.reportObj['all'].invalid + _this.reportObj['all'].resolved;
                        _this.panelText2 = _this.reportObj['all'].resolved;
                        _this.panelText3 = _this.panelText1 - _this.panelText2;
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        template: "<body  [ngStyle] =\"{'background-image': 'url(../assets/images/FinalHome.png)' \n                    , 'background-size':'cover', 'min-width': '1265px'} \">\n                    <home-panel  [panelTitle]=panelTitle1  [panelText]=panelText1 [ngStyle] =\n                    \"{'position': 'absolute','bottom':'65%' ,'left':'10%'}\"> </home-panel>\n                    <home-panel  [panelTitle]=panelTitle2  [panelText]=panelText2 [ngStyle] =\n                    \"{'position': 'absolute','bottom':'45%' ,'left':'10%'}\"> </home-panel>\n                    <home-panel  [panelTitle]=panelTitle3  [panelText]=panelText3 [ngStyle] =\n                    \"{'position': 'absolute','bottom':'25%' ,'left':'10%'}\"> </home-panel>\n                     \n                    </body>",
                        directives: [home_panel_component_1.HomePanelComponent],
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map