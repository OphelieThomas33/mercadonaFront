import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product';

@Component({
  selector: 'mcd-discount-page',
  templateUrl: './discount-page.component.html',
  styleUrls: ['./discount-page.component.css']
})
export class DiscountPageComponent  {

  title: string = "NOS PROMOTIONS";
  subtitle: string = "";
  products: Product[];
  discountedProducts: Product[];
  imgUrl: string = '../../../assets/banniere-header.png'

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
