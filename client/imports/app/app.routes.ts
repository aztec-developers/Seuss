import { Route } from '@angular/router';

import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { CheckinPageComponent } from './checkin/checkin-page.component';
import { ManageClasses } from './manage/manage-classes.component';


export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path: 'classes', component: ClassesPageComponent },
  { path: 'checkin', component: CheckinPageComponent },
  { path: 'manage', component: ManageClasses },

];
