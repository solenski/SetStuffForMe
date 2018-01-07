import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from "./app.component";
import { SharedModule } from "../app/shared/shared.module";

const firebase = {
  apiKey: "AIzaSyCYEq5Pn26g4_2qshZlY-j3gEfdNYdzdOU",
  authDomain: "setstuffforme.firebaseapp.com",
  databaseURL: "https://setstuffforme.firebaseio.com",
  projectId: "setstuffforme",
  storageBucket: "setstuffforme.appspot.com",
  messagingSenderId: "1087769333837"
};

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule, 
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    SharedModule, ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
