import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

import {ClientRegion} from "../client-region";
import {ClientRegionService} from "../client-region.service";
import {Region} from "../region";
import {RegionService} from "../region.service";

@Component({
  selector: 'app-client-regions',
  templateUrl: './client-regions.component.html',
  styleUrls: ['./client-regions.component.css']
})
export class ClientRegionsComponent implements OnInit {
  clientRegions: ClientRegion[] = [];
  regions: Region[] = [];
  regionCount = 0;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private clientRegionService: ClientRegionService,
              private messageService: MessageService,
              private regionService: RegionService
  ) {}

  ngOnInit() {
    this.getClientRegions();
    // this.getRegionClients();
    this.getRegions();
  };

  getClientRegions(): void {
    const clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.clientRegionService.getClientRegions(clientId)
      .subscribe(clientRegions => this.clientRegions = clientRegions);
  }

  // getRegionClients(): void {
  //   const regionId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.clientRegionService.getRegionClients(regionId)
  //     .subscribe(clientRegions => this.clientRegions = clientRegions);
  // }

  getRegions(): void {
    this.log(`into getRegions with clientRegions.length=${this.clientRegions.length}`)
    this.clientRegions.forEach(this.getRegion)};

  getRegion(clientRegion: ClientRegion): any {
    this.log(`clientRegion clientId=${clientRegion.clientId} regionId=${clientRegion.regionId}`)
    this.regionService.getRegion(clientRegion.regionId)
      .subscribe(regions => this.regions[this.regionCount] = regions);
    this.regionCount += 1
    this.log(`regionCount=${this.regionCount}`)
  }

  /** Log a ClientRegionsComponent message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ClientRegionsComponent: ${message}`);
  }
}
