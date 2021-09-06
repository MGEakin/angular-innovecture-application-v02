import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Assignment } from '../assignment';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignment: Assignment | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private assignmentService: AssignmentService,
  ) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.assignmentService.getAssignment(id)
      .subscribe(assignment => this.assignment = assignment);
  }

  goBack(): void {
    this.location.back();
  }
}
