import { Component, OnInit } from '@angular/core';

import { Region } from '../region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionService: RegionService) { }

  ngOnInit() {
    this.getRegions();
  }

  getRegions(): void {
    this.regionService.getRegions()
      .subscribe(regions => this.regions = regions);
  }
}
