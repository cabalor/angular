import { CorsesServ } from './courses.service';
import { ClickChangeArgs } from './favor/favor.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTitle: string;
  title = 'Angular app';

  tab=[];



  post = {
    title: "Title",
    clicked: true
  }


  message = {
    body: '..',
    clickNumber: 10,
    isActive: true
  }

  onClickedChange(eventArgs: ClickChangeArgs){
    console.log("clicked ", eventArgs);
  }

  viewSwitch = 'dupsko';

  games = [{id:1, name:"dungeon crawler"}, {id:2, name:"star wras crawler"},
{id:3, name:"arham crawler"}
]

addidtion(){
  this.games.push({id:4, name:'ryzkanci'});
}

remGame(game){
let int = this.games.indexOf(game);
this.games.splice(int, 1);
}

}
