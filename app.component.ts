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


}
