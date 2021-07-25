import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardComponent } from './student-card.component';

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleTask', () => {
    it('should add task to the completed if checked === true', function () {
      let storeTickedTasksSpy =  spyOn(component['tasksService'], 'storeTickedTasks');

      const task = { id: 1, name: 'Task 1', done: false };

      component.student = { name: 'Student 1', completedTasks: [], incompleteTasks: [task], mail: 'student1@mail.com' };
      component.studentTasks = [task];
      component.toggleTask(true, task);

      expect(task.done).toEqual(true);
      expect(storeTickedTasksSpy).toHaveBeenCalled();
    });
  });
});
