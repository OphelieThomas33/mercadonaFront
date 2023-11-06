import { TestBed } from '@angular/core/testing';

import { HttpXsrfInterceptorService } from './http-xsrf-interceptor.service';

describe('HttpXsrfInterceptorService', () => {
  let service: HttpXsrfInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpXsrfInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
