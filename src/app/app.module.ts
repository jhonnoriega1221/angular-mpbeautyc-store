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
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
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
import { AdminProductDetailsComponent } from './components/admin-product-details/admin-product-details.component';
import { AdminProductAddComponent } from './components/admin-product-add/admin-product-add.component';
import { AdminClientsTabsComponent } from './components/admin-clients-tabs/admin-clients-tabs.component';
import { AdminClientsOrdersComponent } from './components/admin-clients-orders/admin-clients-orders.component';
import { AdminClientsQuestionsComponent } from './components/admin-clients-questions/admin-clients-questions.component';
import { AdminClientsOrderDetailsComponent } from './components/admin-clients-order-details/admin-clients-order-details.component';
import { AdminClientsQuestionsDetailsComponent } from './components/admin-clients-questions-details/admin-clients-questions-details.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { AdminAdminAddComponent } from './components/admin-admin-add/admin-admin-add.component';
import { AdminAdminDetailsComponent } from './components/admin-admin-details/admin-admin-details.component';
import { AdminSalesListComponent } from './components/admin-sales-list/admin-sales-list.component';
import { AdminSalesDetailsComponent } from './components/admin-sales-details/admin-sales-details.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { Error404Component } from './components/error404/error404.component';

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
    AdminNavbarComponent,
    AdminProductDetailsComponent,
    AdminProductAddComponent,
    AdminClientsTabsComponent,
    AdminClientsOrdersComponent,
    AdminClientsQuestionsComponent,
    AdminClientsOrderDetailsComponent,
    AdminClientsQuestionsDetailsComponent,
    AdminSettingsComponent,
    AdminAdminAddComponent,
    AdminAdminDetailsComponent,
    AdminSalesListComponent,
    AdminSalesDetailsComponent,
    AboutPageComponent,
    ContactPageComponent,
    CategoryPageComponent,
    ProductsListComponent,
    Error404Component
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
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
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
