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
  title: string = "LISTE DES PRODUITS EN LIGNE";
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


  // run function after content of page is init
  ngAfterContentInit() {
    this.getProducts();
  }

  // navigate to product by id
  addDiscount(e: any, id: number) {
    this.router.navigate(['/intranet/produit/', id])
  }

  modifyProduct(product: Product) {

  }

  // empty product array to force the data to be updated on on init
  ngOnDestroy() {
    this.products = [];
  }

}
