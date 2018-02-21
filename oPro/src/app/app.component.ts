import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  
  constructor(private auth: AuthService, router: Router){
    }
      
    OnInit(auth, router){
      auth.user$.subscribe(user => {
        if(user){
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      });
    }

    ngOnDestroy(auth){
      auth.user$.unsubscribe();
    }
}