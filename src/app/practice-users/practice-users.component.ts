import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

import {UserPractice} from "../user-practice";
import {UserPracticeService} from "../user-practice.service";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-practice-users',
  templateUrl: './practice-users.component.html',
  styleUrls: ['./practice-users.component.css']
})

export class PracticeUsersComponent implements OnInit {
  userPractices: UserPractice[] = [];
  users: User[] = [];
  userCount = 0;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private userPracticeService: UserPracticeService,
              private messageService: MessageService,
              private userService: UserService
  ) {}

  ngOnInit() {
    this.getPracticeUsers();
    this.getUsers();
  };

  // getPracticeUsers(): void {
  //   const userId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.practiceUsersService.getPracticeUsers(userId)
  //     .subscribe(practiceUsers => this.practiceUsers = practiceUsers);
  // }

  getPracticeUsers(): void {
    const practiceId = Number(this.route.snapshot.paramMap.get('id'));
    this.userPracticeService.getPracticeUsers(practiceId)
      .subscribe(userPractices => this.userPractices = userPractices);
  }

  getUsers(): void {
    this.log(`into getUsers with practiceUsers.length=${this.userPractices.length}`)
    this.userPractices.forEach(this.getUser)};

  getUser(userPractices: UserPractice): any {
    this.log(`practiceUsers userId=${userPractices.userId} practiceId=${userPractices.practiceId}`)
    this.userService.getUser(userPractices.userId)
      .subscribe(users => this.users[this.userCount] = users);
    this.userCount += 1
    this.log(`userCount=${this.userCount}`)
  }

  /** Log a PracticeUsersComponent message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PracticeUsersComponent: ${message}`);
  }
}
