import {Component} from '@angular/core';
import {SignInForm} from './signInForm';
import {SignInService} from './signIn.service';
import {Router} from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: `app/sign-in/signIn.component.html`,
})
export class SignInComponent  {

  model = new SignInForm('', '' );

  constructor(private _signInService: SignInService, private _router: Router) { }

  signIn() {
    this._signInService.signInUser(this.model);
  }
}
