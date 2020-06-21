import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/signIn.component';
import {FormsModule} from '@angular/forms';
import {SignInService} from './sign-in/signIn.service';
import {SignUpComponent} from './sign-up/signUp.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, SignInComponent, SignUpComponent],
  providers: [SignInService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
