import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

/* Used Claude to help generate file  */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img
          src="rpg-banner.png"
          alt="RPG Character Builder banner"
          class="banner-img"
        />
      </header>
      <div class="sign-in-container">
        @if (email) {
          <span class="welcome-text">Welcome, {{ email }}!</span>
          <button class="btn btn-outline sign-out-btn" (click)="signout()">
            Sign Out
          </button>
        } @else {
          <a routerLink="/signin" class="btn btn-outline sign-in-link"
            >Sign In</a
          >
        }
      </div>
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/create-faction">Create Faction</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a routerLink="/players">Players</a> |
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/create-faction">Create Faction</a> |
          <a routerLink="/create-character">Create Character</a>
        </nav>
        <p>&copy; 2026 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .sign-in-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
        padding: 10px 20px;
        background-color: var(--color-bg-surface);
        border-bottom: 1px solid var(--color-border);
      }
      .welcome-text {
        font-family: 'Cinzel', serif;
        font-size: 0.8rem;
        letter-spacing: 0.06em;
        color: var(--color-text-muted);
      }
      .sign-out-btn,
      .sign-in-link {
        font-size: 0.75rem;
        padding: 6px 16px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'rpg-character-builder';
  email?: string;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}

  // Claude suggested adding the else statement so that the
  // welcome message and sign-out button are reset
  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      } else {
        this.email = undefined;
      }
    });
  }

  signout() {
    this.authService.signout();
  }
}
