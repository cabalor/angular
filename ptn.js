"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    //private x: number;
    //private y:number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.point = function () {
        console.log("x " + this.x + " y " + this.y);
    };
    return Point;
}());
exports.Point = Point;
