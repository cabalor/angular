"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ptn_1 = require("./ptn");
function log(message) {
    console.log(message);
}
var mes = "helloWorld";
log(mes);
var number = 1;
var count = 2; // the same, but in function let will be scoped only in eg. loop 
function lop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    var ii = 5;
    console.log("final" + ii); // not possible to coompile, if i was var you could use it outside loop
}
var c;
var b;
var g;
var k;
c = 1;
b = true;
g = 'a';
k = 5;
k = 'f';
var arry = [1, 2, 3];
var arr = [1, true, 'g'];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Bluee"] = 2] = "Bluee";
})(Color || (Color = {}));
;
var bacgroundCol = Color.Red;
var mseeg;
mseeg = 'abc';
//let endC = (mseeg as String).endsWith('c');
//let altC = (<string> mseeg).endsWith('c');
var log2 = function (xxx) {
    console.log(xxx);
};
var doLog = function (messa) {
    console.log(messa);
};
var dolog2 = function (mes) { return console.log(mes); };
var Cord = /** @class */ (function () {
    function Cord(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    //private x: number;
    //private y:number;
    Cord.prototype.point = function () {
        console.log("x " + this.x + " y " + this.y);
    };
    Object.defineProperty(Cord.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value less than 0");
            }
            else {
                this.x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Cord;
}());
var point = new ptn_1.Point(3.5);
var ptn = new Cord(2, 5);
var x = ptn.X;
ptn.X = 10;
ptn.point();
