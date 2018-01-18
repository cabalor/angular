import { BadInput } from './../badinput';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/observable/throw'

import { Observable } from 'rxjs/Observable';
import { AppError } from '../app-error';
import { NotFoundErr } from '../notFound';
import { error } from 'util';
import { Response } from '@angular/http/src/static_response';
import { resource } from 'selenium-webdriver/http';

@Injectable()
export class DataService {
    
  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.zbierajErrory);
  }

  rob(resources){
    return this.http.post(this.url, JSON.stringify(resources))
    .catch((error: Response) => {
      if(error.status === 400){
        return Observable.throw(new BadInput(error.json()))
      }
      return Observable.throw(new AppError(error.json()))
    });
  }

  update(resources){
    return this.http.patch(this.url + '/'+ resources.id, JSON.stringify({isRead: true}))
    .map(response => response.json())
    .catch(this.zbierajErrory);
  }

  del(id){
    return this.http.delete(this.url + '/'+id)
    .map(response => response.json())
    .toPromise()
    .catch(this.zbierajErrory);
  }

  dell(id){
    return this.http.delete(this.url + '/'+id).catch(this.zbierajErrory);
  }


  private zbierajErrory(error: Response){
    if(error.status === 400){
      return Observable.throw(new BadInput(error.json()));
    }
    
    if(error.status === 404){
      return Observable.throw(new NotFoundErr);
    }
      return Observable.throw(new AppError(error))
  }
  }

