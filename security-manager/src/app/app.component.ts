import { Component } from '@angular/core';
import {User, UserService} from './services/user/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Array<any>;

  constructor(private userService: UserService) {
    this.myData = this.userService.getUsers();
  }
}
