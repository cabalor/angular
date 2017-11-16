"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex_1 = require("./ex");
var like = new ex_1.Like(10, true);
like.clik();
console.log(like);
console.log('likeCounts: ${like.likeCounts}, isSelected: ${like.isSelected}');
