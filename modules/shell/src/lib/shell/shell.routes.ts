import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'link', pathMatch: 'full' },
  { path: 'budget', loadChildren: () => import('./features/budget/routes') },
  { path: 'link', loadChildren: () => import('./features/link/routes') },
];
