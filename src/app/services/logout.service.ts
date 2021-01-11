import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) {
   
  }
   
   logout(token:string):Observable<any>{
     const url=environment.logoutURL;
     const request={
     }
     var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
        'Access-Control-Allow-Origin': '*',
        'Token':token,
        'Identity':'ERICIMPOSTORNYA'
    
      })
    }
     
     return this.http.get(url,httpOptions);
   }
}
