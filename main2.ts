import { Like } from './ex';


let like = new Like(10, true);
like.clik();
console.log(like);
console.log('likeCounts: ${like.likeCounts}, isSelected: ${like.isSelected}');