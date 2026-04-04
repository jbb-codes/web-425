import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>About Us</h1>
      <p>Here is some information about us:</p>
      <ul>
        <li>Founded in 2001</li>
        <li>Located in Anytown, USA</li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {}
