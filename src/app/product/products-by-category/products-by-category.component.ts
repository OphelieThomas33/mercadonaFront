import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories/categories.service';
import { Category } from 'src/app/categories/category';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'mcd-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent {

  product: Product[]
  category: Category|undefined

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService
  ) {}







}
