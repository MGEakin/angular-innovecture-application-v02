import { Component } from '@angular/core';
import {Role} from '../role';

@Component({
  selector: 'app-role-add-form',
  templateUrl: './role-add-form.component.html',
  styleUrls: ['./role-add-form.component.css']
})
export class RoleAddFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Role(10, '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newRole() {
    this.model = new Role(42, '', '');
  }
}
