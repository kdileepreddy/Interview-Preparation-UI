import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javacode',
  templateUrl: './javacode.component.html',
  styleUrls: ['./javacode.component.scss']
})
export class JavacodeComponent implements OnInit {

public toggleColor:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

 toggleTheme():void{
this.toggleColor=!this.toggleColor;
 }
}
