import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fireAuth: AngularFireAuth) { 
    
  }

  ngOnInit() {
  }

  login(){
      this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); // signwith.. allows to use google,gihub etc auth with fire.
  }

}
