import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcCheckboxComponent } from './fc-checkbox.component';

describe('FcCheckboxComponent', () => {
  let component: FcCheckboxComponent;
  let fixture: ComponentFixture<FcCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
