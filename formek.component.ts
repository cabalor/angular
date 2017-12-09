import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'formek',
  templateUrl: './formek.component.html',
  styleUrls: ['./formek.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormekComponent implements OnInit {

  constructor() { }

  contact = [
    {id: 1, name:"dupa"},
    {id: 2, name:"zupa"}

  ];

  ngOnInit() {
  }

  log(x) {console.log()}

  submit(f){
    console.log(f);
  }
}
