import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './catalog/home-page/home-page.component';
import { DiscountPageComponent } from './catalog/discount-page/discount-page.component';
import { PageNotFoundComponent } from './other-pages/page-not-found/page-not-found.component';
import { ConditionsOfUseComponent } from './other-pages/conditions-of-use/conditions-of-use.component';
import { LegalNoticesComponent } from './other-pages/legal-notices/legal-notices.component';
import { ProductsByCategoryComponent } from './catalog/products/products-by-category/products-by-category.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeBackOfficeComponent } from './back-office/home-back-office/home-back-office.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductListBackOfficeComponent } from './back-office/product-list-back-office/product-list-back-office.component';
import { AddProductComponent } from './catalog/products/add-product/add-product.component';
import { AddDiscountComponent } from './catalog/products/add-discount/add-discount.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalogue', redirectTo: '' },
  { path: 'categories/:id', component: ProductsByCategoryComponent},
  { path: 'promotions', component: DiscountPageComponent},
  { path: 'cgu', component: ConditionsOfUseComponent },
  { path: 'mentions-legales', component: LegalNoticesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'intranet', component: HomeBackOfficeComponent, canActivate: [AuthGuard],
    children: [
    {
      path: 'nouveau-produit',
      component: AddProductComponent,
      canActivate: [AuthGuard],
      pathMatch: 'full'
    },
    {
      path: 'produit/:id',
      component: AddDiscountComponent,
      canActivate: [AuthGuard],
      pathMatch: 'full'
    },
    {
      path: '',
      component: ProductListBackOfficeComponent,
      canActivate: [AuthGuard],
      pathMatch: 'full'
    },
]},
  { path: '**', component: PageNotFoundComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
