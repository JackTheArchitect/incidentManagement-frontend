import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentService } from '../../incident.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-incident',
  templateUrl: './delete-incident.component.html',
  styleUrls: ['./delete-incident.component.css']
})
export class DeleteIncidentComponent implements OnInit {

  id: string = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: IncidentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || ""
  }

  delete(): void {
    this.service.deleteIncidentById(this.id)
      .subscribe(() => this.router.navigateByUrl("/incidents"))
  }

}
