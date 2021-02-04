import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckSessionService } from './check-session.service';

@Injectable({
  providedIn: 'root'
})
export class PromoServiceService {
  
  constructor(private http:HttpClient,private sessionService:CheckSessionService) {
    
  }
  
  getPromoAkumulasi():Observable<any>{
    const request={
    }
    var httpOptions=this.sessionService.getHeader();
    const url=environment.promoAkumulasiUrl;
    return this.http.get(url,httpOptions);
  }
}
