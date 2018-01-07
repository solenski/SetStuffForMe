"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TNSPhone = require("nativescript-phone");
var AppComponent = (function () {
    function AppComponent() {
    }
    // Your TypeScript logic goes here
    AppComponent.prototype.onTap = function () {
        TNSPhone.dial('721878555', false);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <!-- <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar> -->\n    <!-- Your UI components go here -->\n    <WrapLayout>\n      <Button (tap)=\"onTap()\" ></Button>\n    </WrapLayout>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkNBQStDO0FBWS9DO0lBQUE7SUFNQSxDQUFDO0lBTEMsa0NBQWtDO0lBQ2xDLDRCQUFLLEdBQUw7UUFFRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBTFUsWUFBWTtRQVZ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDRNQU1UO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj4gLS0+XG4gICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cbiAgICA8V3JhcExheW91dD5cbiAgICAgIDxCdXR0b24gKHRhcCk9XCJvblRhcCgpXCIgPjwvQnV0dG9uPlxuICAgIDwvV3JhcExheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIG9uVGFwKClcbiAge1xuICAgIFROU1Bob25lLmRpYWwoJzcyMTg3ODU1NScsIGZhbHNlKVxuICB9XG59XG4iXX0=