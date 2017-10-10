import { Component, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {User, UserService} from './services/user/user-service';
import {Group, GroupService} from './services/group/group-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<any>;
  groups: Array<any>;

  constructor(private userService: UserService, private groupService: GroupService) {
    this.users = this.userService.getUsers();
    this.groups = this.groupService.getGroups();
  }
}
