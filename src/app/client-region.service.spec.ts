import { TestBed } from '@angular/core/testing';

import { ClientRegionService } from './client-region.service';

describe('ClientRegionService', () => {
  let service: ClientRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
