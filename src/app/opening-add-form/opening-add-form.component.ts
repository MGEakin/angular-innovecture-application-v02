import { Component, OnInit } from '@angular/core';
import {Opening} from '../opening';

@Component({
  selector: 'app-opening-add-form',
  templateUrl: './opening-add-form.component.html',
  styleUrls: ['./opening-add-form.component.css']
})
export class OpeningAddFormComponent {
  newStartDate = new Date(2021, 8, 1);
  newCloseDate = new Date(2021, 9, 15);
  // model = new Opening( 1, 'MMC Agile Coach - Mercer', 3, '2021-08-01', '2021-09-15', 55 );
  model = new Opening();

  submitted = false;

  onSubmit() { this.submitted = true; }

  newOpening() {
    this.model = new Opening();
  }
}
