import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  public title: string = '';
  public message: string = '';
  public NumberOfCards: any;
  public preferences: any = ['Cards per row', 'Theme of the application'];
  public selectedValue: string = '';
  public theme: string = '';
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogdata: { title: string; message: string },
    private dataservice: DataService,
    private styleservice: StyleService
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.title = this.dialogdata.title;
    this.message = this.dialogdata.message;
    this.NumberOfCards = this.dataservice.NumberOfCards;
    this.theme = this.styleservice.defaultTheme;
  }

  onConfirm(): void {
    this.dataservice.carddata$.next(this.NumberOfCards);
    this.dataservice.NumberOfCards = this.NumberOfCards;
    this.styleservice.styleData$.next(this.theme);
    this.styleservice.defaultTheme = this.theme;
  
  }
}
