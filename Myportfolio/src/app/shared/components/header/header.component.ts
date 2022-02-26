import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../dialog/confirmation-dialog/confirmation-dialog.component';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageName: string = '';
  public header: any;
  public search: any;
  public accountButton: any;
  public menuItem: any;
  searchFormControl = new FormControl();
  constructor(
    private dataservice: DataService,
    public dialog: MatDialog,
    private styleservice: StyleService
  ) {}
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.dataservice.pagedata.subscribe((data): any => {
      this.pageName = data;
    });
    this.styleservice.styleData.subscribe((data) => {
      this.header = this.styleservice.themeJson[data].header;
      this.accountButton = this.styleservice.themeJson[data].button;
      this.search = this.styleservice.themeJson[data].search;
      this.menuItem = data;
    });
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  showPreferencesPopup(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      height: '400px',
      data: { title: 'Preferences', message: 'empty' },
    });
  }
}
