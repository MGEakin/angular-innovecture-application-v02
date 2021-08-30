import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.css' ]
})
export class ClientDetailComponent implements OnInit {
  client: Client | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private clientService: ClientService,
  ) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.getClient(id)
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }
}
