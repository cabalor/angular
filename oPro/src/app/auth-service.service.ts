import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(private fireAuth: AngularFireAuth, private route: ActivatedRoute) { 

    this.user$ = fireAuth.authState;
  }

  login(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);
      this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.fireAuth.auth.signOut();
  }
}
