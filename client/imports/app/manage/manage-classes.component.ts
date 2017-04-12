
import {ManageProfessor} from './professor/manage-professor.component';
import {ManageStudent} from './student/manage-student.component';
import {TempFormComponent} from './temp-form.component';

import template from './manage-classes.component.html';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


// Importing classes collection and interface
import { Classes } from '../../../../imports/collections';
import { Class } from '../../../../imports/models';

// Importing user collection and interface
import { User } from '../../../../imports/models';
import { Users } from '../../../../imports/collections/users';

@Component({
  selector: 'manage-classes',
  template
})

export class ManageClasses {
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
  removeClass(Class: Class): void {
    Classes.remove(Class._id);
 }

 removeUser(User: User): void {
   Users.remove(User._id);
}
 }
