import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CheckSessionService } from './check-session.service';

@Injectable({
  providedIn: 'root'
})
export class InputNABService {
  httpOptions:any
  constructor(private http:HttpClient,private sessionService:CheckSessionService) {
    this.httpOptions=this.sessionService.getHeader();  
  }
   
   getDailyNab(idJenis:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
     const url=environment.dailyNabUrl+'/'+idJenis;     
     return this.http.get(url,this.httpOptions);
   }
  
   addJenisReksadana(namaJenis:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.jenisReksadanaUrl;
    const body={
      'nama_jenis_reksadana':namaJenis
        }
    return this.http.post(url,body,this.httpOptions);
  }

  updateJenisReksadana(idJenis:string,namaJenis:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.jenisReksadanaUrl+'/'+idJenis;
    const body={
      'nama_jenis_reksadana':namaJenis
        }
    return this.http.put(url,body,this.httpOptions);
  }

  updateDailyNab(idProduk:number,nab:number):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.dailyNabUrl;
    const body={
      'input':[
        {
          'id_produk':Number(idProduk),
          'nab':Number(nab)
        }
      ]
        }
    return this.http.post(url,body,this.httpOptions);
  }
}
