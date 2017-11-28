import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favor',
  templateUrl: './favor.component.html',
  styleUrls: ['./favor.component.css'],
  styles: [
    `
    .glyphicon{
      color: purple;
  }

  .glyphicon-star{
    background: yellow;
  }
    `
  ],
  //inputs: ['clicked'] // you can use this instead of Input in imports, i have to del annotation 
})
export class FavorComponent implements OnInit {

  @Input('is-clicked') clicked: boolean; // is-clicked is an allias
  @Output() change = new EventEmitter(); // allias dla outputa

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clicked = !this.clicked;
    this.change.emit({newValue: this.clicked});
  }
}
export interface ClickChangeArgs{
  newValue: boolean;
}
