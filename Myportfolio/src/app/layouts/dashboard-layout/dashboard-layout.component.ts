import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  sideBarOpen: BooleanInput = true;

  constructor() {}

  ngOnInit(): void {}

  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
