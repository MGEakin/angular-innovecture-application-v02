import { Component, OnInit } from '@angular/core';

import { Status } from '../status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
  statuses: Status[] = [];

  constructor(private statusesService: StatusService) { }

  ngOnInit() {
    this.getStatuses();
  }

  getStatuses(): void {
    this.statusesService.getStatuses()
      .subscribe(statuses => this.statuses = statuses);
  }
}
