import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

import {UserPractice} from "../user-practice";
import {UserPracticeService} from "../user-practice.service";
import {Practice} from "../practice";
import {PracticeService} from "../practice.service";

@Component({
  selector: 'app-user-practices',
  templateUrl: './user-practices.component.html',
  styleUrls: ['./user-practices.component.css']
})
export class UserPracticesComponent implements OnInit {
  userPractices: UserPractice[] = [];
  practices: Practice[] = [];
  practiceCount = 0;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private userPracticeService: UserPracticeService,
              private messageService: MessageService,
              private practiceService: PracticeService
  ) {}

  ngOnInit() {
    this.getUserPractices();
    // this.getPracticeUsers();
    this.getPractices();
  };

  getUserPractices(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userPracticeService.getUserPractices(userId)
      .subscribe(userPractices => this.userPractices = userPractices);
  }

  // getPracticeUsers(): void {
  //   const practiceId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.userPracticeService.getPracticeUsers(practiceId)
  //     .subscribe(userPractices => this.userPractices = userPractices);
  // }

  getPractices(): void {
    this.log(`into getPractices with userPractices.length=${this.userPractices.length}`)
    this.userPractices.forEach(this.getPractice)};

  getPractice(userPractice: UserPractice): any {
    this.log(`userPractice userId=${userPractice.userId} practiceId=${userPractice.practiceId}`)
    this.practiceService.getPractice(userPractice.practiceId)
      .subscribe(practices => this.practices[this.practiceCount] = practices);
    this.practiceCount += 1
    this.log(`practiceCount=${this.practiceCount}`)
  }

  /** Log a UserPracticesComponent message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserPracticesComponent: ${message}`);
  }
}
