import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'codecontent',
  templateUrl: './codecontent.component.html',
  styleUrls: ['./codecontent.component.scss']
})
export class CodecontentComponent implements OnInit {
@Input() codelanguage:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.codelanguage);
  }

}
