import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAddFormComponent } from './status-add-form.component';

describe('StatusAddFormComponent', () => {
  let component: StatusAddFormComponent;
  let fixture: ComponentFixture<StatusAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
