import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FollwersService } from '../follwers.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-follwers',
  templateUrl: './follwers.component.html',
  styleUrls: ['./follwers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FollwersComponent implements OnInit {

  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: FollwersService) { }

  ngOnInit() {

    Observable.combineLatest([ // tym zastepujemy route.paramMaps i route QueryParammaps
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(comb => {
      let id = comb[0].get('id'); // pobieramy pierwszego obeservable
      let strona = comb[1].get('strona');
      return this.service.getAll();
      
    }).subscribe(followers => this.followers = followers);




    //.subscribe(comb => { mapa to zastepuje
      // let id = comb[0].get('id'); // pobieramy pierwszego obeservable
      // let strona = comb[1].get('strona');

      // //this.service.getAll({id: id, page: page});
      // this.service.getAll().subscribe(followers => this.followers = followers);
   // });

    //this.service.getAll().subscribe(followers => this.followers = followers); //przeniesione do bloku wyzej
    
    // this.route.paramMap.subscribe(params =>{

    // }); // req params

    // this.route.queryParamMap. // w tym przypadku nie zmienia sie komponent, uzytkownik zostaje przekierowany za pomoca routa
    // subscribe(params => {     //opcjonalne paramsy

    // }); 

    
   
    //this.route.snapshot.paramMap.get(''); // tutaj component sie zmienia, jest tworzony na nowo, uzytkownik jest przekirowany na inna strone
    //let strona = this.route.snapshot.queryParamMap.get('strona');
  }

}
