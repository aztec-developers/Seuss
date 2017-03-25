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

  test() {
    const updatedEmail = (document.getElementById('emailForm') as HTMLElement).value;
    this.user['email'] = updatedEmail;
    (document.getElementById('emailForm') as HTMLElement).value = "";
  }
}
