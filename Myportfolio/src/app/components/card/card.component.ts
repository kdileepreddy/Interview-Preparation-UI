import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // public languageContentJson: any;
  @Input() languageContent:any;
  @Input() languageSelected:any;
  constructor() {}

  ngOnInit(): void {
    
  }
}
