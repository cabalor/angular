export class Like{

    //likeCounts: number; //filed 
    //isSelected: boolean; // filed

    constructor(private _likeCounts: number, private _isSelected: boolean){
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

        this._likeCounts = (this._isSelected)? this._likeCounts-1: this._likeCounts+1;
        //this.likeCounts += (this.isSelected)? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get likeCount(){
        return this._likeCounts;
    }
    get isSelected(){
        return this._isSelected;
    }

}