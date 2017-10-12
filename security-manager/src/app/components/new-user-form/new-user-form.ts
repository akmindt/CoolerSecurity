import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';

@Component({
  selector: 'new-user-button',
  templateUrl: 'new-user-button.html'
})

export class NewUser {


  confirm: boolean;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NewUserForm, {
      data: {confirm: this.confirm}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.confirm = result;
    });
  }

}

@Component({
  selector: 'new-user-form',
  templateUrl: 'new-user-form.html'
})
export class NewUserForm {
 
  constructor(
    public dialogRef: MatDialogRef<NewUserForm>,
    
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
  this.dialogRef.close();
  }

}