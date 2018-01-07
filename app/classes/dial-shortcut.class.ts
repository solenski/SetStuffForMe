import {
  VisualSettings,
  DialShortcutSettings
} from '../../app/interfaces/shortcut.interface';
import { ShortcutType } from '../../app/interfaces/shortcut.interface';
import { Shortcut } from '../../app/interfaces/shortcut.interface';
import * as TNSPhone from 'nativescript-phone';

export class DialShortcut implements Shortcut {
  timestamp: number;
  visualSettings: VisualSettings;
  readonly type: ShortcutType = ShortcutType.Dial;
  settings: {
    phoneNumber: string;
    withConfirm?: boolean;
  };

  constructor(settings: DialShortcutSettings, visualSettings: VisualSettings) {
    this.visualSettings = visualSettings;
    this.settings = {
      phoneNumber: settings.phoneNumber.value,
      withConfirm: settings.withConfirm.value
    };
    this.timestamp = Date.now();
  }

  onTap() {
    TNSPhone.dial(this.settings.phoneNumber, this.settings.withConfirm);
  }
}
