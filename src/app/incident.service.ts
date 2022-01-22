import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum INCIDENTS_STATUS { CLOSED, NEW, INPROGRESS, ONHOLD, DISPATCHED }

export interface IIncident {
  _id: string;
  name: string;
  date: string;
  address: string;
  description: string;
  priority: string;
  // narrative: string;
  narrative:[{
    timestamp: string;
    comment: string;
  }];
  recordNumber: string;
  status: number;
  email: string;
  phoneNumber: string;
  // customerInformation: string;
  incidentResolution: string;
  incidentDuration: string;
}


@Injectable({
  providedIn: 'root'
})

export class IncidentService {

  private urlServer = 'https://incident-management-backend.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getAllIncidents(): Observable<any> {
    return this.http.get<any>(this.urlServer + '/incidents')
  }

  addIncident(name: string, address: string, description: string, priority: string, narrative:string, record: string,
  status:number, email: string, phonenumber: string): Observable<any> {
    let date= new Date();
    return this.http.post(this.urlServer + '/incidents',{
      name: name,
      date: date.toLocaleDateString("en-CA"),
      address: address,
      description: description,
      priority: priority,
      newComment: narrative,
      // narrative: narrative,
      // record: record,
      status: true,
      email:  email,
      phoneNumber: phonenumber


    })
  }

  getIncidentById(id: string): Observable<any> {
    return this.http.get<any>(this.urlServer + '/incidents/'+id)
  }

  updateIncident(id: string, newComment: string, newIncident: IIncident): Observable<any> {
    let data = {...newIncident, newComment};
    return this.http.put(
      this.urlServer + '/incidents/'+id,
      data
    )
  }

  deleteIncidentById(id: string): Observable<any> {
    return this.http.delete(
      this.urlServer + '/incidents/'+id,
    )
  }

  closeIncidentById(id: string, incidentResolution: string): Observable<any> {
    return this.http.post<any>(
      this.urlServer +'/incidents/'+id+'/close',{incidentResolution:incidentResolution }
    )
  }

}
