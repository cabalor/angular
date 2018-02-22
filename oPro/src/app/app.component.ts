import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subs: Subscription;
  constructor(private userServ: UserService, private auth: AuthService, router: Router){
    // auth.user$.subscribe(user => {
    //   if(user){
    //     let returnUrl = localStorage.getItem('returnUrl');
    //     router.navigateByUrl(returnUrl);
    //   }
    // });
    }
      
     OnInit(auth, router, userServ){
      this. subs = auth.user$.subscribe(user => {
        if(user){

            userServ.save(user);
          let returnUrl = localStorage.getItem('returnUrl');
           router.navigateByUrl(returnUrl);
         }
       });
     }

    

     ngOnDestroy(){
     this.subs.unsubscribe();
     }
}