
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories();

  }



  ngOnInit() {
  }

}
