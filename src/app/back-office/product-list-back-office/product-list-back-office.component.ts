import { AfterContentInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/catalog/products/product';
import { ProductService } from 'src/app/catalog/products/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mcd-product-list-back-office',
  templateUrl: './product-list-back-office.component.html',
  styleUrls: ['./product-list-back-office.component.css']
})
export class ProductListBackOfficeComponent implements AfterContentInit {

  envUrl : any = environment.apiUrl;
  title: string = "LISTE DE PRODUITS";
  subtitle: string = "";
  products: Product[];
  product: Product;
  productId: number;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  getProducts() {
    // returns the product list to manage
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }


  ngAfterContentInit() {
    this.getProducts();
  }


  addDiscount(e: any, id: number) {
    this.router.navigate(['/intranet/produit/', id])
  }

  modifyProduct(product: Product) {

  }

  ngOnDestroy() {
    this.products = [];
  }

}
