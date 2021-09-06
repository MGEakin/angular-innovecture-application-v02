import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Opening } from '../opening';
import { OpeningService } from '../opening.service';

@Component({
  selector: 'app-opening-detail',
  templateUrl: './opening-detail.component.html',
  styleUrls: ['./opening-detail.component.css']
})
export class OpeningDetailComponent implements OnInit {
  opening: Opening | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private openingService: OpeningService,
  ) {}

  ngOnInit(): void {
    this.getOpening();
  }

  getOpening(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.openingService.getOpening(id)
      .subscribe(opening => this.opening = opening);
  }

  goBack(): void {
    this.location.back();
  }
}
