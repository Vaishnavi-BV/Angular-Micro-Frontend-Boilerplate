import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', loadChildren: () => import('../../../mfe-profile/src/app/app.routes').then(m => m.routes) },
  { path: 'cart', loadChildren: () => import('../../../mfe-cart/src/app/app.routes').then(m => m.routes) },
  { path: '**', redirectTo: '/home' }
];
