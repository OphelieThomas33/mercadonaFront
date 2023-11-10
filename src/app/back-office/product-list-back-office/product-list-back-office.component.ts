import { Component, Input } from '@angular/core';
import { Product } from 'src/app/catalog/products/product';
import { ProductService } from 'src/app/catalog/products/product.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'mcd-product-list-back-office',
  templateUrl: './product-list-back-office.component.html',
  styleUrls: ['./product-list-back-office.component.css']
})
export class ProductListBackOfficeComponent {

  envUrl : any = environment.apiUrl;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: Product[];
  product: Product;
  productId: number;

  constructor(private productService: ProductService) {

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
