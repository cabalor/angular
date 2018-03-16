import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  categories$;
  product= {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) { 
    this.categories$ = categoryService.getCategories();


    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.productService.getProduct(id).set(p => this.product =p);

    //if(id) this.productService.getProduct(id).take(1).subscribe(p => this.product =p);
  }


 save(product){
   
  console.log(product);
  this.productService.create(product);
  this.router.navigate(['/admin/products'])
 }


  ngOnInit() {
  }

}
