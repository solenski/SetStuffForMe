"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ShortcutComponent = (function () {
    function ShortcutComponent(router) {
        this.router = router;
        this.isLoading = true;
    }
    ShortcutComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.ViewChild('scrollView'),
        __metadata("design:type", core_1.ElementRef)
    ], ShortcutComponent.prototype, "scrollView", void 0);
    ShortcutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-shortcut',
            templateUrl: './shortcut.component.html',
            styleUrls: ['./shortcut.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ShortcutComponent);
    return ShortcutComponent;
}());
exports.ShortcutComponent = ShortcutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnRjdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLHNEQUE4RDtBQVM5RDtJQU1JLDJCQUNZLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSDVCLGNBQVMsR0FBRyxJQUFJLENBQUE7SUFJcEIsQ0FBQztJQUVMLG9DQUFRLEdBQVIsY0FBYSxDQUFDO0lBUlc7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7eURBQUE7SUFGdEMsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQVFzQix5QkFBZ0I7T0FQM0IsaUJBQWlCLENBYTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXNob3J0Y3V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2hvcnRjdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Nob3J0Y3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9ydGN1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxWaWV3Jykgc2Nyb2xsVmlldzogRWxlbWVudFJlZlxuXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmcgPSB0cnVlXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cblxufVxuIl19