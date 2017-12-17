import { Component} from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'arr-cors',
  templateUrl: './array-course.component.html',
  styleUrls: ['./array-course.component.css']
})
export class ArrayCourseComponent{

  form = new FormGroup({
      ident: new FormControl('', Validators.required),
      cont: new FormGroup({
        email: new FormControl(),
        telefon: new FormControl()
      }),
      nazwy: new FormArray([
      ])

    });
  constructor(fb: FormBuilder) {
    this.form =  fb.group({
       ident: ['', Validators.required],
       cont: fb.group({
         email:[],
         telefon: []
       }),
       nazwy: fb.array([])
     }) //to samo form = new formGroup

   }

  addName(nazwa: HTMLInputElement){
    // (this.form.get('nazwy') as FormArray)   
    this.nazwy.push(new FormControl(nazwa.value))
    nazwa.value = '';
  }

  get nazwy(){
    return this.form.get('nazwy') as FormArray;
  }

  remNazwa(nazwa: FormControl){
    let index = this.nazwy.controls.indexOf(nazwa);
    this.nazwy.removeAt(index);
  }

}