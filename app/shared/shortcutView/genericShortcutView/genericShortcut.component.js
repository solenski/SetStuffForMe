"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var GenericShortcutComponent = (function () {
    function GenericShortcutComponent(router) {
        this.router = router;
        this.isLoading = true;
    }
    GenericShortcutComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericShortcutComponent.prototype, "shortcut", void 0);
    GenericShortcutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-genericShortcut',
            templateUrl: './genericShortcut.component.html',
            styleUrls: ['./genericShortcut.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], GenericShortcutComponent);
    return GenericShortcutComponent;
}());
exports.GenericShortcutComponent = GenericShortcutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpY1Nob3J0Y3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlbmVyaWNTaG9ydGN1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0Usc0RBQThEO0FBVTlEO0lBS0ksa0NBQ1ksTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFINUIsY0FBUyxHQUFHLElBQUksQ0FBQTtJQUlwQixDQUFDO0lBRUwsMkNBQVEsR0FBUixjQUFhLENBQUM7SUFSTDtRQUFSLFlBQUssRUFBRTs7OERBQXFCO0lBRHBCLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO3lDQU9zQix5QkFBZ0I7T0FOM0Isd0JBQXdCLENBWXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgU2hvcnRjdXQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3Nob3J0Y3V0LmludGVyZmFjZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLWdlbmVyaWNTaG9ydGN1dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dlbmVyaWNTaG9ydGN1dC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2VuZXJpY1Nob3J0Y3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmljU2hvcnRjdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHNob3J0Y3V0IDogU2hvcnRjdXQ7XG5cbiAgICBwcml2YXRlIGlzTG9hZGluZyA9IHRydWVcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuXG59XG4iXX0=