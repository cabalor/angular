import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdminAuthGuardService /*implements CanActivate*/{

  constructor(private auth: AuthService, private userServ: UserService) { }

   canActivate(): Observable<boolean> {
        return this.auth.appUser$.map(appUser => appUser.isAdmin);

   }


}
