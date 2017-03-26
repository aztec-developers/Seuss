import { Route } from '@angular/router';

import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';
import {LoginComponent} from "./auth/login.component";
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";


export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path: 'classes', component: ClassesPageComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];
