import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PracticesComponent } from './practices/practices.component';
import { PracticeDetailComponent } from './practice-detail/practice-detail.component';

import { RolesComponent } from './roles/roles.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

import { RegionsComponent } from './regions/regions.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';

import { StatusesComponent } from './statuses/statuses.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';

import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'roles/detail/:id', component: RoleDetailComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'regions/detail/:id', component: RegionDetailComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'statuses/detail/:id', component: StatusDetailComponent },
  { path: 'statuses', component: StatusesComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'practices/detail/:id', component: PracticeDetailComponent },
  { path: 'practices', component: PracticesComponent },
  { path: 'clients/detail/:id', component: ClientDetailComponent },
  { path: 'clients', component: ClientsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
