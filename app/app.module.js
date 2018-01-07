"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angularfire2_1 = require("angularfire2");
var firestore_1 = require("angularfire2/firestore");
var app_component_1 = require("./app.component");
var shared_module_1 = require("../app/shared/shared.module");
var firebase = {
    apiKey: "AIzaSyCYEq5Pn26g4_2qshZlY-j3gEfdNYdzdOU",
    authDomain: "setstuffforme.firebaseapp.com",
    databaseURL: "https://setstuffforme.firebaseio.com",
    projectId: "setstuffforme",
    storageBucket: "setstuffforme.appspot.com",
    messagingSenderId: "1087769333837"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                angularfire2_1.AngularFireModule.initializeApp(firebase),
                firestore_1.AngularFirestoreModule,
                shared_module_1.SharedModule,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxvREFBZ0U7QUFHaEUsaURBQStDO0FBQy9DLDZEQUEyRDtBQUUzRCxJQUFNLFFBQVEsR0FBRztJQUNmLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFNBQVMsRUFBRSxlQUFlO0lBQzFCLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUMsaUJBQWlCLEVBQUUsZUFBZTtDQUNuQyxDQUFDO0FBWUY7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQVZyQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsZ0NBQWlCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDekMsa0NBQXNCO2dCQUN0Qiw0QkFBWTthQUFHO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdhbmd1bGFyZmlyZTInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXJmaXJlMi9maXJlc3RvcmUnO1xuXG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcblxuY29uc3QgZmlyZWJhc2UgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDWUVxNVBuMjZnNF8ycXNoWmxZLWozZ0VmZE5ZZHpkT1VcIixcbiAgYXV0aERvbWFpbjogXCJzZXRzdHVmZmZvcm1lLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NldHN0dWZmZm9ybWUuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInNldHN0dWZmZm9ybWVcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzZXRzdHVmZmZvcm1lLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwODc3NjkzMzM4MzdcIlxufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgXG4gICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZSksXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=