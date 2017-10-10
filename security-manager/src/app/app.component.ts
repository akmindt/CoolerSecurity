import { Component, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Group, GroupService} from './services/group/group-service';
import {Search} from './components/search/search';
import {MatSidenavModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groups: Array<any>;

  constructor(private groupService: GroupService) {
    this.groups = this.groupService.getGroups();
  }
}

@Component({
  selector: 'sidebar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Sidebar {}