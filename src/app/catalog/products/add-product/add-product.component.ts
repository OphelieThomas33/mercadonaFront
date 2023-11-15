import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'mcd-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],

})
export class AddProductComponent implements OnInit {

  categories: any;
  productForm: FormGroup;
  categoriesForm: FormGroup;
  productCategories: number[];
  product: Product;
  image: any;
  newProduct: any;
  file: any;
  imageData: any;
  formData: FormData;
  errorValidation: boolean = false;
  validationAdd: boolean = false;


  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService,
    private router: Router,
  ) {
    this.productForm = new FormGroup({
      label: new FormControl(null, Validators.required),
      description:  new FormControl(null),
      image:  new FormControl(null, Validators.required),
      price:  new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      subcategory: new FormControl(null),
    });
  }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
    })
    this.file = document.getElementById('image');
    this.file.addEventListener('change', (event: any) => {
      const files = event.target.files;
      this.image = files[0];
      }
    );
    this.productCategories = new Array();
  }

  getCategoriesId(e: any, id: number) {
    if(e.target.checked) {
      console.log((+id)+ 'checked')
      this.productCategories.push(+id)
    }
    else
    {
      console.log((+id)+ 'unchecked')
      this.productCategories = this.productCategories.filter((m: any) => m != id)
    }
    console.log(this.productCategories)
  }

    onSubmit(): any {
    console.log(this.productForm)
    console.log(this.productCategories)
    console.log(this.image)

    this.formData = new FormData();
    this.formData.append('label', this.productForm.get('label')?.value,)
    this.formData.append('description', this.productForm.get('description')?.value)
    this.formData.append('price', this.productForm.get('price')?.value)
    this.productCategories.forEach((cat: any) =>{this.formData.append('category', cat)})
    this.formData.append('image', this.image, this.image.name)
    console.log(this.formData)

    this.productService.addProduct(this.formData).subscribe(
        response => {
          if (response == undefined) {
            console.log(response)
            this.errorValidation = true;
            this.validationAdd = false;
          }
          else
          {
            this.errorValidation = false;
            this.validationAdd = true;
            setTimeout(() =>
            {
              this.router.navigate(['/intranet']);
            }, 4000)
          }


        },
        error => {
          alert("Une erreur s'est produite, la création du produit n'a pas pu aboutir.")
          this.errorValidation = true;
          console.log(error)
        })
      }
    }




