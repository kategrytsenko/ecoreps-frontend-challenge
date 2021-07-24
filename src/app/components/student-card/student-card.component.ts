import { Component, OnInit, Input } from '@angular/core';
import Student from '../../model/student';
import Task from '../../model/task';
import { concat, filter, orderBy } from 'lodash';
import { TasksService } from '../../services/tasks.service';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  studentTasks: Task[] = [];

  @Input() student!: Student;

  constructor (private tasksService: TasksService) {
  }

  ngOnInit (): void {
    this.studentTasks = concat(this.student.completedTasks, this.student.incompleteTasks);
  }

  toggleTask (checked: boolean, task: Task) {
    task.done = checked;

    if (checked) {
      this.student.completedTasks.push(task);
      this.student.incompleteTasks = filter(this.student.incompleteTasks, incompleteTask => incompleteTask.id !== task.id);
    } else {
      this.student.incompleteTasks.push(task);
      this.student.completedTasks = filter(this.student.completedTasks, completedTask => completedTask.id !== task.id);
    }

    this.tasksService.storeTickedTasks(this.student);

    this.studentTasks = orderBy(this.studentTasks, 'done', 'desc');
  }

}
