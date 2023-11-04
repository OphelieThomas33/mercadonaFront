import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { DiscountPageComponent } from './discount-page/discount-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    CatalogComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
    DiscountPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
  ],
  exports: [
    CatalogComponent,
    CategoryListComponent,
    ProductListComponent,
  ]
})
export class CatalogModule { }
