export class Point{
    //private x: number;
    //private y:number;
    constructor(private x?: number, private y?: number){ // we can you private here
        this.x = x;
        this.y = y;
    }
    point(){
        console.log("x " +this.x + " y "+this.y);
}
}