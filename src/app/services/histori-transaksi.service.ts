import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
    'Access-Control-Allow-Origin': '*',
    'Identity':'ERICIMPOSTORNYA'

  })
}

@Injectable({
  providedIn: 'root'
})
export class HistoriTransaksiService {
  constructor(private http:HttpClient) {
   
  }
   
  getHistoriPembelian():Observable<any>{
    const url=environment.historiPembelianUrl;   
    return this.http.get(url,httpOptions);
  }
  getHistoriPenjualan():Observable<any>{
    const url=environment.historiPenjualanUrl;   
    return this.http.get(url,httpOptions);
  }
  getHistoriPembelianNasabah(bcaId:string):Observable<any>{
    const url=environment.historiPembelianUrl+'/'+bcaId;   
    return this.http.get(url,httpOptions);
  }
  getHistoriPenjualanNasabah(bcaId:string):Observable<any>{
    const url=environment.historiPenjualanUrl+'/'+bcaId;   
    return this.http.get(url,httpOptions);
  }

}
