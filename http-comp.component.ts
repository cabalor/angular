import { BadInput } from './../badinput';
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
      this.posty.splice(0, 0, posicik);
      nazwa.value = '';
      this.service.rob(posicik).subscribe(response =>{
        posicik['id'] = response.json().id;
      }, (error: AppError) => {
        this.posty.splice(0, 1);
        if(error instanceof BadInput){
          //this.form.setErrors(error.originalError);
          console.log(400);
        } else throw error; /*{
          alert('dupa');
          console.log(error);
        }*/
      })
   }
   
  ngOnInit() {
    this.service.getAll().subscribe(posts =>this.posty = posts
     /*error =>{
      alert('unxpected error');
      console.log(error);
    }*/)
  }

  update(post){
    this.service.update(post).subscribe(updatedPost =>{
      console.log(updatedPost)
    }
      
    );
    //this.http.patch(this.url, JSON.stringify(post));
  }

  delete(post){
    let ind = this.posty.indexOf(post);
        this.posty.splice(ind, 1);
      this.service.dell(post)
      .subscribe(/*() response =>{
      }*/null, (error: AppError) => {
        this.posty.splice(ind, 0, post)
        if(error instanceof NotFoundErr){
        alert("wywalone")
        } else throw error /*{
        console.log(error);
        }*/
      })
  }
  nowyDel(post){
    this.service.del(post.id);

  }
  
}
