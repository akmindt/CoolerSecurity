import {Component} from '@angular/core';
import {User, UserService} from '../../services/user/user-service';

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
