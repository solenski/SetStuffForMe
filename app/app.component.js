"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TNSPhone = require("nativescript-phone");
var nativescript_telephony_1 = require("nativescript-telephony");
var firestore_1 = require("angularfire2/firestore");
var AppComponent = (function () {
    /**
     *
     */
    function AppComponent(store) {
        this.store = store;
        this.isLoading = true;
        store.collection("users");
    }
    // Your TypeScript logic goes here
    AppComponent.prototype.onTap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, nativescript_telephony_1.Telephony()];
                    case 1:
                        _a.test = _b.sent();
                        console.log(this.test);
                        TNSPhone.dial("721878555", true);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\">\n    <ActivityIndicator *ngIf=\"isLoading \" [busy]=\"isLoading \" class=\"activity-indicator \"></ActivityIndicator>\n    \n    </ActionBar>\n    <!-- Your UI components go here -->\n    <WrapLayout>\n    <Button text=\"&#xf48a; Add Scene\" class=\"btnIcon\" > </Button>    \n    </WrapLayout>\n  "
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkNBQStDO0FBQy9DLGlFQUFtRDtBQUNuRCxvREFBMEQ7QUFlMUQ7SUFFRTs7T0FFRztJQUNILHNCQUFvQixLQUF1QjtRQUF2QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUozQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBS2YsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0NBQWtDO0lBQzVCLDRCQUFLLEdBQVg7Ozs7Ozt3QkFDRSxLQUFBLElBQUksQ0FBQTt3QkFBUSxxQkFBTSxrQ0FBUyxFQUFFLEVBQUE7O3dCQUE3QixHQUFLLElBQUksR0FBRyxTQUFpQixDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ2xDO0lBZFUsWUFBWTtRQWJ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG9XQVNUO1NBQ0YsQ0FBQzt5Q0FNMkIsNEJBQWdCO09BTGhDLFlBQVksQ0FleEI7SUFBRCxtQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gXCJuYXRpdmVzY3JpcHQtcGhvbmVcIjtcbmltcG9ydCB7IFRlbGVwaG9ueSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXBob255XCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSBcImFuZ3VsYXJmaXJlMi9maXJlc3RvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICA8QWN0aXZpdHlJbmRpY2F0b3IgKm5nSWY9XCJpc0xvYWRpbmcgXCIgW2J1c3ldPVwiaXNMb2FkaW5nIFwiIGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yIFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgXG4gICAgPC9BY3Rpb25CYXI+XG4gICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cbiAgICA8V3JhcExheW91dD5cbiAgICA8QnV0dG9uIHRleHQ9XCImI3hmNDhhOyBBZGQgU2NlbmVcIiBjbGFzcz1cImJ0bkljb25cIiA+IDwvQnV0dG9uPiAgICBcbiAgICA8L1dyYXBMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgaXNMb2FkaW5nID0gdHJ1ZTtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlKSB7XG4gICAgc3RvcmUuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuICB9XG4gIHRlc3Q7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbiAgYXN5bmMgb25UYXAoKSB7XG4gICAgdGhpcy50ZXN0ID0gYXdhaXQgVGVsZXBob255KCk7XG4gICAgY29uc29sZS5sb2codGhpcy50ZXN0KTtcbiAgICBUTlNQaG9uZS5kaWFsKFwiNzIxODc4NTU1XCIsIHRydWUpO1xuICB9XG59XG4iXX0=