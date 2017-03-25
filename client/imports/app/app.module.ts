import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
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
