import { Component } from '@angular/core';
import { Product } from '../catalog/products/product';
import { ProductService } from '../catalog/products/product.service';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'mcd-discount-page',
  templateUrl: './discount-page.component.html',
  styleUrls: ['./discount-page.component.css']
})
export class DiscountPageComponent  {

  title: string = "EN PROMOTION"
  products: Product[];
  discountedProducts: Product[];

  constructor(private productService: ProductService,) {}

  ngOnInit():void {
    this.productList()
    this.getDiscountedProducts()
  }

  productList(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  getDiscountedProducts(): void {
    this.productService.getProducts().pipe(
      map(products => products.filter(product => product.has_valid_discount)),
      ).subscribe(products => {
        this.discountedProducts = products;
      });
  }

}
