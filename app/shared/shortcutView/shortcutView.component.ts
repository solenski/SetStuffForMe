import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges
} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Shortcut } from "../../interfaces/shortcut.interface";

// Can be possibly changed to OnPush
@Component({
  moduleId: module.id,
  selector: "ns-shortcutView",
  templateUrl: "./shortcutView.component.html",
  styleUrls: ["./shortcutView.component.css"]
})
export class ShortcutViewComponent implements OnInit {
  @Input() shortcuts: Shortcut[];



  private isLoading = true;

  constructor(private router: RouterExtensions) {}

  ngOnInit() {}
}
