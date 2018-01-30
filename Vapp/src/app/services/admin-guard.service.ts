import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate{

  constructor(private router: Router,
  private auth: AuthService) { }

  canActivate(){
    let user = this.auth.currentUser;
    if(user && user.admin){
      return true;
    }
    this.router.navigate(['/no-access']);
    return false;

  }

}
