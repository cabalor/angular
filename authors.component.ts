import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {

  autor;


  constructor(service: AuthorsService ) { 
    this.autor = service.getAuthors();


  }

  ngOnInit() {
  }

}
