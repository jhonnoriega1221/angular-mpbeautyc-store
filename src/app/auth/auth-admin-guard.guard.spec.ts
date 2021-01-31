import { TestBed } from '@angular/core/testing';

import { AuthAdminGuardGuard } from './auth-admin-guard.guard';

describe('AuthAdminGuardGuard', () => {
  let guard: AuthAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
