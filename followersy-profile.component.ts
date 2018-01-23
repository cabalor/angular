import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-followersy-profile',
  templateUrl: './followersy-profile.component.html',
  styleUrls: ['./followersy-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FollowersyProfileComponent implements OnInit {

  constructor(private router: Router) { }

  submit(){
    this.router.navigate(['/followers', /* req parametrs you can put here*/],{
      queryParams: {page: 1, order: "oldest"}
    })
  }

  ngOnInit() {
  
  }

}
