System.register(['angular2/core', './login.component'], function(exports_1, context_1) {
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
    var core_1, login_component_1;
    var HomePanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            HomePanelComponent = (function () {
                function HomePanelComponent() {
                }
                __decorate([
                    core_1.Input('panelTitle'), 
                    __metadata('design:type', Object)
                ], HomePanelComponent.prototype, "panelTitle", void 0);
                __decorate([
                    core_1.Input('panelText'), 
                    __metadata('design:type', Object)
                ], HomePanelComponent.prototype, "panelText", void 0);
                HomePanelComponent = __decorate([
                    core_1.Component({
                        selector: 'home-panel',
                        template: "<div  [ngStyle]=\"{'width': '200px', 'margin-left':'10%'}\"  \n    class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{panelTitle}}</h3>\n  </div>\n  <div class=\"panel-body\">\n   {{panelText}}\n  </div>\n</div>",
                        directives: [login_component_1.LoginComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomePanelComponent);
                return HomePanelComponent;
            }());
            exports_1("HomePanelComponent", HomePanelComponent);
        }
    }
});
//# sourceMappingURL=home-panel.component.js.map