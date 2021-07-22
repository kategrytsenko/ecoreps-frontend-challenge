import { Injectable } from '@angular/core';
import Student from './model/student';
import Task from './model/task';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor() { }

  public makeStudentData(): Student[] {
    return [1,2,3,4].map(n => {　return { name: `Student ${ n }`, mail: `student${ n }@mail.com`, completedTasks: [], incompleteTasks: this.makeIncompleteTaskList()}})
  }

  public makeIncompleteTaskList(): Task[] {
    return [1,2,3].map(n => {　return { id: n, name: `Task ${ n }`, done: false  }})
  }

  
}
