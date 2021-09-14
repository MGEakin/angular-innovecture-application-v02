import { Component } from '@angular/core';
import {Status} from '../status';

@Component({
  selector: 'app-status-add-form',
  templateUrl: './status-add-form.component.html',
  styleUrls: ['./status-add-form.component.css']
})
export class StatusAddFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Status();

  submitted = false;

  onSubmit() { this.submitted = true; }

  newStatus() {
    this.model = new Status();
  }
}
