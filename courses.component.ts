import {Component} from '@angular/core';
import { CorsesServ } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    <button class="btn btn-primary"[class.active]="isActive">save</button>

    <button [style.backgroundColor]="isActive ? 'blue':'gree'">2nd butn</button><br>

    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">trzeci button</button>
    </div>

    <img src="{{imageUrl}}"/>
    <img [src]="title"/>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
`
})

export class CoursesComp{

title = "lista badziewi";
courses;
imageUrl = "nie ma";
colSpan = 2;
isActive = true;

constructor(service: CorsesServ){     //injection autowired etc;
    this.courses = service.getCourses();
}


getTitle(){
    return this.title;
}

onSave($event){
    $event.stopPropagation();
    console.log("klicked", $event);
}

onDivClicked(){
 console.log("div div");

}

}