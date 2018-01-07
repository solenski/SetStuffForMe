import { Component } from "@angular/core";
import * as TNSPhone from 'nativescript-phone';

@Component({
  selector: "my-app",
  template: `
    <!-- <ActionBar title="My App" class="action-bar"></ActionBar> -->
    <!-- Your UI components go here -->
    <WrapLayout>
      <Button (tap)="onTap()" ></Button>
    </WrapLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  onTap()
  {
    TNSPhone.dial('721878555', false)
  }
}
