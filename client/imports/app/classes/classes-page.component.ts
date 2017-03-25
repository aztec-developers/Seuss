import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from '../../../../imports/collections';
import { Class } from '../../../../imports/models';

import template from './classes-page.component.html';

@Component({
  selector: 'classes-page',
  template
})

export class ClassesPageComponent {
  classes: Observable<any[]>;

  constructor() {
    this.classes = Classes.find({
      // Logic goes here
      // Match redID with their classes
    }).zone();
  }
}
