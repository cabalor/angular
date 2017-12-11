import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'thing-form',
  templateUrl: './thing-form.component.html',
  styleUrls: ['./thing-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

geners = [
  {id:1, gener: 'foxterier'},
  {id:2, gener: 'terier'},
  {id:3, gener: 'york'},
]

submit(xx){
  console.log(xx);
}

}
