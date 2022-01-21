import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentsComponent } from './incidents/incidents.component';
import { AddIncidentComponent } from './incidents/add-incident/add-incident.component';
import { EditIncidentComponent } from './incidents/edit-incident/edit-incident.component';
import { DeleteIncidentComponent } from './incidents/delete-incident/delete-incident.component';

import {RegisterComponent} from './auth/register/register.component';
import {SigninComponent} from './auth/signin/signin.component';
import { EditComponent } from './auth/edit-user/edit-user.component';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { CloseIncidentComponent } from './incidents/close-incident/close-incident.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'incidents', component: IncidentsComponent,canActivate: [AuthGuard]},
  {path: 'incidents/create', component: AddIncidentComponent,canActivate: [AuthGuard]},
  {path: 'incidents/:id/edit', component: EditIncidentComponent,canActivate: [AuthGuard]},
  {path: 'incidents/:id/delete', component: DeleteIncidentComponent,canActivate: [AuthGuard]},
  {path: 'incidents/:id/close', component: CloseIncidentComponent,canActivate: [AuthGuard]},
  {path: 'user/signin', component: SigninComponent},
  {path: 'user/signup', component: RegisterComponent},
  {path: 'user/edit', component: EditComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
