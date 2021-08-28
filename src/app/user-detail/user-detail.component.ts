import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { Role } from '../role';
// import { RoleService } from '../role.service';

import { User } from '../user';
import { UserService } from '../user.service';

// import { UserRole } from '../user-role';
// import { UserRoleService } from '../user-role.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  // role: Role | undefined;
  // userRole: UserRole[] = [];
  // roles: Role[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    // private roleService: RoleService,
    // private userRoleService: UserRoleService
  ) {}

  ngOnInit(): void {
    this.getUser();
    // this.getUserRole();
    // this.getRole();
    // this.getRoles();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  // getUserRole(): void {
  //   const userId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.userRoleService.getUserRoles(userId)
  //     .subscribe(userRole => this.userRole = userRole);
  // }
  //
  // getRole(): void {
  //   const id = Number(this.userRole.roleId);
  //   // const id = Number(5);
  //   this.roleService.getRole(id)
  //     .subscribe(role => this.role = role);
  // }
  //
  // getRoles(): void {
  //   this.roleService.getRoles()
  //     .subscribe(roles => this.roles = roles);
  // }

  goBack(): void {
    this.location.back();
  }
}
