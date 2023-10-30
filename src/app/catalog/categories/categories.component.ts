import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Category } from './category';

import { CategoriesService } from './categories.service';

@Component({
  selector: 'mcd-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  categoriesList: Category[];
  category: Category
  selectedCategory: Category;

  constructor(
    private categoryService: CategoriesService,
  ) {}

  ngOnInit():void {
    this.categoryService.getCategories()
      .subscribe(categoriesList => {
        this.categoriesList = categoriesList;
      });

    }


  selectCategory(category: Category):Category {
    console.log(category)
    return category
  }


    // getCategory(category: Category) {
    //   this.router.navigate(['/categories', category.id])
    // }

  }


