import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './catalog/home-page/home-page.component';
import { DiscountPageComponent } from './catalog/discount-page/discount-page.component';

const routes: Routes = [
  { path: 'catalogue', component: HomePageComponent },
  { path: '', redirectTo: 'catalogue', pathMatch: 'full'},
  { path: 'promotions', component: DiscountPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
