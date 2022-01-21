import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentService } from 'src/app/incident.service';

@Component({
  selector: 'app-close-incident',
  templateUrl: './close-incident.component.html',
  styleUrls: ['./close-incident.component.css']
})
export class CloseIncidentComponent implements OnInit {
  id: string = ""
  incidentResolution: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: IncidentService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "";
  }


  close(): void {
    this.service.closeIncidentById(this.id, this.incidentResolution)
      .subscribe(() => this.router.navigateByUrl("/incidents"))
  }


}
