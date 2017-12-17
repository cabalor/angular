import { UsernValidators } from './usern.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      usern: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        UsernValidators.cantContSpa,
        UsernValidators.uniqe
      ]),
        password: new FormControl('', Validators.required)
    })
  });

  get usern() {
      return this.form.get('account.usern');

  }

  login(){
        this.form.setErrors({
            invalidLogin: true
          });
      }
  }


