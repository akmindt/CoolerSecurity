import {Injectable} from '@angular/core';

export class User {
    constructor(
        public id: string,
        public name: string,
        public imgUrl: string,
        public groups: string[]
    ) {}
}

@Injectable()
export class UserService {
    getUsers(): User[] {
        return users.map(u => new User(u.id, u.name, u.imgUrl, u.groups));
      }
    getUserById(userId: string): User {
        return users.find(u => u.id === userId);
      }
}

const users = [
    {
        'id': 'tyler_aaron.mindt',
        'name': 'Aaron Mindt',
        'imgUrl': 'http://placehold.it/150',
        'groups': ['tyler']
    },
    {
        'id': 'tyler_thomas.lees',
        'name': 'Thomas Lees',
        'imgUrl': 'http://placehold.it/150',
        'groups': ['tyler']
    },
    {
        'id': 'rross',
        'name': 'Rick Ross',
        'imgUrl': 'http://placehold.it/150',
        'groups': ['web_users', 'admin']
    },
    {
        'id': 'bdraper',
        'name': 'Bruce Draper',
        'imgUrl': 'http://placehold.it/150',
        'groups': ['public-users', 'public_web_users']
    },
    {
        'id': 'jjimson',
        'name': 'Jim Jimson',
        'imgUrl': 'http://placehold.it/150',
        'groups': ['hype_users', 'web_beast_users']
    }

];

