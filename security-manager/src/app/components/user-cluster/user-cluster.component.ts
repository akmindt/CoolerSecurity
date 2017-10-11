import {Component} from '@angular/core';
import {User, UserService} from '../../services/user/user-service';
import {DeactivationDialog, DeactivationDialogText} from '../deactivation-dialog/deactivation-dialog';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-user-cluster',
    templateUrl: './user-cluster.html',
})

export class UserClusterComponent {
    users: Array<any>;

    constructor(private userService: UserService) {
        this.users = this.userService.getUsers();
    }
}
