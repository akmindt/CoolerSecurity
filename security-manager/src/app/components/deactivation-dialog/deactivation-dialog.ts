import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'deactivation-dialog',
  templateUrl: 'deactivation-dialog.html'
})

export class DeactivationDialog {

  confirm: boolean;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DeactivationDialogText, {
      width: '250px',
      data: { confirm: this.confirm}
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

  constructor(
    public dialogRef: MatDialogRef<DeactivationDialogText>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}