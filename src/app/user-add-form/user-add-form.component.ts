import { Component } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent {

  roles = ['SDET Engineer', 'Sr SDET Engineer', 'Agile Coach',
    'ScrumMaster', 'Practice Lead', 'Account Manager'];

  practices = ['SDET', 'Agile', 'Development', 'DevOps' ];

  model = new User(42, '', '', '');
  // model = new User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User(42, '', '');
  }
}
