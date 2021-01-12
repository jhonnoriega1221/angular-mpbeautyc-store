import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'search', component: SearchPageComponent},
  { path: 'search/:query', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
