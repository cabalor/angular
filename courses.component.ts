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
    <input #email (keyup.enter)="onKeyUp(email.value)" /> 
    <!--<input [value]="name" (keyup.enter)="name=$event.target.value; "onKeyUp2()" />-->
    <input [(ngModel)]="name" (keyup.enter)="onKeyUp2()" />
    <br/>
    Liczby:<br/>
    {{numbers.str| uppercase}}<br/> 
    {{numbers.rating | number:'1.2-2'}}<br/>
    {{numbers.people | number}}<br/>
    {{numbers.price | currency:'PLN':true:'2.2-2'}}<br/>
    {{numbers.date | date:'shortDate'}}<br/>
    {{textField | summary: 10}}

`
// | is a pipe
//email is a template variable
})

export class CoursesComp{

title = "lista badziewi";
courses;
imageUrl = "nie ma";
colSpan = 2;
isActive = true;
name = "rybak";

textField = "asddasdasdsad aadasdsadad asdasdasdsaas asdasdsaddffdgfdgfdgdgdffdggd";


numbers ={
str: "dupa dupa bedzie duza",
rating: 4.56667,
people: 307045,
price: 23.676,
date: new Date(2017, 16,2)
}


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

onKeyUp(email){
    
        console.log("enter");
        console.log(email);
    // if($event.keyCode === 13){
    //     console.log("enter");
    // } we can use this with $event.
    //console.log($event.target.value); we need $event in function
}

onKeyUp2(){

    console.log(this.name);
}

}