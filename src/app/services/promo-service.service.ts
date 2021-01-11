import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class PromoServiceService {

  constructor(private http:HttpClient) {
   
  }

  getPromoAkumulasi():Observable<any>{
    const request={
    }
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
        'Access-Control-Allow-Origin': '*',
        'Token':'aaa',
        'Identity':'eric'
    
      })
    }
    const url=environment.promoAkumulasiUrl;
     return this.http.get(url,httpOptions);
   }
}
