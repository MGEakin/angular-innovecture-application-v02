import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Region } from '../region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: [ './region-detail.component.css' ]
})
export class RegionDetailComponent implements OnInit {
  region: Region | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private regionService: RegionService,
  ) {}

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.regionService.getRegion(id)
      .subscribe(region => this.region = region);
  }

  goBack(): void {
    this.location.back();
  }
}
