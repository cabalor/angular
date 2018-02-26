import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthService } from './auth-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProduktyComponent } from './produkty/produkty.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccesComponent } from './order-succes/order-succes.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminProduktyComponent } from './admin/admin-produkty/admin-produkty.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProduktyComponent,
    CartComponent,
    CheckoutComponent,
    OrderSuccesComponent,
    OrdersComponent,
    AdminProduktyComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuth,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'products', component: ProduktyComponent},
      {path:'cart', component: CartComponent},
      {path:'checkout', component: CheckoutComponent,  canActivate: [AuthGuardService]},
      {path:'orders', component: OrderSuccesComponent, canActivate: [AuthGuardService]},
      {path:'my/orders', component: OrdersComponent, canActivate: [AuthGuardService]},
      {path:'login ', component: LoginComponent},
      {path:'admin/products', component: AdminProduktyComponent, canActivate: [AuthGuardService]},
      {path:'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
    ])

  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
