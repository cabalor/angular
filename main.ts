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
let endC = (mseeg as string).endsWith('c');
let altC = (<string> mseeg).endsWith('c');

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
}


let point = (PointObjc:Cords)=>{

}

point({
    x: 1,
    y: 2
})

