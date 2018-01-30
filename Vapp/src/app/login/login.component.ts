import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorLogin: boolean; 

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(dane) {
    this.authService.login(dane).subscribe(res => { 
        if (res){
          let returnUrl = this.route.snapshot.queryParamMap.getAll('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else
          this.errorLogin = true;
        } 
      )};
  }

