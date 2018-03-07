import { ProductService } from './../../product.service';

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService,private productService: ProductService) { 
    this.categories$ = categoryService.getCategories();

  }


 save(product){
   
  console.log(product);
  this.productService.create(product);
 }


  ngOnInit() {
  }

}
