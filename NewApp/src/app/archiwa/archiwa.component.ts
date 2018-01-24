import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-archiwa',
  templateUrl: './archiwa.component.html',
  styleUrls: ['./archiwa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArchiwaComponent implements OnInit {

  year: number;
  month: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  lookaj(){
    this.router.navigate(['/']);
  }

}
