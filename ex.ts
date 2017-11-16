export class Like{

    //likeCounts: number; //filed 
    //isSelected: boolean; // filed

    constructor(public likeCounts: number, public isSelected: boolean){
        //this.likeCounts = likeCounts; dont need to assign this when we have public variable in constructor

    }
    clik(){
        // if(this.isSelected){
        //     this.likeCounts--;
        //     this.isSeected = false;
        // } else {
        //     this.likeCounts++;
        //     this.isSelecte4d=true;
        // }

        this.likeCounts = (this.isSelected)? this.likeCounts-1: this.likeCounts+1;
        //this.likeCounts += (this.isSelected)? -1 : 1;
        this.isSelected = !this.isSelected;
    }
}