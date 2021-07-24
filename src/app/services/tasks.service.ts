import { Injectable } from '@angular/core';
import Student from '../model/student';
import { find } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor () {
  }

  setDataToStorage (data: Student[]) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getDataFromStorage () {
    const data = localStorage.getItem('data');

    return data ? JSON.parse(data) : [];
  }

  storeTickedTasks (student: Student) {
    const parsedData = this.getDataFromStorage();
    const updatedStudent = find(parsedData, studentInStorage => studentInStorage.name === student.name);

    updatedStudent.completedTasks = student.completedTasks;
    updatedStudent.incompleteTasks = student.incompleteTasks;

    localStorage.setItem('data', JSON.stringify(parsedData));
  }
}
