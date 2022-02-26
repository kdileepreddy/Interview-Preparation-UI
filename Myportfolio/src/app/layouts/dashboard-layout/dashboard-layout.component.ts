import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  sideBarOpen: BooleanInput = true;
  public sidenavColor:any;
  constructor( private styleservice: StyleService) {}

  ngOnInit(): void {
    this.styleservice.styleData.subscribe((data) => {
      this.sidenavColor = data;
    });
  }

  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
