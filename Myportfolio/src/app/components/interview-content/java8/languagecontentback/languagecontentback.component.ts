import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'languagecontentback',
  templateUrl: './languagecontentback.component.html',
  styleUrls: ['./languagecontentback.component.scss']
})
export class LanguagecontentbackComponent implements OnInit {
@Input() content:any;
  constructor() { }

  ngOnInit(): void {
  }

}
