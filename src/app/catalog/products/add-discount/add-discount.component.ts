import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/category';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Product } from '../product';

@Component({
  selector: 'mcd-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {

  envUrl : any = environment.apiUrl;

  discountForm: FormGroup = new FormGroup({
    startDate: new FormControl(''),
    endDate:  new FormControl(''),
    percentage:  new FormControl(''),
  })

  product: Product;
  discount: any;
  modifiedProduct: any;
  messageAddDiscount: boolean = false;

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // listen the api path with id param
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.productService.getProductById(+id)
        .subscribe(
          product => {
          // returns selected product
          this.product = product;

        });
      }
    )
  }

  createDiscount(): any {

    this.discount = {
      start_date: this.discountForm.get('startDate')?.value,
      end_date: this.discountForm.get('endDate')?.value,
      percentage: this.discountForm.get('percentage')?.value,
    }
    // post the new discount on database
   this.productService.addDiscount(this.discount).subscribe(
      response => {
        this.discount = response;
        this.messageAddDiscount = true;
      },
      // display error message
      error => {
        console.error('Erreur de connexion', error);
        this.messageAddDiscount = false;
      },
    )

  }

  validDiscount() {
      this.modifiedProduct = {
        label: this.product.label,
        description: this.product.description,
        price: this.product.price,
        category: [this.product.category[0]['id'], this.product.category[0]['id'] ],
        discount: this.discount.id
      }
      this.productService.modifyProduct(this.product.id, this.modifiedProduct).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['/intranet'])
        },
        // display error message
        error => {
          console.error('Erreur de connexion', error);
        },
      )

    }





  ngOnDestroy() {
    this.messageAddDiscount = false;
  }


}
