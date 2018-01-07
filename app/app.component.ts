import { Component } from "@angular/core";
import * as TNSPhone from "nativescript-phone";
import { Telephony } from "nativescript-telephony";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar">
    <ActivityIndicator *ngIf="isLoading " [busy]="isLoading " class="activity-indicator "></ActivityIndicator>
    <ns-shortcutView [shortcuts]="shortcuts"> </ns-shortcutView>    
  `
})
export class AppComponent {
  isLoading = true;
  /**
   *
   */
  constructor(private store: AngularFirestore) {
    // store.collection("users");
  }
  test;
  // Your TypeScript logic goes here
  async onTap() {
    this.test = await Telephony();
    console.log(this.test);
    TNSPhone.dial("721878555", true);
  }
}
