import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientAddFormComponent } from './client-add-form/client-add-form.component';
import { ClientRegionsComponent } from './client-regions/client-regions.component';

import { PracticesComponent } from './practices/practices.component';
import { PracticeDetailComponent } from './practice-detail/practice-detail.component';
import { PracticeAddFormComponent } from './practice-add-form/practice-add-form.component';
import { PracticeUsersComponent } from './practice-users/practice-users.component';

import { RegionsComponent } from './regions/regions.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionAddFormComponent } from './region-add-form/region-add-form.component';

import { RolesComponent } from './roles/roles.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleAddFormComponent } from './role-add-form/role-add-form.component';

import { StatusesComponent } from './statuses/statuses.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { StatusAddFormComponent } from './status-add-form/status-add-form.component';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';

import { UserPracticesComponent } from './user-practices/user-practices.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

import { OpeningsComponent } from './openings/openings.component';
import { OpeningDetailComponent } from './opening-detail/opening-detail.component';
import { OpeningAddFormComponent } from './opening-add-form/opening-add-form.component';

import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AssignmentAddFormComponent } from './assignment-add-form/assignment-add-form.component';

import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },

  { path: 'clients', component: ClientsComponent },
  { path: 'clients/detail/:id', component: ClientDetailComponent },
  { path: 'client/add', component: ClientAddFormComponent },
  { path: 'clientRegions', component: ClientRegionsComponent },

  { path: 'practices', component: PracticesComponent },
  { path: 'practices/detail/:id', component: PracticeDetailComponent },
  { path: 'practice/add', component: PracticeAddFormComponent },
  { path: 'practiceUsers', component: PracticeUsersComponent },

  { path: 'regions', component: RegionsComponent },
  { path: 'regions/detail/:id', component: RegionDetailComponent },
  { path: 'region/add', component: RegionAddFormComponent },

  { path: 'roles', component: RolesComponent },
  { path: 'roles/detail/:id', component: RoleDetailComponent },
  { path: 'role/add', component: RoleAddFormComponent },

  { path: 'statuses', component: StatusesComponent },
  { path: 'statuses/detail/:id', component: StatusDetailComponent },
  { path: 'status/add', component: StatusAddFormComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'user/add', component: UserAddFormComponent },

  { path: 'userPractices', component: UserPracticesComponent },
  { path: 'userRoles', component: UserRolesComponent },

  { path: 'openings', component: OpeningsComponent },
  { path: 'openings/detail/:id', component: OpeningDetailComponent },
  { path: 'opening/add', component: OpeningAddFormComponent },

  { path: 'assignments', component: AssignmentsComponent },
  { path: 'assignments/detail/:id', component: AssignmentDetailComponent },
  { path: 'assignment/add', component: AssignmentAddFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
