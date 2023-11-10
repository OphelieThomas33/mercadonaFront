import { NgModule } from '@angular/core';
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

const catalogRoutes: Routes = [
  { path: 'catalogue', component: HomePageComponent },
  { path: '', redirectTo: 'catalogue', pathMatch: 'full'},
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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UiModule,
    RouterModule.forRoot(catalogRoutes),
  ],
  exports: [
    ProductListComponent,
    AddProductComponent,
  ]
})
export class CatalogModule { }
