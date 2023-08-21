import {Component, HostListener} from '@angular/core';

interface KeyCode {
  key: string,
  code: string,
  keyCode: string
}

@Component({
  selector: 'app-key-codes',
  templateUrl: './key-codes.component.html',
  styleUrls: ['./key-codes.component.scss']
})
export class KeyCodesComponent {
  keyCodes: KeyCode = {
    key: '',
    code: '',
    keyCode: '',
  };
  clicked: boolean = false;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(codes: KeyCode) {
    this.clicked = true;
    this.keyCodes = codes;
  }
}
