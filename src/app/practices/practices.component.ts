import { Component, OnInit } from '@angular/core';

import { Practice } from '../practice';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {
  practices: Practice[] = [];

  constructor(private practiceService: PracticeService) { }

  ngOnInit() {
    this.getPractices();
  }

  getPractices(): void {
    this.practiceService.getPractices()
      .subscribe(practices => this.practices = practices);
  }
}
