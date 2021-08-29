import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAddFormComponent } from './assignment-add-form.component';

describe('AssignmentAddFormComponent', () => {
  let component: AssignmentAddFormComponent;
  let fixture: ComponentFixture<AssignmentAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
