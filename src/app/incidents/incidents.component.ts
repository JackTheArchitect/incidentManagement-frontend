import { Component, OnInit } from '@angular/core';
import { IncidentService, INCIDENTS_STATUS } from '../incident.service';
import { IIncident } from '../incident.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incidents: IIncident[] = [];
  displayedColumns: string[] = ['record', 'date', 'description', 'close', 'edit', 'delete'];
  public showClose: boolean;

  Incidents_status = INCIDENTS_STATUS;

  constructor(
    private service: IncidentService
  ) {
    this.showClose = false;
  }

  ngOnInit(): void {
    this.service.getAllIncidents()
      .subscribe(d => this.incidents = d);
  }

}
