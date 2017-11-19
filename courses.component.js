"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CoursesComp = /** @class */ (function () {
    function CoursesComp(service) {
        this.title = "lista badziewi";
        this.imageUrl = "nie ma";
        this.colSpan = 2;
        this.isActive = true;
        this.courses = service.getCourses();
    }
    CoursesComp.prototype.getTitle = function () {
        return this.title;
    };
    CoursesComp.prototype.onSave = function ($event) {
        $event.stopPropagation();
        console.log("klicked", $event);
    };
    CoursesComp.prototype.onDivClicked = function () {
        console.log("div div");
    };
    CoursesComp = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n    <h2>{{title}}</h2>\n    <ul>\n    <li *ngFor=\"let course of courses\">\n    {{course}}\n    </li>\n    </ul>\n    <button class=\"btn btn-primary\"[class.active]=\"isActive\">save</button>\n\n    <button [style.backgroundColor]=\"isActive ? 'blue':'gree'\">2nd butn</button><br>\n\n    <div (click)=\"onDivClicked()\">\n        <button (click)=\"onSave($event)\">trzeci button</button>\n    </div>\n\n    <img src=\"{{imageUrl}}\"/>\n    <img [src]=\"title\"/>\n    <table>\n        <tr>\n            <td [attr.colspan]=\"colSpan\"></td>\n        </tr>\n    </table>\n"
        })
    ], CoursesComp);
    return CoursesComp;
}());
exports.CoursesComp = CoursesComp;
