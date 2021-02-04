import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CheckSessionService } from './check-session.service';



@Injectable({
  providedIn: 'root'
})
export class HistoriTransaksiService {
  httpOptions:any;
  constructor(private http:HttpClient,private sessionService:CheckSessionService) {
    this.httpOptions=this.sessionService.getHeader();
  }
   
  getHistoriPembelian():Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.historiPembelianUrl;   
    return this.http.get(url,this.httpOptions);
  }
  getHistoriPenjualan():Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.historiPenjualanUrl;   
    return this.http.get(url,this.httpOptions);
  }
  getHistoriPembelianNasabah(bcaId:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.historiPembelianUrl+'/'+bcaId;   
    return this.http.get(url,this.httpOptions);
  }
  getHistoriPenjualanNasabah(bcaId:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.historiPenjualanUrl+'/'+bcaId;   
    return this.http.get(url,this.httpOptions);
  }

}
