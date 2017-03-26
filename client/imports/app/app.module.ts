// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ---- End libraries ---

// Components
import { AppComponent } from './app.component';
import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';

// Checkin component
import { CheckinPageComponent } from './checkin/checkin-page.component';
import { StudentPageComponent } from './checkin/student/checkin-student.component';
import { ProfessorPageComponent } from './checkin/professor/checkin-professor.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ClassesPageComponent,
    LoginPageComponent,
    CheckinPageComponent,
    StudentPageComponent,
    ProfessorPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
