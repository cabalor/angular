import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../servic/post.service';
import { error } from 'util';

@Component({
  selector: 'http-get',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HttpCompComponent implements OnInit {

    
    posty: any[];

  constructor(private service: PostService) {
    
   }
   robPosta(nazwa: HTMLInputElement){
      let posicik = { title: nazwa.value};
      nazwa.value = '';
      this.service.robPosta(posicik).subscribe(response =>{
        posicik['id'] = response.json().id;
        this.posty.splice(0, 0, posicik)
      }, error => {
        console.log(error);
      })
   }
   
  ngOnInit() {
    this.service.getPosty().subscribe(response =>{
      this.posty = response.json();
    }, error =>{
      alert('unxpected error');
      console.log(error);
    })
  }

  update(post){
    this.service.update(post).subscribe(response =>{
      console.log(response.json)
    }, error => {
      console.log(error);
    });
    //this.http.patch(this.url, JSON.stringify(post));
  }

  delete(post){
      this.service.del(post).subscribe(response =>{
        let ind = this.posty.indexOf(post);
        this.posty.splice(ind, 1);
      }, error => {
        console.log(error);
      })
  }

  
}
