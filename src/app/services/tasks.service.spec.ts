import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setDataToStorage should set data to the local storage', function () {
    let setItemSpy = spyOn(localStorage, 'setItem');

    service.setDataToStorage([{name: 'test', mail: 'test@email', completedTasks: [], incompleteTasks: []}]);

    expect(setItemSpy).toHaveBeenCalledWith('data', jasmine.any(String));
  });

  it('setDataToStorage should get data from the local storage', function () {
    let getItemSpy = spyOn(localStorage, 'getItem');

    service.getDataFromStorage();

    expect(getItemSpy).toHaveBeenCalledWith('data');
  });
});
