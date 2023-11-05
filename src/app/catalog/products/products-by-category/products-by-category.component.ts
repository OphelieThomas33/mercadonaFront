import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'mcd-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css'],
})
export class ProductsByCategoryComponent implements OnInit{

  title: string = "NOS PRODUITS";
  subtitle: string;
  productsByCategory: Product[];

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.categoriesService.getCategoryById(+id)
        .subscribe(category => {
          this.productsByCategory = category.products;
          this.subtitle = category.label;
        });
      }
    )
  }

}

