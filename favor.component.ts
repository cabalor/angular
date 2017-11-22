import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favor',
  templateUrl: './favor.component.html',
  styleUrls: ['./favor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavorComponent implements OnInit {

  clicked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clicked = !this.clicked;
  }


}
