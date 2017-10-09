import {Injectable} from '@angular/core';

export class Group {
    constructor(
        public id: string,
        public permissions: string[]
    ) {}
}

@Injectable()
export class GroupService {
    getUsers(): Group[] {
        return groups.map(g => new Group(g.id, g.permissions));
      }
    getUserById(groupId: string): Group {
        return groups.find(g => g.id === groupId);
      }
}

const groups = [
    {
        'id': 'tyler',
        'permissions': ['tyler']
    },
    {
        'id': 'web_user',
        'permissions': ['web_stuff', 'web_payments']
    }
];
