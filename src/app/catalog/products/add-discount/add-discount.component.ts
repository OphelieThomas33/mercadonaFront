import { AfterContentInit, Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from '../product';
import { Discount } from '../../discount';

@Component({
  selector: 'mcd-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements AfterContentInit {

  envUrl : any = environment.apiUrl;

  discountForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate:  new FormControl(null, Validators.required),
    percentage:  new FormControl(null, Validators.required),
  })

  product: Product;
  discount: any;
  modifiedProduct: any;
  messageAddDiscount: boolean = false;
  productForm: any;
  formDiscount: boolean = true;
  productCategories: number[];
  validationDiscount: boolean = false;
  errorMessage: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngAfterContentInit() {
    // listen the api path with id param
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.productService.getProductById(+id)
        .subscribe(
          (product: Product) => {
          // returns selected product
          this.product = product;

        });
      }
    )
    this.product = new Product();
    this.discount = new Discount();
  }

  // get only id of categories list
  getCategoriesId() {
    this.productCategories = new Array()
    this.product.category.forEach(
      (key) => this.productCategories.push(key['id']))
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
          if(response == undefined) {
            this.messageAddDiscount = false;
            this.formDiscount = true;
            this.validationDiscount = false;
            this.errorMessage = true;
          }
          else
          {
            this.discount = response;
            this.messageAddDiscount = true;
            this.formDiscount = false;
            this.errorMessage = false;

          }
         },
         // display error message
         error => {
          this.errorMessage = true;
          console.error('Erreur de connexion', error);
          this.messageAddDiscount = false;
          this.formDiscount = true;
         },
       )
    }

  validDiscount() {
    this.getCategoriesId()
    console.log(this.productCategories)
    this.productForm = {
      label: this.product.label,
      description: this.product.description,
      price: this.product.price,
      category: this.productCategories,
      discount: this.discount.id
    };

      console.log(this.productForm)
      console.log(this.modifiedProduct);
      this.productService.modifyProduct(this.product.id, this.productForm).subscribe(
        response => {
          if(response == undefined) {
            this.validationDiscount = false;
          }
          console.log(response)
          this.validationDiscount = true;
          setTimeout(() =>
          {
          this.router.navigate(['/intranet']);
          }, 4500)
        },
        // display error message
        error => {
          if(error == 401) {
            alert("Vous n'êtes pas authorisé à effectuer cette opération")
          }
          console.error('Erreur de connexion', error);
          alert("Une erreur est survenue, nous n'avons pas pu appliquer la promotion au produit sélectionné")
        },
      )

    }

  ngOnDestroy() {
    this.messageAddDiscount = false;
  }

}

