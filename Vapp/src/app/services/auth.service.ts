
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(dane) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(dane)).map(res =>{
        let resp = res.json();
        if(resp && resp.token){
          localStorage.setItem('token', resp.token);
          return true;
        }
        return false;
  });
  }
  wyloguj() { 
      localStorage.removeItem('token');

  }

  zalogowany() { 

    //return tokenNotExpired(); // same function as we have down here;
    //
    let jwt = new JwtHelper();
    let token = localStorage.getItem('token');

    if(!token){
      return false;
    }

    let dataWygasnięcia = jwt.getTokenExpirationDate(token);
    let wygasl = jwt.isTokenExpired(token);

    return !wygasl;
  }

  get logedUser(){

    let token = localStorage.getItem('token');
    if(!token){
      return null;
    }
    
  //let jwt = new JwtHelper();
  //return jwt.decodeToken(token);
    return new JwtHelper().decodeToken('token');
  }
}

