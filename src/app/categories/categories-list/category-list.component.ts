import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/product/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'mcd-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categoriesList: Category[];
  productList: Product[];
  products: Product;
  category: Category;
  categoryById: Category;

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService,
    private router: Router,
  ) {}

  ngOnInit():void {
    this.categoryService.getCategories()
      .subscribe(categoriesList => {
        this.categoriesList = categoriesList;
      });

    }

    getProductsByCategory(category: Category): any {
      console.log(category.products)
      return category.products
    }

  }

