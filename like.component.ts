import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('contOfClicks') clickNumber: number;
  @Input('isActive') isActive: boolean; 

  onClick(){
  this.clickNumber += (this.isActive)? -1:1;
  this.isActive = !this.isActive;  
  }

}
