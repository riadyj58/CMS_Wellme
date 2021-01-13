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
export class JenisReksadanaService {

  constructor(private http:HttpClient) {
   
  }
   
   getJenisReksadana():Observable<any>{
     const url=environment.jenisReksadanaUrl;
     console.log(url); 
     
     return this.http.get(url,httpOptions);
   }
  
   addJenisReksadana(namaJenis:string):Observable<any>{
    const url=environment.jenisReksadanaUrl;
    const body={
      'nama_jenis_reksadana':namaJenis
        }
    return this.http.post(url,body,httpOptions);
  }

  updateJenisReksadana(idJenis:string,namaJenis:string):Observable<any>{
    const url=environment.jenisReksadanaUrl+'/'+idJenis;
    const body={
      'nama_jenis_reksadana':namaJenis
        }
    return this.http.put(url,body,httpOptions);
  }

  deactivatePromo(kode_promo:string):Observable<any>{
    console.log(kode_promo);
    const url=environment.deletePromoUrl+'/'+kode_promo;
    console.log(url);
    return this.http.delete(url,httpOptions);
  }
}
