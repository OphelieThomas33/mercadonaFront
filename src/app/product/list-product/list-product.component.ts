import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mcd-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService,) {}

  ngOnInit():void {
    this.productService.getProducts()
      .subscribe(productList => {
        this.productList = productList;
      });
  }


}


