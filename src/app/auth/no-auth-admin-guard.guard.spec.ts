import { TestBed } from '@angular/core/testing';

import { NoAuthAdminGuardGuard } from './no-auth-admin-guard.guard';

describe('NoAuthAdminGuardGuard', () => {
  let guard: NoAuthAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAuthAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
