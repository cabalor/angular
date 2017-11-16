import { Point } from "./ptn";

function log(message){

    console.log(message);
}

var mes = "helloWorld";

log(mes);


var number = 1;
let count = 2; // the same, but in function let will be scoped only in eg. loop 

function lop(){

    for(let i =0; i<5; i++){

        console.log(i);
    }

    var ii =5;
    console.log("final" + ii); // not possible to coompile, if i was var you could use it outside loop
}

let c: number;
let b: boolean;
let g: string;
let k: any;
c =1;
b = true;
g = 'a';
k = 5;
k ='f';
let arry: number[] = [1,2,3];
let arr: any[] = [1, true,'g'];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red, Green, Bluee};
let bacgroundCol = Color.Red;

let mseeg; 
mseeg = 'abc';
//let endC = (mseeg as String).endsWith('c');
//let altC = (<string> mseeg).endsWith('c');

let log2 = function(xxx){
    console.log(xxx)
}
let doLog=(messa)=>{
    console.log(messa);
}
let dolog2 =(mes)=>console.log(mes);

interface Cords{
    x: number,
    y: number
    point: () => void
}

class Cord{
    //private x: number;
    //private y:number;

    point(){
            console.log("x " +this.x + " y "+this.y);
    }
    constructor(private x?: number, private y?: number){ // we can you private here
        this.x = x;
        this.y = y;
    }
    get X(){
        return this.x;
    }

    set X(value){
        if(value<0){
            throw new Error("value less than 0");
        }else {
            this.x = value;
        } 
    }
}


let point = new Point(3.5);
let ptn = new Cord(2,5);
let x = ptn.X
ptn.X = 10;
ptn.point();



