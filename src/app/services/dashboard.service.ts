import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) {
   
  }
   
   getDashboard(periodic:string,start_date:string,end_date:string):Observable<any>{
     const url=environment.dashboardUrl+'/'+periodic+'/'+start_date+'/'+end_date;
     console.log(url);
     const request={
     }
     var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
        'Access-Control-Allow-Origin': '*',
        'Identity':'ERICIMPOSTORNYA'
    
      })
    }
     
     return this.http.get(url,httpOptions);
   }
}
