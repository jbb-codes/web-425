import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  // Use Claude to help generate
  beforeEach(() => {
    const spy = jasmine.createSpyObj('CookieService', [
      'get',
      'set',
      'deleteAll',
    ]);
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: CookieService, useValue: spy }],
    });
    service = TestBed.inject(AuthService);
    cookieServiceSpy = TestBed.inject(
      CookieService,
    ) as jasmine.SpyObj<CookieService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Use Claude to help generate
  it('should set cookie and authState to true on successful signin', () => {
    const result = service.signin('john.smith@gmail.com', 'Password1');
    expect(result).toBeTrue();
    expect(
      service
        .getAuthState()
        .subscribe((state: boolean) => expect(state).toBeTrue()),
    );
    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  // Use Claude to help generate
  it('should not set cookie and authState to true on unsuccessful signin', () => {
    const result = service.signin('wrongemail@test.com', 'wrongpassword');
    expect(result).toBeFalse();
    expect(
      service
        .getAuthState()
        .subscribe((state: boolean) => expect(state).toBeFalse()),
    );
    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
