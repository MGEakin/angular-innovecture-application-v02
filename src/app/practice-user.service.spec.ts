import { TestBed } from '@angular/core/testing';

import { PracticeUserService } from './practice-user.service';

describe('PracticeUserService', () => {
  let service: PracticeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
