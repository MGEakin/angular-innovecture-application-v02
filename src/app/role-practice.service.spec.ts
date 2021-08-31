import { TestBed } from '@angular/core/testing';

import { RolePracticeService } from './role-practice.service';

describe('RolePracticeService', () => {
  let service: RolePracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolePracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
