import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SettingsPageComponent} from './settings/settings-page.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SettingsPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
