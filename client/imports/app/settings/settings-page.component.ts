import { Component } from '@angular/core';

import template from './settings-page.component.html';

@Component({
  selector: 'settings-page',
  template
})
export class SettingsPageComponent {

  user: Object;
  constructor() {
    this.user = {
      'email': 'matthew.yamout@gmail.com',
      'redid': '817870749'
    };
  }

  updateUserEmail() {
    alert('allows for form to update user email and edit the local database');
  }

}
