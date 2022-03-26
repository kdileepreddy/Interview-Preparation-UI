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
  public radioValue!:any;
  public radioValue1!:any;
  public radioValue2!:any;
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
    this.radioValue1='resume'; 
    
  }
  toProjects(): void{
    document.getElementById("projects")?.scrollIntoView({behavior:'smooth'});
   
    this.radioValue='projects';
    
  }
  toContact(): void{
    document.getElementById("contact")?.scrollIntoView({behavior:'smooth'});
    
     this.radioValue2='contact';
  }
}
