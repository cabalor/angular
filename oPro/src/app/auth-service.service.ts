import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  //user$: Observable<firebase.User>;
  constructor(private fireAuth: AngularFireAuth) { 

    //this.user$ = fireAuth.authState;
  }

  login(){
      this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
  }
}
