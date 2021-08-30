import { Component } from '@angular/core';
import {Client} from '../client';

@Component({
  selector: 'app-client-add-form',
  templateUrl: './client-add-form.component.html',
  styleUrls: ['./client-add-form.component.css']
})
export class ClientAddFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Client(10, '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newClient() {
    this.model = new Client(42, '');
  }
}
