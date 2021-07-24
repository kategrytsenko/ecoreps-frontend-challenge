import { Component, OnInit } from '@angular/core';
import { DataproviderService } from './dataprovider.service';
import Student from './model/student';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Student Tasks';
  public data: Student[] = [];
  public dataFromStorage: Student[] = [];

  constructor (private dataProvider: DataproviderService, private tasksService: TasksService) {
  }

  ngOnInit (): void {
    this.dataFromStorage = this.tasksService.getDataFromStorage();
    this.data = this.dataFromStorage.length ? this.dataFromStorage : this.dataProvider.makeStudentData();

    if (!this.dataFromStorage.length) {
      this.tasksService.setDataToStorage(this.data);
    }
  }
}
