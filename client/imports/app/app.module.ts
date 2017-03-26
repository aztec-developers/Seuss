import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule} from 'angular2-meteor-accounts-ui';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ClassesPageComponent } from './classes/classes-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { AUTH_DECLARATIONS} from './auth/index';

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
    AUTH_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
