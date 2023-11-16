import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product';


@Component({
  selector: 'mcd-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  title: string = "NOS PRODUITS";
  subtitle: string = "";
  products: Product[];
  imgUrl: string = '../../../assets/cadre-legumes-plat.jpg'

  constructor(private productService: ProductService,) {}

  ngOnInit():void {
    this.productList()
  }

  productList(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  ngAfterContentInit() {
    this.productList()
  }

  ngOnDestroy() {
    this.products = [];
  }
}
