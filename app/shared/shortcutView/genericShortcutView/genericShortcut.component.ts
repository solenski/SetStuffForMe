import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Shortcut } from '../../../interfaces/shortcut.interface';


@Component({
    moduleId: module.id,
    selector: 'ns-genericShortcut',
    templateUrl: './genericShortcut.component.html',
    styleUrls: ['./genericShortcut.component.css']
})
export class GenericShortcutComponent implements OnInit {
    @Input() shortcut : Shortcut;

    private isLoading = true

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }


}
