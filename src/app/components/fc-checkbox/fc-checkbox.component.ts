import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fc-checkbox',
  templateUrl: './fc-checkbox.component.html',
  styleUrls: ['./fc-checkbox.component.scss']
})
export class FcCheckboxComponent {
  @Output() onCheck: EventEmitter<boolean> = new EventEmitter();

  @Input() label!: string;
  @Input() checked!: boolean;

  constructor () {
  }

  onCheckboxChanged (e: any) {
    this.onCheck.emit(e.target.checked);
  }
}
