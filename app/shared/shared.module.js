"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shortcutView_component_1 = require("./shortcutView/shortcutView.component");
var genericShortcut_component_1 = require("./shortcutView/genericShortcutView/genericShortcut.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [shortcutView_component_1.ShortcutViewComponent, genericShortcut_component_1.GenericShortcutComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            exports: [shortcutView_component_1.ShortcutViewComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGdGQUE4RTtBQUM5RSwwR0FBd0c7QUFVeEc7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQU54QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyw4Q0FBcUIsRUFBRSxvREFBd0IsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyw4Q0FBcUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTaG9ydGN1dFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9zaG9ydGN1dFZpZXcvc2hvcnRjdXRWaWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHZW5lcmljU2hvcnRjdXRDb21wb25lbnQgfSBmcm9tIFwiLi9zaG9ydGN1dFZpZXcvZ2VuZXJpY1Nob3J0Y3V0Vmlldy9nZW5lcmljU2hvcnRjdXQuY29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU2hvcnRjdXRWaWV3Q29tcG9uZW50LCBHZW5lcmljU2hvcnRjdXRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxuICBleHBvcnRzOiBbU2hvcnRjdXRWaWV3Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XHJcbiJdfQ==