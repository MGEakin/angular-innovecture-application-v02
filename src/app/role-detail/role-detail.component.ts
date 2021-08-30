import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Role } from '../role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: [ './role-detail.component.css' ]
})
export class RoleDetailComponent implements OnInit {
  role: Role | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private roleService: RoleService,
  ) {}

  ngOnInit(): void {
    this.getRole();
  }

  getRole(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roleService.getRole(id)
      .subscribe(role => this.role = role);
  }

  goBack(): void {
    this.location.back();
  }
}
