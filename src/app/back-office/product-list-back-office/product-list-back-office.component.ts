import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/catalog/products/product';
import { ProductService } from 'src/app/catalog/products/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mcd-product-list-back-office',
  templateUrl: './product-list-back-office.component.html',
  styleUrls: ['./product-list-back-office.component.css']
})
export class ProductListBackOfficeComponent implements OnInit{

  envUrl : any = environment.apiUrl;
  title: string = "LISTE DE PRODUITS";
  subtitle: string = "";
  products: Product[];
  product: Product;
  productId: number;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
  // returns the product list to manage
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }


  addDiscount(product: Product) {
    // if(product.id) {
    //   this.productService.getProductById(+product.id)
    //   .subscribe(product => this.product = product)
    // } else {
    //   this.product = undefined;
    // }
    }

}
