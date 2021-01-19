import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminProductsListComponent } from './components/admin-products-list/admin-products-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';



import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { NoAuthService as NoAuthGuard } from './auth/no-auth-guard.service';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'search', component: SearchPageComponent},
  { path: 'search/:query', component: SearchPageComponent},
  { path: 'signin', component: SigninComponent, canActivate: [NoAuthGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard]},
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'shoppingcart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component:CheckoutPageComponent, canActivate:[AuthGuard]},
  { path: 'profile/order', component:OrderListComponent, canActivate:[AuthGuard]},
  { path: 'profile/order/:id', component:OrderDetailsComponent, canActivate:[AuthGuard]},
  { path: 'admin', redirectTo:'admin/dashboard', pathMatch:  'full' },
  { path: 'admin/dashboard', component:AdminDashboardComponent},
  { path: 'admin/signin', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
