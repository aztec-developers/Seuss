import {Component} from '@angular/core';
import template from './profile-page.component.html';
import {Users} from '../../../../both/collections/users.collection';

@Component({
  selector: 'profile-page',
  template
})
export class ProfilePageComponent {

  user: Object;
  constructor() {
    this.user = {
      'name': 'John Smith',
      'email': 'john.smith@gmail.com',
      'redid': '12345678'
    };
    this.loadUser();
  }

  loadUser() {
    console.log('constructor -> test function');
  }

  manageClasses() {
    alert('this function will route to the manage classes page');
  }

  userSettings() {
    alert('this function will route to the user settings page');
  }

}
