import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SettingsPageComponent} from './settings/settings-page.component';
import {ProfilePageComponent} from './profile/profile-page.component';
import {ManageClasses} from './manage/manage-classes.component';
import {ManageProfessor} from './manage/professor/manage-professor.component';
import {ManageStudent} from './manage/student/manage-student.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProfilePageComponent,
    ManageClasses,
    ManageProfessor,
    ManageStudent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
