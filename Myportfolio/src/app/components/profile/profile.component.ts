import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import vanillaTilt from 'vanilla-tilt';
// declare var VanillaTilt:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('card') card!: ElementRef;
  constructor(private dataservice: DataService) {}
  public document:Document | undefined; 
  ngOnInit(): void {
    this.dataservice.pagedata$.next('Profile');
    vanillaTilt.init(document.querySelectorAll('.tilt') as any);
    
  }
  toHome() :void{
    document.getElementById("home")?.scrollIntoView({behavior:'smooth'});
  }
  toResume(): void{
    document.getElementById("resume")?.scrollIntoView({behavior:'smooth'});
  }
  toProjects(): void{
    document.getElementById("projects")?.scrollIntoView({behavior:'smooth'});
  }
  toContact(): void{
    document.getElementById("contact")?.scrollIntoView({behavior:'smooth'});
  }
}
