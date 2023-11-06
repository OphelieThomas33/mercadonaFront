import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './catalog/home-page/home-page.component';
import { DiscountPageComponent } from './catalog/discount-page/discount-page.component';
import { PageNotFoundComponent } from './other-pages/page-not-found/page-not-found.component';
import { ConditionsOfUseComponent } from './other-pages/conditions-of-use/conditions-of-use.component';
import { LegalNoticesComponent } from './other-pages/legal-notices/legal-notices.component';
import { ProductsByCategoryComponent } from './catalog/products/products-by-category/products-by-category.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'catalogue', component: HomePageComponent },
  { path: '', redirectTo: 'catalogue', pathMatch: 'full'},
  { path: 'categories/:id', component: ProductsByCategoryComponent},
  { path: 'promotions', component: DiscountPageComponent},
  { path: 'cgu', component: ConditionsOfUseComponent },
  { path: 'mentions-legales', component: LegalNoticesComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
