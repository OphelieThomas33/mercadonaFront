import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../product';
import { environment } from '../../../environments/environment';
import { ProductService } from '../product.service';

@Component({
  selector: 'mcd-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {

  envUrl : any = environment.apiUrl;
  @Input() title: string;
  @Input() products: Product[];

  constructor(private productService: ProductService,) {}

  // productList(): void {
  //   this.productService.getProducts()
  //     .subscribe(products => {
  //       this.products = products;
  //     });
  // }



  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes) {
  //     this.productService.getProducts()
  //     .subscribe(products => {
  //       if (this.category = product.category) {
  //         this.category.products = products;
  //       }
  //     })
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes) {
  //     if (this.category) {
  //       console.log(this.category)
  //       this.products = this.category.products
  //       console.table(this.products)
  //     }
  //   }
  // }

  // ngOnDestroy() {
  //   this.
  // }
}
