import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //user: firebase.User
  user$: Observable<firebase.User>;


  constructor(private authFire: AngularFireAuth) {
    //authFire.authState.subscribe(logedUser =>this.user = logedUser) // we have to always unsubscribe from firebase
      this.user$ = authFire.authState; //$ means its an observable
   }

  ngOnInit() {
  }

  logout(){
      this.authFire.auth.signOut();
  }


}
