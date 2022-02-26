import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/Services/style.service';
@Component({
  selector: 'app-sidenav-header',
  templateUrl: './sidenav-header.component.html',
  styleUrls: ['./sidenav-header.component.scss'],
})
export class SidenavHeaderComponent implements OnInit {
  public header: any;
  public sideNavTitle: any;
  constructor(private styleservice: StyleService) {}

  ngOnInit(): void {
    this.styleservice.styleData.subscribe((data) => {
      this.header = data;
      this.sideNavTitle = this.styleservice.themeJson[data].title;
    });
  }
}
