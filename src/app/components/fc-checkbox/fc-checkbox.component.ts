import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fc-checkbox',
  templateUrl: './fc-checkbox.component.html',
  styleUrls: ['./fc-checkbox.component.scss']
})
export class FcCheckboxComponent implements OnInit {
  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
