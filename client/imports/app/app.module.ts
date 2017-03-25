import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassesPageComponent } from './classes/classes-page.component';

import { LoginPageComponent } from './login/login-page.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ...ClassesPageComponent,
    ...LoginPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
