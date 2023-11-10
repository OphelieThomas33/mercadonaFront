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

  // get all categories
  ngOnInit():void {
    this.categoryService.getCategories()
      .subscribe(categoriesList => {
        this.categoriesList = categoriesList;
      });
    }

 }


