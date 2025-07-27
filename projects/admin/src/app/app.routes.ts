import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        // loadComponent: () => import('./modules/auth/auth.component').then(m => m.AuthComponent),
        // loadChildren: () => import('./modules/auth/auth.routes').then(m => m.routes)
        component: AuthComponent,
        loadChildren : () => import('./modules/auth/auth.routes').then(m => m.routes)
    }
];
