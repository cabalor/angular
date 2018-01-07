import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'util';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class PostService extends DataService{
  constructor( http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }

  
  }

