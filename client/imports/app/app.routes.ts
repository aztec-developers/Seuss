import { Route } from '@angular/router';

// Using this one for login
import { Meteor } from 'meteor/meteor';

import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { CheckinPageComponent } from './checkin/checkin-page.component';
import { ManageClasses } from './manage/manage-classes.component';
import { ProfilePageComponent } from './profile/profile-page.component';

export const routes: Route[] = [
  { path: '', component: LoginPageComponent  },
  { path: 'classes', component: ClassesPageComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'checkin', component: CheckinPageComponent, canActivate: ['canActivateForLoggedIn']  },
  { path: 'manage', component: ManageClasses, canActivate: ['canActivateForLoggedIn']  },
  { path: 'profile', component: ProfilePageComponent, canActivate: ['canActivateForLoggedIn']  }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
