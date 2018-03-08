import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private database: AngularFireDatabase) { }


  create(product){
return this.database.list('/product').push(product);
}
}
