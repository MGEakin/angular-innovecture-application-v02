import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

import {UserRole} from "../user-role";
import {UserRoleService} from "../user-role.service";
import {Role} from "../role";
import {RoleService} from "../role.service";

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {
  userRoles: UserRole[] = [];
  roles: Role[] = [];
  roleCount = 0;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private userRoleService: UserRoleService,
              private messageService: MessageService,
              private roleService: RoleService
  ) {}

  ngOnInit() {
    this.getUserRoles();
    // this.getRoles();
  };

  getUserRoles(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.log(`getUserRoles userId=${userId}`)
    this.userRoleService.getUserRoles(userId)
      .subscribe(userRoles => this.userRoles = userRoles);
  }
  //
  // getRoles(): void {
  //   this.log(`into getRoles with userRoles.length=${this.userRoles.length}`)
  //   this.userRoles.forEach(this.getRole)};
  //
  // getRole(userRole: UserRole): any {
  //   this.log(`userRole userId=${userRole.userId} roleId=${userRole.roleId}`)
  //   this.roleService.getRole(userRole.roleId)
  //     .subscribe(roles => this.roles[this.roleCount] = roles);
  //   this.roleCount += 1
  //   this.log(`roleCount=${this.roleCount}`)
  // }

  /** Log a UserRolesComponent message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserRolesComponent: ${message}`);
  }}
