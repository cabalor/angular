import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'http-get',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HttpCompComponent implements OnInit {


    posty: any[];

  constructor(http: Http) {
      http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response =>{
        this.posty = response.json();
      })
   }

  ngOnInit() {
  }

}
