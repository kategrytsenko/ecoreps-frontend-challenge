import { Component, OnInit, Input } from '@angular/core';
import Student from '../../model/student';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  @Input() student!: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
