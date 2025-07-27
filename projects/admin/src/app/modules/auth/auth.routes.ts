import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const routes:Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path:'login',
        // loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
        component: LoginComponent
    },
    {
        path:'signup',
        // loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent)
        component: SignupComponent
    }
]

// export const AuthRoutes = RouterModule.forChild(authroutes);