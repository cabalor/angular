import { AdminGuardService } from './services/admin-guard.service';
import { AGuardService } from './services/a-guard.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './services/order.service';
import { MockBackend } from '@angular/http/testing';
import { BackendProvider } from './backend/fake-backend';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AGuardService, AdminGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    OrderService,

    AuthService,
    AGuardService,
    AdminGuardService,
    AuthHttp,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },

    BackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
