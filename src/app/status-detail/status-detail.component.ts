import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Status } from '../status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: [ './status-detail.component.css' ]
})
export class StatusDetailComponent implements OnInit {
  status: Status | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private statusService: StatusService,
  ) {}

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.statusService.getStatus(id)
      .subscribe(status => this.status = status);
  }

  goBack(): void {
    this.location.back();
  }
}
