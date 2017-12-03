import { Directive, HostListener, ElementRef, Input } from '@angular/core';
//import { ElementRef } from '@angular/core/src/linker/element_ref';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {
  @Input('appFormatInput') format;

  constructor(private el: ElementRef) { }


  @HostListener('focus') inFocus(){
  
  }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase'){
    this.el.nativeElement.value = value.toUpperCase();
  }else {
    this.el.nativeElement.value = value.toLowerCase();
  }
  }

  

}
