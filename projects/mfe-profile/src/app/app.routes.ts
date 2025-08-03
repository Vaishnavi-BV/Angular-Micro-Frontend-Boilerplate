import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/profile/profile.component').then(c => c.ProfileComponent) },
  { path: 'settings', loadComponent: () => import('./components/settings/settings.component').then(c => c.SettingsComponent) }
];
