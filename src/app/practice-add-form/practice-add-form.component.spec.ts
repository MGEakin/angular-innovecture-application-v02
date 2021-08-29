import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAddFormComponent } from './practice-add-form.component';

describe('PracticeAddFormComponent', () => {
  let component: PracticeAddFormComponent;
  let fixture: ComponentFixture<PracticeAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
