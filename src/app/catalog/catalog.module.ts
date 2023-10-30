import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CatalogComponent } from './catalog.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductsByCategoryComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogComponent,
  ]
})
export class CatalogModule { }
