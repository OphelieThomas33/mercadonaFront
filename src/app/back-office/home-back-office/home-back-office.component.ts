import { Component } from '@angular/core';
import { Product } from 'src/app/catalog/products/product';
import { ProductService } from 'src/app/catalog/products/product.service';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'mcd-home-back-office',
  templateUrl: './home-back-office.component.html',
  styleUrls: ['./home-back-office.component.css']
})
export class HomeBackOfficeComponent {

  title: string = "LISTE DE PRODUITS";
  subtitle: string = "";
  products: Product[];
  imgUrl: string = '../../../assets/banner-back-office.jpg'

  constructor(
    private productService: ProductService,
    private userService: UserService,
    ) {}

  ngOnInit():void {
    this.productList()
    this.userService.getProfile()
  }

  productList(): void {
  this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }
}
