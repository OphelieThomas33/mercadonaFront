import { Component, Input } from '@angular/core';
import { Product } from './product';
import { Category } from '../categories/category';
import { ProductService } from './product.service';

@Component({
  selector: 'mcd-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[]
  @Input() category: Category;
  productsByCategory: Product[];

  constructor(private productService: ProductService,) {}

  ngOnInit():void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  // getProductsByCategory(category: Category): Product[] {
  //   console.log(category.products)
  //   return category.products
  // }


}
