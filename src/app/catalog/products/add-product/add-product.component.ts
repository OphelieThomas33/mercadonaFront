import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mcd-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],

})
export class AddProductComponent implements OnInit{

  categories: any;
  productForm: FormGroup;
  categoriesForm: FormGroup;
  productCategories: any | number[];
  image: any;
  newProduct: any;
  file: any;
  imageData: any;
  formData: FormData;

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService,
    private router: Router,
  ) {
    this.productForm = new FormGroup({
      label: new FormControl(null, Validators.required),
      description:  new FormControl(null, Validators.required),
      image:  new FormControl(null, Validators.required),
      price:  new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      subcategory: new FormControl(null, Validators.required),
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
    // this.newProduct = {
    //   label: this.productForm.get('label')?.value,
    //   description: this.productForm.get('description')?.value,
    //   image: this.image,
    //   price: this.productForm.get('price')?.value,
    //   category: this.productCategories
    // }
    // console.log(this.newProduct)
    this.formData = new FormData();
    this.formData.append('label', this.productForm.get('label')?.value,)
    this.formData.append('description', this.productForm.get('description')?.value)
    this.formData.append('price', this.productForm.get('price')?.value)
    this.productCategories.forEach((cat: any) =>{this.formData.append('category', cat)})
    // this.formData.append('category', this.productCategories )
    this.formData.append('image', this.image, this.image.name)
    console.log(this.formData)
    this.productService.addProduct(this.formData).subscribe(
      response => {
        console.log(response);
        alert("Nous venez d'ajouter le produit suivant : ")
        this.router.navigate(['/intranet'])

      },
      // display error message if wronf credentials
      error => {
        console.error('Erreur de connexion', error);
      }
  )

  }
}

