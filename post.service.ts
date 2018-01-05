import { BadInput } from './../badinput';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { Observable } from 'rxjs/Observable';
import { AppError } from '../app-error';
import { NotFoundErr } from '../notFound';
import { error } from 'util';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: Http) { }

  getPosty(){
    return this.http.get(this.url);
  }

  robPosta(poscik){
    return this.http.post(this.url, JSON.stringify(poscik))
    .catch((error: Response) => {
      if(error.status === 400){
        return Observable.throw(new BadInput(error.json()))
      }
      return Observable.throw(new AppError(error.json()))
    });
  }

  update(post){
    return this.http.patch(this.url + '/'+ post.id, JSON.stringify({isRead: true}));
  }

  del(post){
    return this.http.delete(this.url + '/'+post.id).catch((error: Response) => {
      if(error.status === 404){
        return Observable.throw(new NotFoundErr);
      }
        return Observable.throw(new AppError(error))
    });
  }

}
