import { AfterContentInit, Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoriesService } from '../../categories/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Product } from '../product';

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

  product: any;
  discount: any;
  modifiedProduct: any;
  messageAddDiscount: boolean = false;
  productForm: any;
  formDiscount: boolean = true;

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
           this.formDiscount = false;
         },
         // display error message
         error => {
           if(error == 401) {
             alert("Vous n'êtes pas authorisé à effectuer cette opération")
           } else {
             alert("Une erreur est survenue, nous n'avons pas pu créer la promotion saisie.")
           }
           console.error('Erreur de connexion', error);
           this.messageAddDiscount = false;
           this.formDiscount = true;
         },
       )
    }

  validDiscount() {
      this.productForm = {
        label: this.product.label,
        description: this.product.description,
        price: this.product.price,
        category: [this.product.category[0]['id'], this.product.category[1]['id'] ],
        discount: this.discount.id
      }
      console.log(this.modifiedProduct)
      this.productService.modifyProduct(this.product.id, this.productForm).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['/intranet'])
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
