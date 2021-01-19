import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

//----------------MATERIAL MODULES-----------------------//

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';

//-------------------------------------------------------//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminProductsListComponent } from './components/admin-products-list/admin-products-list.component';
import { AdminsListComponent } from './components/admins-list/admins-list.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    ProductDetailsComponent,
    SearchPageComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    ShoppingCartComponent,
    CheckoutPageComponent,
    OrderListComponent,
    OrderDetailsComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminProductsListComponent,
    AdminsListComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //---------------------------MATERIAL MODULES-------------//
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatListModule,
    MatSliderModule
    //--------------------------------------------------------//
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: JWT_OPTIONS,
    useValue: JWT_OPTIONS
  }, 
  JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
