import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FastComponent implements OnInit {

  @Input('title') title: string;
  isActive: boolean = true;

  onClick(){
    this.isActive =!this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}
