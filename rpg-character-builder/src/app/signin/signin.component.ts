import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

// Used Claude to help generate file
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="signin-form-container">
      <form [formGroup]="signinForm" (ngSubmit)="signin()" class="signinform">
        <h1>Welcome Back, Adventurer</h1>
        <fieldset>
          <legend>User Sign In</legend>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              formControlName="email"
              type="email"
              id="email"
              name="email"
              [attr.aria-invalid]="
                signinForm.controls['email'].touched &&
                signinForm.controls['email'].invalid
                  ? true
                  : null
              "
              aria-describedby="email-required-error email-format-error"
            />
            @if (
              signinForm.controls['email'].touched &&
              signinForm.controls['email'].hasError('required')
            ) {
              <small id="email-required-error" class="error" role="alert"
                >Email is required.</small
              >
            }
            @if (
              signinForm.controls['email'].touched &&
              signinForm.controls['email'].hasError('email')
            ) {
              <small id="email-format-error" class="error" role="alert"
                >Invalid email address.</small
              >
            }
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              formControlName="password"
              id="password"
              type="password"
              [attr.aria-invalid]="
                signinForm.controls['password'].touched &&
                signinForm.controls['password'].invalid
                  ? true
                  : null
              "
              aria-describedby="password-required-error password-pattern-error"
            />
            @if (
              signinForm.controls['password'].touched &&
              signinForm.controls['password'].hasError('required')
            ) {
              <small id="password-required-error" class="error" role="alert"
                >Password is required.</small
              >
            }
            @if (
              signinForm.controls['password'].touched &&
              signinForm.controls['password'].hasError('pattern')
            ) {
              <small id="password-pattern-error" class="error" role="alert"
                >Password must be at least 8 characters long and contain at
                least one uppercase letter and one number.</small
              >
            }
          </div>

          <button
            type="submit"
            [disabled]="!signinForm.valid"
            class="btn btn-primary submit-btn"
          >
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  `,
  styles: `
    .signin-form-container {
      display: flex;
      justify-content: center;
      padding: 16px 0;
    }

    .signin-form {
      width: 100%;
      max-width: 420px;
    }

    fieldset {
      border: none;
      padding: 0;
      margin: 0;
    }

    legend {
      font-family: 'Cinzel', serif;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      color: var(--color-gold-dim);
      text-transform: uppercase;
      margin-bottom: 20px;
      width: 100%;
      text-align: center;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 20px;
    }

    label {
      font-family: 'Cinzel', serif;
      font-size: 0.8rem;
      letter-spacing: 0.06em;
      color: var(--color-text-muted);
      text-transform: uppercase;
    }

    input[type='email'],
    input[type='password'] {
      background-color: var(--color-bg-overlay);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      color: var(--color-text-primary);
      font-family: 'Crimson Text', serif;
      font-size: 1rem;
      padding: 10px 14px;
      transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast);
      outline: none;
      width: 100%;
    }

    input[type='email']:focus,
    input[type='password']:focus {
      border-color: var(--color-gold);
      box-shadow: 0 0 0 2px var(--color-gold-glow);
    }

    input[aria-invalid='true'] {
      border-color: #e05555;
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      margin-top: 8px;
      padding: 12px;
      font-size: 0.9rem;
    }

    .submit-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
      pointer-events: none;
    }

    .error {
      color: #e05555;
      font-family: 'Lato', sans-serif;
      font-size: 0.8rem;
    }
  `,
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/),
      ]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;
    if (this.authService.signin(email, password)) {
      const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
