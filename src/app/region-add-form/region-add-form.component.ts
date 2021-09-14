import { Component } from '@angular/core';
import {Region} from '../region';

@Component({
  selector: 'app-region-add-form',
  templateUrl: './region-add-form.component.html',
  styleUrls: ['./region-add-form.component.css']
})
export class RegionAddFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Region();

  submitted = false;

  onSubmit() { this.submitted = true; }

  newRegion() {
    this.model = new Region();
  }
}
