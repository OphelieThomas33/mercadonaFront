import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { DiscountPageComponent } from './discount-page/discount-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDiscountComponent } from './products/add-discount/add-discount.component';
import { HttpClientModule } from '@angular/common/http';

const catalogRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalogue', redirectTo: '', pathMatch: 'full'},
  { path: 'categories/:id', component: ProductsByCategoryComponent},
];

@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
    DiscountPageComponent,
    HomePageComponent,
    AddProductComponent,
    AddDiscountComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(catalogRoutes),
  ],
  exports: [
    ProductListComponent,
    AddProductComponent,
    RouterModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [

  ]
})
export class CatalogModule { }
