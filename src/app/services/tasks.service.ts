import { Injectable } from '@angular/core';
import Student from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  storeTickedTasks (student: Student) {
    localStorage.setItem(`${student.name} completedTasks:`, JSON.stringify(student.completedTasks));
  }
}
