import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const SEARCH_REGEX = /^[a-zA-Z0-9*]+)*$/;

/**
 * @title Input Errors
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html',
  styleUrls: ['search.css'],
})
export class Search {

 searchFormControl  = new FormControl('', [
    Validators.required,
    Validators.pattern(SEARCH_REGEX)]);

}
