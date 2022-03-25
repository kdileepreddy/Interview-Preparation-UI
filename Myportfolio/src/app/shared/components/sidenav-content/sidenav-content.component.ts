import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
  Input,
} from '@angular/core';
import { NavItem } from 'src/app/Interfaces/NavItem';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  public theme: any;
  public themeClass: any;
  public accountIcon: any;
  public MatExpansionPanel!: string;
  public themeNavLink: any;
  public themeActiveLink: any;
  public opened:boolean= false;
  public header: any;
  public sideNavTitle: any;
  @Input() sideBar:boolean = false;
  constructor(
    private styleservice: StyleService,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.styleservice.styleData.subscribe((data) => {
      this.theme = data;
      this.MatExpansionPanel = this.theme;
      this.header = data;
      this.sideNavTitle = this.styleservice.themeJson[data].title;
      this.accountIcon =
        'icon ' + this.styleservice.themeJson[this.theme].iconColor;
      this.themeNavLink = this.styleservice.themeJson[this.theme].navlink;
      this.themeActiveLink = this.styleservice.themeJson[this.theme].activelink;
    });
  }

  menu: NavItem[] = [
    {
      displayName: 'Interesting Facts',
      iconName: 'fact_check',
      route: 'facts',
    },
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard',
    },
    {
      displayName: 'Angular',
      iconName: 'font_download',
      route: 'angularContent',
    },
    {
      displayName: 'Java 8',
      iconName: 'code',
      route: 'Java8',
    },
    {
      displayName: 'Spring Boot',
      iconName: 'code',
      route: 'springboot-content',
    },
    {
      displayName: 'My Applications',
      iconName: 'apps',
      route: 'myApplications',
    },
  ];
  togglePanel():void{
    this.opened=true;
  }
}
