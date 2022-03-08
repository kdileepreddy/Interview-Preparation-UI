import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'languagecontent',
  templateUrl: './languagecontent.component.html',
  styleUrls: ['./languagecontent.component.scss']
})
export class LanguagecontentComponent implements OnInit {

  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
