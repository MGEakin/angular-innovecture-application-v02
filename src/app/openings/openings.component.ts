import { Component, OnInit } from '@angular/core';

import { Opening } from '../opening';
import { OpeningService } from '../opening.service';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.css']
})
export class OpeningsComponent implements OnInit {
  openings: Opening[] = [];

  constructor(private openingService: OpeningService) { }

  ngOnInit() {
    this.getOpenings();
  }

  getOpenings(): void {
    this.openingService.getOpenings()
      .subscribe(openings => this.openings = openings);
  }
}
