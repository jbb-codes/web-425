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
            <li><a href="#">Characters</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Races</a></li>
            <li><a href="#">Equipment</a></li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a href="#">Characters</a> |
          <a href="#">Classes</a> | <a href="#">Races</a> |
          <a href="#">Equipment</a>
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
