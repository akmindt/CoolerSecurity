import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'deactivation-dialog',
  templateUrl: 'deactivation-dialog.html'
})

export class DeactivationDialog {

  @Input() user:string;

  confirm: boolean;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DeactivationDialogText, {
      data: {confirm: this.confirm, user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.confirm = result;
    });
  }

}

@Component({
  selector: 'deactivation-dialog-text',
  templateUrl: 'deactivation-dialog-text.html'
})
export class DeactivationDialogText {
  
  @Input() user:string;
 
  constructor(
    public dialogRef: MatDialogRef<DeactivationDialogText>,
    
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
  this.dialogRef.close();
  }

}