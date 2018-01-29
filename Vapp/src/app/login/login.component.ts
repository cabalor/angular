import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorLogin: boolean; 

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn(dane) {
    this.authService.login(dane).subscribe(res => { 
        if (res)
          this.router.navigate(['/']);
        else  
          this.errorLogin = true; 
      });
  }
}
