import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incident.service'

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  name: string = ''
  date: string = ''
  address: string = ''
  description: string = ''

  constructor(
    private info: IncidentService
  ) { }

  ngOnInit(): void {
    
  }

  print(): void {
    this.info.addIncident(this.name, this.date, this.address, this.description)
  }

}
