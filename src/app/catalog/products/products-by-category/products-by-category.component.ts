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
  imgUrl: string = '../../../assets/banniere-header.png'

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    ) {}

  //
  ngOnInit() {
    // listen the api path with id param
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.categoriesService.getCategoryById(+id)
        .subscribe(
          category => {
          // returns products are in selected category
          this.productsByCategory = category.products;
          // returns label category
          this.subtitle = category.label;
        });
      }
    )
  }

}

