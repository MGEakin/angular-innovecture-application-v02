import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegionComponent } from './client-regions.component';

describe('ClientRegionComponent', () => {
  let component: ClientRegionComponent;
  let fixture: ComponentFixture<ClientRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
