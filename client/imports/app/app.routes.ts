import { Route } from '@angular/router';

import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';


export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path: 'classes', component: ClassesPageComponent },

];
