import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-java8',
  templateUrl: './java8.component.html',
  styleUrls: ['./java8.component.scss']
})
export class Java8Component implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.pagedata$.next('Java 8');
  }

}
