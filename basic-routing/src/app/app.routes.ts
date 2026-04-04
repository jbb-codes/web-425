import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services';
import { ViewServiceComponent } from './view-service/view-service';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'service/:id',
    component: ViewServiceComponent,
  },
];
