"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    //likeCounts: number; //filed 
    //isSelected: boolean; // filed
    function Like(likeCounts, isSelected) {
        //this.likeCounts = likeCounts; dont need to assign this when we have public variable in constructor
        this.likeCounts = likeCounts;
        this.isSelected = isSelected;
    }
    Like.prototype.clik = function () {
        // if(this.isSelected){
        //     this.likeCounts--;
        //     this.isSeected = false;
        // } else {
        //     this.likeCounts++;
        //     this.isSelecte4d=true;
        // }
        this.likeCounts = (this.isSelected) ? this.likeCounts - 1 : this.likeCounts + 1;
        //this.likeCounts += (this.isSelected)? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    return Like;
}());
exports.Like = Like;
