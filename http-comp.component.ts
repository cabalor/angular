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
    this.http.get(this.url).subscribe(response =>{
      this.posty = response.json();
    })
  }

  update(post){
    this.http.patch(this.url + '/'+ post.id, JSON.stringify({isRead: true})).subscribe(response =>{
      console.log(response.json)
    });
    this.http.patch(this.url, JSON.stringify(post));
  }

  delete(post){
      this.http.delete(this.url + '/'+post.id).subscribe(response =>{
        let ind = this.posty.indexOf(post);
        this.posty.splice(ind, 1);
      })
  }
}
