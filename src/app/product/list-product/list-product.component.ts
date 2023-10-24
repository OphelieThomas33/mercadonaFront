import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-product-list';
import { Product } from '../product';


@Component({
  selector: 'mcd-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productList: Product[] = PRODUCTS;

  ngOnInit(): void {
      console.table(this.productList);
  }

}
