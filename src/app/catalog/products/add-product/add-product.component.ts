import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/category';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mcd-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productForm: FormGroup = new FormGroup({
    label: new FormControl(''),
    description:  new FormControl(''),
    price:  new FormControl(''),
    category:  new FormControl(''),
    subcategory:  new FormControl(''),
    image:  new FormControl(''),
  })

  category: Category;
  categories: Category[];

  constructor(
    private categoryService: CategoriesService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
    })
  }

  onSubmit() {}
}
