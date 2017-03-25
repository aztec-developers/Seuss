import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SettingsPageComponent} from './settings/settings-page.component';
import {ProfilePageComponent} from './profile/profile-page.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProfilePageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
