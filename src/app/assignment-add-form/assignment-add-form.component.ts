import { Component, OnInit } from '@angular/core';
import {Assignment} from "../assignment";

import { Role } from '../role';
import { RoleService } from '../role.service';

import { Client } from '../client';
import { ClientService } from '../client.service';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-assignment-add-form',
  templateUrl: './assignment-add-form.component.html',
  styleUrls: ['./assignment-add-form.component.css']
})
export class AssignmentAddFormComponent {
  newStartDate = new Date(2021, 8, 1);
  newCloseDate = new Date(2021, 9, 15);
  // model = new Assignment( 1, 'MMC Agile Coach - Mercer', 3, '2021-08-01', '2021-09-15', 55 );

  model = new Assignment( 1, '', '', '', 0, 0, 0, 0 );

  roles: Role[] = [];
  clients: Client[] = [];
  users: User[] = [];

  constructor(private roleService: RoleService,
              private clientService: ClientService,
              private userService: UserService) { }

  ngOnInit() {
    this.getRoles();
    this.getClients();
    this.getUsers();
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(roles => this.roles = roles);
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newAssignment() {
    this.model = new Assignment( 1, 'MMC Agile Coach - Mercer', '2021-08-01', '2021-09-15', 55, 3, 1, 3 );
  }
}
