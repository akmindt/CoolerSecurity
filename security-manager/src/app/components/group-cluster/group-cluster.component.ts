import {Component} from '@angular/core';
import {Group, GroupService} from '../../services/group/group-service';

@Component({
    selector: 'app-group-cluster',
    templateUrl: './group-cluster.html',
})

export class GroupClusterComponent {
    groups: Array<any>;

    constructor(private groupService: GroupService) {
        this.groups = this.groupService.getGroups();
    }
}
