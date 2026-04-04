import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

/* Used Claude to generate component template */
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
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/create-faction">Create Faction</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/signin">Sign in</a></li>
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
          <a routerLink="/create-character">Create Character</a> |
          <a routerLink="/signin">Sign in</a>
        </nav>
        <p>&copy; 2026 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [''],
})
export class AppComponent {
  title = 'rpg-character-builder';
}
