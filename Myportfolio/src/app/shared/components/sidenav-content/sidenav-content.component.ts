import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/Interfaces/NavItem';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu: NavItem [] = [
    {
      displayName: 'Interesting Facts',
      iconName: 'fact_check',
      route: 'interesting-facts',
    },   
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard',
    },        
    {
      displayName: 'Interview Content',
      iconName: 'source',
      children: [
        {
          displayName: 'Angular',
          iconName: 'font_download',
          route: 'angularContent'
        },
        { 
          displayName: 'Spring Boot',
          iconName: 'code',
          route: 'springboot-content'
        }
      ]
    },
    {
      displayName: 'My Applications',
      iconName: 'apps',          
      route: 'myApplications'
     
    }
  ];
}
