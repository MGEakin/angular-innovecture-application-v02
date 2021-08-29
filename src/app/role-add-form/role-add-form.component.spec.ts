import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAddFormComponent } from './role-add-form.component';

describe('RoleAddFormComponent', () => {
  let component: RoleAddFormComponent;
  let fixture: ComponentFixture<RoleAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
