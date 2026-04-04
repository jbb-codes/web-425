import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Contact Us</h1>
      <p>Here is our contact information:</p>
      <ul>
        <li>Phone: 555-555-5555</li>
        <li>Email: support&#64;me.com</li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class ContactComponent {}
