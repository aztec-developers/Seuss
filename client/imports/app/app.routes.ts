import { Route } from '@angular/router';

import { ProfilePageComponent } from './profile/profile-page.component';
import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { CheckinPageComponent } from './checkin/checkin-page.component';
import { ManageClasses } from './manage/manage-classes.component';


export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'classes', component: ClassesPageComponent },
  { path: 'checkin', component: CheckinPageComponent },
  { path: 'manage', component: ManageClasses },

];
