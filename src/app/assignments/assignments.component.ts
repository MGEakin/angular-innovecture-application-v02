import { Component, OnInit } from '@angular/core';

import { Assignment } from '../assignment';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments(): void {
    this.assignmentService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }
}
