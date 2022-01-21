import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { AddIncidentComponent } from './incidents/add-incident/add-incident.component';
import { EditIncidentComponent } from './incidents/edit-incident/edit-incident.component';
import { DeleteIncidentComponent } from './incidents/delete-incident/delete-incident.component';
import { HeaderComponent } from './partials/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import {EditComponent} from './auth/edit-user/edit-user.component';
import { FooterComponent } from './partials/footer/footer.component';
import { TokenInterceptor } from './token.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { CloseIncidentComponent } from './incidents/close-incident/close-incident.component';



@NgModule({
  declarations: [
    AppComponent,
    IncidentsComponent,
    AddIncidentComponent,
    EditIncidentComponent,
    DeleteIncidentComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    EditComponent,
    FooterComponent,
    CloseIncidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,

  ],
  providers: [AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
