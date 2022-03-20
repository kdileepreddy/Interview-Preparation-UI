import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
// import 'vanilla-tilt';
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
    // VanillaTilt.init(this.card.nativeElement);
  }
}
