import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryListService } from './category-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mcd-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categoriesList: Category[];
  parentCategoriesList: Category[];
  showSubcategories: boolean = false;

  constructor(
    private categoryService: CategoryListService,
    private router: Router,
  ) {}

  ngOnInit():void {
    this.categoryService.getCategories()
      .subscribe(categoriesList => {
        this.categoriesList = categoriesList;
      });
  }


  }
