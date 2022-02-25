import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  public title: string = '';
  public message: string = '';
  public NumberOfCards: any;
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogdata: { title: string; message: string },
    private dataservice:DataService
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.title = this.dialogdata.title;
    this.message = this.dialogdata.message;
    
  }

 
  onConfirm(): void {
    this.dataservice.carddata$.next(this.NumberOfCards);
  }
}
