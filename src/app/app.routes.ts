import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: "", component: Index, canActivate: [AuthGuard] },
];
