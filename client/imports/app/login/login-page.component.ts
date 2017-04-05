import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../imports/models';
import { Users2 } from '../../../../imports/collections/users2';

import template from './login-page.component.html';

@Component({
  selector: 'login-page',
  template
})

export class LoginPageComponent {
  users: Observable<any[]>;

  constructor() {
    this.users = Users2.find({
      // Logic goes here
      // Match redID with their classes
    }).zone();
  }
}
