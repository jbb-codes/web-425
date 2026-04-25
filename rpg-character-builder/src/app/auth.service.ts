import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

// Used Claude to help generate file
interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {
    this.users = [
      { empId: 1, email: 'john.smith@gmail.com', password: 'Password1' },
      { empId: 2, email: 'jane.doe@gmail.com', password: 'Password2' },
      { empId: 3, email: 'mike.jones@yahoo.com', password: 'Password3' },
      { empId: 4, email: 'sarah.brown@outlook.com', password: 'Password4' },
      { empId: 5, email: 'chris.lee@gmail.com', password: 'Password5' },
    ];
  }

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      this.cookieService.set('session_user', user.email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
