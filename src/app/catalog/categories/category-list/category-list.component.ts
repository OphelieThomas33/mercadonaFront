import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';

import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

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
    }

 }


