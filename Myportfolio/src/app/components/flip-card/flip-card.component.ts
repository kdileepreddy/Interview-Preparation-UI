import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  public btnColor: any;
  public rightBtnColor: any;
  toggleProperty = false;
  @Input() Card: any = '';
  @ViewChild('cardCSS') cardCSS!: ElementRef;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private styleservice: StyleService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.styleservice.styleData.subscribe((data) => {
      if (this.Card == 'left') {
        if (this.styleservice.defaultTheme != data) {
          this.renderer.removeClass(
            this.cardCSS.nativeElement,
            this.styleservice.defaultTheme
          );
        }
        this.renderer.addClass(this.cardCSS.nativeElement, data);
        this.btnColor = this.styleservice.themeJson[data].cardbutton;
        this.rightBtnColor = data;
        if (this.toggleProperty == false) {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0.35rem 0 0 0.35rem'
          );
        } else  {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0 0.35rem 0.35rem 0'
          );
        }
        
        this.cd.detectChanges();
      } else if (this.Card == 'right') {
        this.btnColor = data;
        this.styleservice.defaultTheme = data;
        if (this.toggleProperty == false) {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0 0.35rem 0.35rem 0'
          );
        } else {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0.35rem 0 0 0.35rem'
          );
        }
        this.cd.detectChanges();
      }
    });
  }
  toggle() {
    this.toggleProperty = !this.toggleProperty;
    if (this.toggleProperty == false && this.Card =='left') {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0.35rem 0 0 0.35rem'
          );
        } else if (this.Card =='left')  {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0 0.35rem 0.35rem 0'
          );
        }
        if (this.toggleProperty == false && this.Card =='right') {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0 0.35rem 0.35rem 0'
          );
        } else if (this.toggleProperty == true && this.Card =='right')  {
          this.renderer.setStyle(
            this.cardCSS.nativeElement,
            'border-radius',
            '0.35rem 0 0 0.35rem'
          );
        }
  }
}
