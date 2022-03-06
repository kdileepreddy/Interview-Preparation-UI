import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-java8',
  templateUrl: './java8.component.html',
  styleUrls: ['./java8.component.scss']
})
export class Java8Component implements OnInit {

  public flip:boolean = false;
  constructor(private dataservice: DataService, private renderer: Renderer2,
    private el: ElementRef) { }

  ngOnInit(): void {
    this.dataservice.pagedata$.next('Java 8');
  }

  cardFlip(): void{
    this.flip = !this.flip;
  }
 
}
