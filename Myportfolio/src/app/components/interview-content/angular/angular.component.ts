import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.pagedata$.next('Angular');
  }
}
