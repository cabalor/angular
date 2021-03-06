import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { PassValidators } from './pass.validators';

@Component({
  selector: 'passwordy',
  templateUrl: './passwordy.component.html',
  styleUrls: ['./passwordy.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PasswordyComponent implements OnInit {

  form: FormGroup;


  constructor(fb: FormBuilder) { 

      this.form = fb.group({
        staryPass: ['', Validators.required, PassValidators.staryPassValid],
        nowyPass: ['', Validators.required],
        poPass: ['', Validators.required]
      },{
        validator: PassValidators.passMatcher
      });

  }

  get staryPass(){ return this.form.get('staryPass')}
  get nowyPass(){ return this.form.get('nowyPass')}
  get poPass(){ return this.form.get('poPass')}


  ngOnInit() {
  }

}
