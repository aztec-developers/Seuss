import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../imports/models';
import { Users } from '../../../../imports/collections/users';

import template from './login-page.component.html';

@Component({
  selector: 'login-page',
  template
})

export class LoginPageComponent {
  users: Observable<any[]>;

  constructor() {
    this.users = Users.find({
      // Logic goes here
      // Match redID with their classes
    }).zone();
  }
}
