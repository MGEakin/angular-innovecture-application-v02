import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningAddFormComponent } from './opening-add-form.component';

describe('OpeningAddFormComponent', () => {
  let component: OpeningAddFormComponent;
  let fixture: ComponentFixture<OpeningAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
