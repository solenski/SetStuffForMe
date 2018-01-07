import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
    moduleId: module.id,
    selector: 'ns-shortcut',
    templateUrl: './shortcut.component.html',
    styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef

    private isLoading = true

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }


}
