import { TestBed } from '@angular/core/testing';

import { UserPracticeService } from './user-practice.service';

describe('UserPracticeService', () => {
  let service: UserPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
