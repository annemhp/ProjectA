System.register(['angular2/core', './status-code'], function(exports_1, context_1) {
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
    var core_1, status_code_1;
    var UpdateListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (status_code_1_1) {
                status_code_1 = status_code_1_1;
            }],
        execute: function() {
            UpdateListComponent = (function () {
                function UpdateListComponent() {
                    this.statusCode = new status_code_1.StatusCode();
                    this.statuses = this.statusCode.statusMap;
                }
                __decorate([
                    core_1.Input('updates'), 
                    __metadata('design:type', Object)
                ], UpdateListComponent.prototype, "updates", void 0);
                UpdateListComponent = __decorate([
                    core_1.Component({
                        selector: 'update-list',
                        template: "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h2 class=\"panel-title\">Updates </h2>\n  </div>\n  <div *ngIf=\"updates!=null\" class=\"panel-body\">\n  <table class=\"table table-bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Date</th>\n\t\t\t<th>Message</th>\n            <th>Status</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"#update of updates\">\n\t\t\t<td>{{ update.date}}</td>\n\t\t\t<td>{{ update.message }}</td>\n            <td>{{ statuses[update.status] }}</td>\n\t\t</tr>\n\t</tbody>\n</table>\n  </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UpdateListComponent);
                return UpdateListComponent;
            }());
            exports_1("UpdateListComponent", UpdateListComponent);
        }
    }
});
//# sourceMappingURL=update-list.component.js.map