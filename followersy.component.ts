import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-followersy',
  templateUrl: './followersy.component.html',
  styleUrls: ['./followersy.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FollowersyComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //let x = this.route.snapshot.paramMap.get('id');// bedzie reinicjalizowal component
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id'); // + przed parametrem convertuje na liczbe
      console.log(id);
    })

  }

}
