import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-produkty',
  templateUrl: './admin-produkty.component.html',
  styleUrls: ['./admin-produkty.component.css']
})
export class AdminProduktyComponent implements OnInit {

    products$;

  constructor(private productService: ProductService) { 
    this.products$ = this.productService.getAll();
  }

  ngOnInit() {
  }

}
