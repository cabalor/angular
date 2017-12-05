import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'formek',
  templateUrl: './formek.component.html',
  styleUrls: ['./formek.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {console.log()}


}
