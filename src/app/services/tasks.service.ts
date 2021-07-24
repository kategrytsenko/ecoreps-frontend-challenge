import { Injectable } from '@angular/core';
import Student from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  // TODO: do we need this?
  getTickedTasks (student: Student) {
    return localStorage.getItem(`${student.name} completedTasks:`);
  }

  storeTickedTasks (student: Student) {
    localStorage.setItem(`${student.name} completedTasks:`, JSON.stringify(student.completedTasks));
  }
}
