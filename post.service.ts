import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: Http) { }

  getPosty(){
    return this.http.get(this.url);
  }

  robPosta(poscik){
    return this.http.post(this.url, JSON.stringify(poscik));
  }

  update(post){
    return this.http.patch(this.url + '/'+ post.id, JSON.stringify({isRead: true}));
  }

  del(post){
    return this.http.delete(this.url + '/'+post.id);
  }

}
