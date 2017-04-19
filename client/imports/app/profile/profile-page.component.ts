import {Component} from '@angular/core';
import template from './profile-page.component.html';
import { Users2 } from '../../../../imports/collections/users2';

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

  }
  /*
    Runs method before rendering the component. We should use this method to load data from the database
    to our component objects before rendering.
  */
  ngOnInit() {
    //load users info from the local mongo database
  }

  manageClasses() {
    alert('this function will route to the manage classes page');
  }

  userSettings() {
    alert('this function will route to the user settings page');
  }

}
