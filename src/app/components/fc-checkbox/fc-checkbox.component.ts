import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fc-checkbox',
  templateUrl: './fc-checkbox.component.html',
  styleUrls: ['./fc-checkbox.component.scss']
})
export class FcCheckboxComponent implements OnInit {
  @Output() onCheck: EventEmitter<boolean> = new EventEmitter();

  @Input() label!: string;
  @Input() checked!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChanged (e: any) {
    this.onCheck.emit(e.target.checked);
  }
}
