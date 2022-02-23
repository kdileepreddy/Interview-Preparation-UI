import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageName: string = '';
  searchFormControl = new FormControl();
  constructor(private dataservice: DataService) {}
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.dataservice.pagedata.subscribe((data): any => {
      this.pageName = data;
    });
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
