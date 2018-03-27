import { OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-produkty',
  templateUrl: './admin-produkty.component.html',
  styleUrls: ['./admin-produkty.component.css']
})
export class AdminProduktyComponent implements OnInit, OnDestroy {

    products: Product[];
    filteredProducts: any[];
    subscription: Subscription


  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll().
    subscribe(products => this.filteredProducts = this.products = products);
  }


  ngOnDestroy(){
 this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  filter(query: string){
    this.filteredProducts = (query)?
    this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.products

  }




}
