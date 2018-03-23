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
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.getProduct(this.id).set(p => this.product = p);

    //if(id) this.productService.getProduct(id).take(1).subscribe(p => this.product =p);
  }


  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      console.log(product);
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);

  }

  delete(){
      if(!confirm('do you want to del product')){
        return;
      }
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);

  }


  ngOnInit() {
  }

}
