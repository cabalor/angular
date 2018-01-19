import { DataService } from './servic/data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FollwersService extends DataService {

  constructor(http: Http) {
    super('https://www.dupa.com', http);
   }

}
