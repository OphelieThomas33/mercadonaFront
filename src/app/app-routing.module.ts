import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscountPageComponent } from './discount-page/discount-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'catalogue', redirectTo: ''},
  { path: 'promotions', component: DiscountPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
