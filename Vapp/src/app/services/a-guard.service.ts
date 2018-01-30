import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AGuardService implements CanActivate{

  constructor(
    private authService:AuthService,
    private router: Router
    ) { }

  canActivate(route, state: RouterStateSnapshot){
    if(this.authService.zalogowany()){
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;

  }


}
