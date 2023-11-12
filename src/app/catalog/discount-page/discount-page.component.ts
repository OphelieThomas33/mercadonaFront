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
  imgUrl: string = '../../../assets/cadre-legumes-plat.png'

  constructor(private productService: ProductService,) {}

  // display discounted products during init
  ngOnInit():void {
    this.getDiscountedProducts()
  }

  // get discounted products
  getDiscountedProducts(): void {
    this.productService.getProducts().pipe(
      // returns all products with has_valid_discount = true
      map(products => products.filter(product => product.has_valid_discount)),
      ).subscribe(products => {
        this.discountedProducts = products;
      });
  }

}
