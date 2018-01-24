import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-domowa',
  templateUrl: './domowa.component.html',
  styleUrls: ['./domowa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DomowaComponent implements OnInit {

    archiwa = [
      {year: 2000, month: 6},
      {year: 2014, month: 3},
      {year: 2005, month: 5},
      {year: 2011, month: 2},
    ];


  constructor() { }

  ngOnInit() {
  }

}
