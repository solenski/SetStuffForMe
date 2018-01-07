import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ShortcutViewComponent } from "./shortcutView/shortcutView.component";
import { GenericShortcutComponent } from "./shortcutView/genericShortcutView/genericShortcut.component";



@NgModule({
  declarations: [ShortcutViewComponent, GenericShortcutComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ShortcutViewComponent]
})
export class SharedModule {}
