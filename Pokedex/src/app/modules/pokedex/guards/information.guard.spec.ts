import { TestBed } from '@angular/core/testing';

import { InformationGuard } from './information.guard';

describe('InformationGuard', () => {
  let guard: InformationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InformationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
