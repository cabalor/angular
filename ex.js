"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    //likeCounts: number; //filed 
    //isSelected: boolean; // filed
    function Like(_likeCounts, _isSelected) {
        //this.likeCounts = likeCounts; dont need to assign this when we have public variable in constructor
        this._likeCounts = _likeCounts;
        this._isSelected = _isSelected;
    }
    Like.prototype.clik = function () {
        // if(this.isSelected){
        //     this.likeCounts--;
        //     this.isSeected = false;
        // } else {
        //     this.likeCounts++;
        //     this.isSelecte4d=true;
        // }
        this._likeCounts = (this._isSelected) ? this._likeCounts - 1 : this._likeCounts + 1;
        //this.likeCounts += (this.isSelected)? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(Like.prototype, "likeCount", {
        get: function () {
            return this._likeCounts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
