import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from './client';
import { Practice } from './practice';
import { Region } from './region';
import { Role } from './role';
import { Status } from './status';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 1, name: 'MMC' },
      { id: 2, name: 'Amex' },
      { id: 3, name: 'Honda' }
    ];
    const practices = [
      { id: 1, name: 'SDET' },
      { id: 2, name: 'Agile' },
      { id: 3, name: 'Development' },
      { id: 4, name: 'DevOps' }
    ];
    const regions = [
      { id: 1, name: 'Americas' },
      { id: 2, name: 'APAC' },
      { id: 3, name: 'Europe' }
    ];
    const roles = [
      { id: 1, name: 'SDET Engineer', jd: 'SDET Engineer JD here' },
      { id: 2, name: 'Sr SDET Engineer', jd: 'Sr SDET Engineer JD here' },
      { id: 3, name: 'Agile Coach', jd: 'Agile Coach' },
      { id: 4, name: 'ScrumMaster', jd: 'ScrumMaster' },
      { id: 5, name: 'Practice Lead', jd: '' },
      { id: 6, name: 'Account Manager', jd: '' }
    ];
    const statuses = [
      { id: 1, name: 'candidate' },
      { id: 2, name: 'assigned' },
      { id: 3, name: 'unAssigned' },
      { id: 4, name: 'active' }
    ];
    const users = [
      { id: 1, name: 'Matthew Eakin' },
      { id: 2, name: 'Jack Warner' },
      { id: 3, name: 'Tim Loree' },
      { id: 4, name: 'Mark Cruz' }
    ];
    const userRoles = [
      { userId: 1, roleId: 5 },
      { userId: 1, roleId: 6 },
      { userId: 2, roleId: 5 },
      { userId: 3, roleId: 6 }
    ];
    const userPractices = [
      { userId: 1, practiceId: 1 },
      { userId: 2, practiceId: 2 },
      { userId: 4, practiceId: 2 }
    ];
    return {clients, practices, regions, roles, statuses, users, userRoles, userPractices};
  }

  // Overrides the genId method to ensure that a role always has an id.
  // If the roles array is empty,
  // the method below returns the initial number (11).
  // if the roles array is not empty, the method below returns the highest
  // role id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
  genClientId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 11;
  }
  genPracticeId(practices: Practice[]): number {
    return practices.length > 0 ? Math.max(...practices.map(practice => practice.id)) + 1 : 11;
  }
  genRegionId(regions: Region[]): number {
    return regions.length > 0 ? Math.max(...regions.map(region => region.id)) + 1 : 11;
  }
  genRoleId(roles: Role[]): number {
    return roles.length > 0 ? Math.max(...roles.map(role => role.id)) + 1 : 11;
  }
  genStatusId(statuses: Status[]): number {
    return statuses.length > 0 ? Math.max(...statuses.map(status => status.id)) + 1 : 11;
  }
  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
