import { Component } from '@angular/core';
import {Practice} from '../practice';
// import { Practice } from '../practice';

@Component({
  selector: 'app-practice-add-form',
  templateUrl: './practice-add-form.component.html',
  styleUrls: ['./practice-add-form.component.css']
})
export class PracticeAddFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Practice(10, '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newPractice() {
    this.model = new Practice(42, '');
  }
}
