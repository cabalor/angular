import { ProductService } from './../../product.service';

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  categories$;

  constructor(private router: Router,
    private categoryService: CategoryService,private productService: ProductService) { 
    this.categories$ = categoryService.getCategories();

  }


 save(product){
   
  console.log(product);
  this.productService.create(product);
  this.router.navigate(['/admin/products'])
 }


  ngOnInit() {
  }

}
