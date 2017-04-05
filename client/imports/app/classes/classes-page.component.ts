import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


// Importing classes collection and interface
import { Classes } from '../../../../imports/collections';
import { Class } from '../../../../imports/models';

// Importing user collection and interface
import { User } from '../../../../imports/models';
import { Users2 } from '../../../../imports/collections/users2';


import template from './classes-page.component.html';

@Component({
  selector: 'classes-page',
  template
})

export class ClassesPageComponent {
  classes: Observable<any[]>;
  users: Observable<any[]>;

  // Would have to build the user table/collection here by pulling from the different tables
  constructor() {
    this.classes = Classes.find({
      // Logic goes here
      // Match redID with their classes
    }).zone();

    this.users = Users.find({
      // Logic goes here
      // Match redID with their classes
    }).zone();
  }
}
