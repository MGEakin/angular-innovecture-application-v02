import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ClientsComponent } from './clients/clients.component';
import { MessagesComponent } from './messages/messages.component';
import { PracticesComponent } from './practices/practices.component';
import { RegionsComponent } from './regions/regions.component';
import { RolesComponent } from './roles/roles.component';
import { StatusesComponent } from './statuses/statuses.component';
import { UsersComponent } from './users/users.component';
import { OpeningsComponent } from './openings/openings.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { PracticeDetailComponent } from './practice-detail/practice-detail.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OpeningDetailComponent } from './opening-detail/opening-detail.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UserPracticesComponent } from './user-practices/user-practices.component';
import { ClientAddFormComponent } from './client-add-form/client-add-form.component';
import { PracticeAddFormComponent } from './practice-add-form/practice-add-form.component';
import { RegionAddFormComponent } from './region-add-form/region-add-form.component';
import { RoleAddFormComponent } from './role-add-form/role-add-form.component';
import { StatusAddFormComponent } from './status-add-form/status-add-form.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { OpeningAddFormComponent } from './opening-add-form/opening-add-form.component';
import { AssignmentAddFormComponent } from './assignment-add-form/assignment-add-form.component';
import { PracticeUsersComponent } from './practice-users/practice-users.component';
import { RolePracticesComponent } from './role-practices/role-practices.component';
import { ClientRegionComponent } from './client-region/client-region.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    MessagesComponent,
    PracticesComponent,
    RegionsComponent,
    RolesComponent,
    StatusesComponent,
    UsersComponent,
    OpeningsComponent,
    AssignmentsComponent,
    ClientDetailComponent,
    PracticeDetailComponent,
    RegionDetailComponent,
    RoleDetailComponent,
    StatusDetailComponent,
    UserDetailComponent,
    OpeningDetailComponent,
    AssignmentDetailComponent,
    UserRolesComponent,
    UserPracticesComponent,
    ClientAddFormComponent,
    PracticeAddFormComponent,
    RegionAddFormComponent,
    RoleAddFormComponent,
    StatusAddFormComponent,
    UserAddFormComponent,
    OpeningAddFormComponent,
    AssignmentAddFormComponent,
    PracticeUsersComponent,
    RolePracticesComponent,
    ClientRegionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
