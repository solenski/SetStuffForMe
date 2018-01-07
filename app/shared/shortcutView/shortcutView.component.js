"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// Can be possibly changed to OnPush
var ShortcutViewComponent = (function () {
    function ShortcutViewComponent(router) {
        this.router = router;
        this.isLoading = true;
    }
    ShortcutViewComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ShortcutViewComponent.prototype, "shortcuts", void 0);
    ShortcutViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-shortcutView",
            templateUrl: "./shortcutView.component.html",
            styleUrls: ["./shortcutView.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ShortcutViewComponent);
    return ShortcutViewComponent;
}());
exports.ShortcutViewComponent = ShortcutViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXRWaWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3J0Y3V0Vmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FPdUI7QUFDdkIsc0RBQStEO0FBRy9ELG9DQUFvQztBQU9wQztJQU9FLCtCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUZwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRXNCLENBQUM7SUFFaEQsd0NBQVEsR0FBUixjQUFZLENBQUM7SUFSSjtRQUFSLFlBQUssRUFBRTs7NERBQXVCO0lBRHBCLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDO3lDQVE0Qix5QkFBZ0I7T0FQakMscUJBQXFCLENBVWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNob3J0Y3V0IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvc2hvcnRjdXQuaW50ZXJmYWNlXCI7XG5cbi8vIENhbiBiZSBwb3NzaWJseSBjaGFuZ2VkIHRvIE9uUHVzaFxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcIm5zLXNob3J0Y3V0Vmlld1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Nob3J0Y3V0Vmlldy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2hvcnRjdXRWaWV3LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2hvcnRjdXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvcnRjdXRzOiBTaG9ydGN1dFtdO1xuXG5cblxuICBwcml2YXRlIGlzTG9hZGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19