import { Product } from './../../models/product';
import { OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table-aot';
import { query } from 'angular-4-data-table-aot/node_modules/@angular/core/src/animation/dsl';

@Component({
  selector: 'app-admin-produkty',
  templateUrl: './admin-produkty.component.html',
  styleUrls: ['./admin-produkty.component.css']
})
export class AdminProduktyComponent implements OnInit, OnDestroy {

    products: Product[];
    filteredProducts: any[];
    subscription: Subscription
    tableResources: DataTableResource<Product>;
    items: Product[] =[];
    itemCount: number;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll().
    subscribe(products => {
      this.filteredProducts = this.products = products;
      this.initTable(products);
    });
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

  private initTable(products: Product[]){
    this.tableResources = new DataTableResource(products);
    this.tableResources.query({offset: 0}).then(items => this.items = items);
    this.tableResources.count().then(count => this.itemCount = count);
  }

  reloadItems(params){
    if(!this.tableResources){
      return
    }
    this.tableResources.query(params).then(items => this.items = items);
  }


}
