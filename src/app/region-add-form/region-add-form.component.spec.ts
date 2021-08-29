import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionAddFormComponent } from './region-add-form.component';

describe('RegionAddFormComponent', () => {
  let component: RegionAddFormComponent;
  let fixture: ComponentFixture<RegionAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
