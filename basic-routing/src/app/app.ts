import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a routerLink="/contact">Contact Us</a>
          </li>
          <li>
            <a routerLink="/about">About Us</a>
          </li>
          <li>
            <a routerLink="/services">Our Services</a>
          </li>
        </ul>
      </nav>
      <main>
        <router-outlet />
      </main>
      <footer>
        &copy; {{ year }} Basic Routing Example <br />
        Professor Krasso
      </footer>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 75%;
      margin: 0 auto;
    }
    header {
      background-color: black;
      color: white;
      padding: 10px;
      text-align: center;
    }
    main {
      flex: 1;
    }
    nav {
      background-color: #f8f8f8;
      padding: 10px;
      text-align: center;
    }
    ul {
      display: block;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      display: inline;
      margin-right: 10px;
    }
    footer {
      margin-top: 20px;
      height: 50px;
      padding: 10px;
      background-color: black;
      color: white;
      text-align: center;
    }
  `,
})
export class AppComponent {
  // variables to be used in the template
  // scope is limited to the class AppComponent

  title: string;
  year: number;
  constructor() {
    this.title = 'Basic Routing Example'; // assign the title property a value of ('Basic Routing Example');
    this.year = new Date().getFullYear(); // assign the current year to the year property using the Date object
  }
}
