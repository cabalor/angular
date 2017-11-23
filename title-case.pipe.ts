import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    
    if(!value){
      return null;
    }
    let words = value.split(' ');
    for(var i =0; i< words.length;i++){
      let wd = words[i];
      if(i > 0 && this.isPrepos(wd)){
        words[i] = wd.toLowerCase();
      }else {
        words[i] = this.toTitleCase(wd);
      }
    }
    return words.join(' ');
  }


  private toTitleCase(word: string): string{
    return word = word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
  }


  private isPrepos(word: string): boolean{
    let prepositions=[
      "of",
      "the",
      "or",
      "and",
      "that",
      "this"
    ]
return prepositions.includes(word.toLowerCase());
  }


}
