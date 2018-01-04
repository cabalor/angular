import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../servic/post.service';
import { error } from 'util';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import { NotFoundErr } from '../notFound';
import { AppError } from '../app-error';

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
      }, (error: Response) => {
        if(error.status === 400){
          //this.form.setErrors(error.json())
          console.log(400);
        } else {
          console.log(error);
        }
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
      alert('unxpected error');
      console.log(error);
    });
    //this.http.patch(this.url, JSON.stringify(post));
  }

  delete(post){
      this.service.del(post).subscribe(response =>{
        let ind = this.posty.indexOf(post);
        this.posty.splice(ind, 1);
      }, (error: AppError) => {
        if(error instanceof NotFoundErr){
        alert("wywalone")
        } else {
        console.log(error);
        }
      })
  }

  
}
