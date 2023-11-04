import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductsByCategoryComponent } from './products/products-by-category/products-by-category.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CatalogComponent,
    CategoryListComponent,
    ProductListComponent,
  ]
})
export class CatalogModule { }
