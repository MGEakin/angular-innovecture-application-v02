import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPracticesComponent } from './user-practices.component';

describe('UserPracticesComponent', () => {
  let component: UserPracticesComponent;
  let fixture: ComponentFixture<UserPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
