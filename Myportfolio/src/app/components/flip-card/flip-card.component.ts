import {
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
    private styleservice: StyleService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.Card == 'left') {
      this.styleservice.styleData.subscribe((data) => {
        if (this.styleservice.defaultTheme != data) {
          this.renderer.removeClass(
            this.cardCSS.nativeElement,
            this.styleservice.defaultTheme
          );
        }
        this.renderer.addClass(this.cardCSS.nativeElement, data);
        this.btnColor = this.styleservice.themeJson[data].cardbutton;
        this.rightBtnColor = data;
        this.styleservice.defaultTheme = data;
      });
    } else {
      this.styleservice.styleData.subscribe((data) => {
        this.btnColor = data;
      });
    }
  }
  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
