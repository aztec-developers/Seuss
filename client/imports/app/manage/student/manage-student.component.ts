import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';
import template from './manage-student.component.html';

@Component({
  selector: 'manage-student',
  template
})

export class ManageStudent implements OnInit {
  classId: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .map(params => params['classId'])
      .subscribe(classId => this.classId = classId);
  }
}
