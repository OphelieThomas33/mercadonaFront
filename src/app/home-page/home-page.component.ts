import { Component, OnInit } from '@angular/core';
import { Product } from '../catalog/products/product';
import { ProductService } from '../catalog/products/product.service';

@Component({
  selector: 'mcd-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title: string = "";
  products: Product[];

  constructor(private productService: ProductService,) {}

  ngOnInit():void {
    this.productList()
    console.log(this.products)
  }

  productList(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

}
