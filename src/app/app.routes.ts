import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CreateHComponent } from './components/create-h/create-h.component';
import { EditHComponent } from './components/edit-h/edit-h.component';
import { MainHComponent } from './components/main-h/main-h.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShowHComponent } from './components/show-h/show-h.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'main',
    component: MainHComponent,
  },
  {
    path: 'create',
    component: CreateHComponent,
  },
  {
    path: 'holiday/:id',
    component: ShowHComponent,
  },
  {
    path: 'edit/:id',
    component: EditHComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
