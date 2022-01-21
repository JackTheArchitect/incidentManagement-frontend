import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IIncident, INCIDENTS_STATUS} from '../../incident.service';
import { IncidentService } from '../../incident.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.css']
})
export class EditIncidentComponent implements OnInit {

  id: string = ""
  incident: IIncident = {
    _id: "",
    name: "",
    date: "",
    address: "",
    description: "",
    priority: "",
    narrative:[{timestamp: "", comment: ""}],
    recordNumber: "",
    status: 1,
    email:  "",
    phoneNumber:  "",
    incidentResolution: "",
    incidentDuration: "",

  }

  Incidents_status = INCIDENTS_STATUS;

  inputComment: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: IncidentService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.inputComment = "";
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || ""
    this.service.getIncidentById(this.id)
      .subscribe(data => {
        this.incident = data;
    })
  }


  editIncident(): void {
    this.service.updateIncident(this.id, this.inputComment,this.incident,)
      .subscribe(() => this.route.navigateByUrl("/incidents"))
  }

  formControlName="email"



}
