import {Component} from '@angular/core';
import {Search} from './search/search';
import {AddButton} from './new-item/new-item';
import {EditButton} from './edit/edit-item';

/**
 * @title Basic sidenav
 */
@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.html',
  styleUrls: ['sidebar.css'],
})
export class Sidebar {}