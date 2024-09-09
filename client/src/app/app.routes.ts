import { Routes } from '@angular/router';
import { CreateHComponent } from './components/create-h/create-h.component';
import { MainHComponent } from './components/main-h/main-h.component';
import { ShowHComponent } from './components/show-h/show-h.component';

export const routes: Routes = [
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
];
