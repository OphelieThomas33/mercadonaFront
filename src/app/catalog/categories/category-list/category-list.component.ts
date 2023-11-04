import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

import { CategoriesService } from '../categories.service';

@Component({
  selector: 'mcd-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  categoriesList: Category[];
  category: Category | undefined;

  constructor(
    private categoryService: CategoriesService,
  ) {}

  ngOnInit():void {
    this.categoryService.getCategories()
      .subscribe(categoriesList => {
        this.categoriesList = categoriesList;
      });
    this.category = undefined;

    }


  selectCategory(category: Category): Category {
    // this.selectedCategory = selectedCategory
    // console.log(this.selectedCategory)
    // return this.selectedCategory
    this.category = category
    console.log(category)
    return category
  }

  // allProducts(): Category {
  //   this.selectedCategory == null
  //   console.log(this.selectedCategory)
  //   return this.selectedCategory
  // }


    // getCategory(category: Category) {
    //   this.router.navigate(['/categories', category.id])
    // }

  }


