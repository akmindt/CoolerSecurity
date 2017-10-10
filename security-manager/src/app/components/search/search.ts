import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material';

const SEARCH_REGEX = /^[a-zA-Z0-9*]*$/;

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
