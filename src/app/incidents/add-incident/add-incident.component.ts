import { Component, OnInit } from '@angular/core';
import { IIncident} from '../../incident.service';
import { IncidentService } from '../../incident.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {

  // We create incident and used for when is changed from the input, this update
  incident: IIncident = {
    _id: "",
    name: "",
    date: "",
    address: "",
    description: "",
    priority: "",
    // narrative: "",
    narrative:[{timestamp: "", comment: ""}],
    recordNumber: "",
    status: 1 ,
    email:  "",
    phoneNumber:  "",
    // customerInformation: "",
    incidentResolution: "",
    incidentDuration: "",
  }

  narrativeInit: string;

  constructor(
    private service: IncidentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let date= new Date();
    let postRecord = '' + (Math.floor(Math.random() * 10000000) + 1);
    this.incident.recordNumber = date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate() + '-' + postRecord.padStart(8, '0');
    this.narrativeInit ="";
  }


  createIncident(): void {
    let date= new Date();
    // this.incident.narrative = [{date:date.toLocaleDateString("en-CA"), comment:this.narrativeInit}];
    this.service.addIncident(
      this.incident.name,
      this.incident.address,
      this.incident.description,
      this.incident.priority,
      this.narrativeInit,
      this.incident.recordNumber,
      this.incident.status,
      this.incident.email,
      this.incident.phoneNumber,

    ).subscribe(() => this.router.navigateByUrl("incidents"))
  }

}
