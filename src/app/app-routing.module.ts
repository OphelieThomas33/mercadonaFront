import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './catalog/home-page/home-page.component';
import { DiscountPageComponent } from './catalog/discount-page/discount-page.component';
import { PageNotFoundComponent } from './other-pages/page-not-found/page-not-found.component';
import { ConditionsOfUseComponent } from './other-pages/conditions-of-use/conditions-of-use.component';

const routes: Routes = [
  { path: 'catalogue', component: HomePageComponent },
  { path: '', redirectTo: 'catalogue', pathMatch: 'full'},
  { path: 'promotions', component: DiscountPageComponent},
  { path: 'cgu', component: ConditionsOfUseComponent },
  { path: '**', component: PageNotFoundComponent}
  // { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
