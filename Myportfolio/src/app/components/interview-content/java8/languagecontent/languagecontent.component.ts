import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from 'src/app/Services/style.service';

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
