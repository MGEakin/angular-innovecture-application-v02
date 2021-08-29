import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Practice } from '../practice';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice-detail',
  templateUrl: './practice-detail.component.html',
  styleUrls: [ './practice-detail.component.css' ]
})
export class PracticeDetailComponent implements OnInit {
  practice: Practice | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private practiceService: PracticeService,
  ) {}

  ngOnInit(): void {
    this.getPractice();
  }

  getPractice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.practiceService.getPractice(id)
      .subscribe(practice => this.practice = practice);
  }

  goBack(): void {
    this.location.back();
  }
}
