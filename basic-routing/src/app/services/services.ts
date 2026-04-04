import { Component } from '@angular/core';
import { Service, ServiceItem } from '../service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h1>Our Services</h1>
      <p>Here are the services we offer:</p>
      <ul>
        @for (serviceItem of services; track serviceItem) {
          <li>
            <a routerLink="/service/{{ serviceItem.id }}"> {{ serviceItem.name }}</a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class ServicesComponent {
  services: Array<ServiceItem>;
  constructor() {
    const service = new Service();
    this.services = service.getServices();
  }
}
