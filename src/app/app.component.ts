import { Component } from '@angular/core';
import { DataproviderService } from './dataprovider.service';
import Student from './model/student';
import Task from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Student Tasks';
  public data: Student[];

 constructor(dataProvider: DataproviderService){
   this.data = dataProvider.makeStudentData()
 }

}
