import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-spring-boot',
  templateUrl: './spring-boot.component.html',
  styleUrls: ['./spring-boot.component.scss'],
})
export class SpringBootComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.pagedata$.next('Spring Boot');
  }
}
