import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/category';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'mcd-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productForm: FormGroup = new FormGroup({
    label: new FormControl(''),
    description:  new FormControl(''),
    image:  new FormControl(''),
    price:  new FormControl(''),
    category:  new FormControl(''),
    subcategory:  new FormControl(''),
    categories: new FormArray([])
  })

  category: Category;
  categories: Category[];
  productCategories: any;
  product: any;

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
    })
    this.productCategories = new Array<number>()
  }


  getCategoriesId(e: any, id: number) {
    if(e.target.checked) {
      console.log(JSON.stringify(id)+ 'checked')
      this.productCategories.push(id)
    }
    else
    {
      console.log(JSON.stringify(id)+ + 'unchecked')
      this.productCategories = this.productCategories.filter((m: any) => m != id)
    }
    console.log(this.productCategories)
  }


  onSubmit(): any {

    this.product = {
      label: this.productForm.get('label')?.value,
      description: this.productForm.get('description')?.value,
      image: this.productForm.get('image')?.value,
      price: this.productForm.get('price')?.value,
      category: this.productCategories,
    }
    // save in local storage informations sent back by login()
    this.productService.addProduct(this.product).subscribe(
      response => {
        console.log(response);
      },
      // display error message if wronf credentials
      error => {
        console.error('Erreur de connexion', error);
      }
    )
  }
}
