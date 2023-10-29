import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';



@NgModule({
  declarations: [
    ListProductComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListProductComponent,
  ]
})
export class ProductModule { }
