import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  sideBarOpen: boolean = true;
  public sideNavColor: any;
  public content: any;
  public contentCss: any;
  contentMargin: number = 17;
  constructor(private styleservice: StyleService,private dataservice: DataService) {}

  ngOnInit(): void {
    this.styleservice.styleData.subscribe((data) => {
      this.sideNavColor = data;
      this.contentCss =data;
      this.content = this.styleservice.themeJson[data].content;
    });
  }

  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen;
    if(!this.sideBarOpen) {
      this.contentMargin = 7;
      this.dataservice.carddata$.next(3);
    } else {
      this.contentMargin = 17;
      this.dataservice.carddata$.next(2);
    }
  }
}
