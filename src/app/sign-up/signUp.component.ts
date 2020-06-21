import {Component} from '@angular/core';
import {SignInForm} from '../sign-in/signInForm';

@Component({
  selector: 'sign-up',
  templateUrl: `app/sign-up/signUp.component.html`,
})
export class SignUpComponent  {

  model = new SignInForm('', '' );
  signUpForm() {
    console.log(this.model);
  }
}
