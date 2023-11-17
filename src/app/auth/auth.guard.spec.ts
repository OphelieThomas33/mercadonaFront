import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const routerMock = {
    apiUrl: jasmine.createSpy('apiUrl')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthService,
        { provide: Router, useValue: routerMock}],
      imports: [HttpClientTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
