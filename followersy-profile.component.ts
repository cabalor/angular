import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followersy-profile',
  templateUrl: './followersy-profile.component.html',
  styleUrls: ['./followersy-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FollowersyProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //let x = this.route.snapshot.paramMap.get('id');// bedzie reinicjalizowal component
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id'); // + przed parametrem convertuje na liczbe
      console.log(id);
    })

  }

}
