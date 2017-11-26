import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'favor',
  templateUrl: './favor.component.html',
  styleUrls: ['./favor.component.css'],
  encapsulation: ViewEncapsulation.None,
  //inputs: ['clicked'] // you can use this instead of Input in imports, i have to del annotation 
})
export class FavorComponent implements OnInit {

  @Input('is-clicked') clicked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clicked = !this.clicked;
  }


}
