import { Route } from '@angular/router';

// Using this one for login
import { Meteor } from 'meteor/meteor';

import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { CheckinPageComponent } from './checkin/checkin-page.component';
import { ManageClasses } from './manage/manage-classes.component';

import { ManageStudent } from './manage/student/manage-student.component';


export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path: 'classes', component: ClassesPageComponent },
  { path: 'checkin', component: CheckinPageComponent },
  { path: 'manage', component: ManageClasses },
  { path: 'class/:classId', component: ManageStudent }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
