import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __param } from 'tslib';
const httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
    'Access-Control-Allow-Origin': '*'
  },
  ),
  search:new URLSearchParams()
}
@Injectable({
  providedIn: 'root'
})
export class CheckSessionService {
  
  constructor(private http:HttpClient, private session:SessionStorageService) { }
  
  checkSession():Observable<any> {
    const url=environment.checkSessionUrl;
    var params=new URLSearchParams();

      params.append("username",this.session.retrieve("username"));
      params.append("token",this.session.retrieve("token"));
      
      httpOptions.search=params;
    
    
    
    return this.http.get(url+"?"+params.toString(),httpOptions);
    
  }

}
