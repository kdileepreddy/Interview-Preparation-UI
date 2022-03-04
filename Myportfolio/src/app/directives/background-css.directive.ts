import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundCSS]'
})
export class BackgroundCSSDirective {
  @Input() leftCard:any ='';
  constructor(private el:ElementRef) { }

}
