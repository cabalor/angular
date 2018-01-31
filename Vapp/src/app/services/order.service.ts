import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }
  // constructor(private http: AuthHttp) { //jwt ma taka klase i bedzie dzialalo tak samo jak Http z angulara
  // } // i implementuje cala logike na dole


  getOrders() { 

        //return  this.http.get('/api/orders').map(response => response.json());
      //wystarczy tylko ta jedna metoda. http z jwt posiada get puta del itp.


      let heady = new Headers();
      let token = localStorage.getItem('toekn');
      heady.append('Authorization', 'auth '+ token );

      let options = new RequestOptions({headers: heady});
    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }
}
