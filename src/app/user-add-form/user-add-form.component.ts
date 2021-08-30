import { Component } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new User(10, '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User(42, '');
  }
}
