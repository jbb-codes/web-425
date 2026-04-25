import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { PlayersComponent } from './players/players.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CreateFactionComponent } from './create-faction/create-faction.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { authGuard } from './auth.guard';

// Used Claude to help implement create character guard
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'create-guild',
    component: CreateGuildComponent,
  },
  {
    path: 'create-faction',
    component: CreateFactionComponent,
  },
  {
    path: 'create-character',
    component: CreateCharacterComponent,
    canActivate: [authGuard],
  },
];
