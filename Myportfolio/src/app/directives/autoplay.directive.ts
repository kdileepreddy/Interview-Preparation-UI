import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appAutoplay]'
})
export class AutoplayDirective implements OnInit{
@Input() appAutoplay:any ='';
  constructor(private el:ElementRef,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
      
  }
  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.src = this.appAutoplay.changingThisBreaksApplicationSecurity+'?autoplay=1&mute=1';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.src = this.appAutoplay.changingThisBreaksApplicationSecurity+'?autoplay=0&mute=1';
  }

}
