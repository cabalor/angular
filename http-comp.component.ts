import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'http-get',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HttpCompComponent implements OnInit {

    private url = 'https://jsonplaceholder.typicode.com/posts';
    posty: any[];

  constructor(private http: Http) {
      http.get(this.url).subscribe(response =>{
        this.posty = response.json();
      })
   }
   robPosta(nazwa: HTMLInputElement){
      let posicik = { title: nazwa.value};
      nazwa.value = '';
      this.http.post(this.url, JSON.stringify(post)).subscribe(response =>{
        posicik['id'] = response.json().id;
        this.posty.splice(0, 0, posicik)
      })
   }
   
  ngOnInit() {
  }

  update(post){
    this.http.patch(this.url + '/'+ post.id, JSON.stringify({isRead: true})).subscribe(response =>{
      console.log(response.json)
    });



    this.http.patch(this.url, JSON.stringify(post));
  }
}
