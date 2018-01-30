import { TestBed, inject } from '@angular/core/testing';

import { AGuardService } from './a-guard.service';

describe('AGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AGuardService]
    });
  });

  it('should be created', inject([AGuardService], (service: AGuardService) => {
    expect(service).toBeTruthy();
  }));
});
