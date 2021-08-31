import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePracticesComponent } from './role-practices.component';

describe('RolePracticesComponent', () => {
  let component: RolePracticesComponent;
  let fixture: ComponentFixture<RolePracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
