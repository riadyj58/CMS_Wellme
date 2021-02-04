import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CheckSessionService } from './check-session.service';

@Injectable({
  providedIn: 'root'
})
export class BobotResikoService {
  httpOptions:any;
  constructor(private http:HttpClient,private sessionService:CheckSessionService) {
   this.httpOptions=sessionService.getHeader();
  }
  
  getBobotResiko():Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.bobotResikoUrl;     
    return this.http.get(url,this.httpOptions);
  }
  
  addBobotResiko(namaJenis:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    const url=environment.bobotResikoUrl;
    const body={
      'nama_jenis_reksadana':namaJenis
    }
    return this.http.post(url,body,this.httpOptions);
  }
  
  updateBobotResiko(bobotResiko:string,persentase:any,id_jenis_reksadana:any):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    var temp=[];
    for(var i=0;i<persentase.length;i++)
    {
      temp.push({
        "bobot_resiko":Number(bobotResiko),
        "id_jenis_reksadana":Number(id_jenis_reksadana[i]),
        "persentase":Number(persentase[i])
      });
    }
    
    const url=environment.bobotResikoUrl;
    var body = {
      "input" : temp
    };
    console.log(body);
    return this.http.put(url,body,this.httpOptions);
  }
  
  deactivatePromo(kode_promo:string):Observable<any>{
    this.httpOptions=this.sessionService.getHeader();
    console.log(kode_promo);
    const url=environment.deletePromoUrl+'/'+kode_promo;
    console.log(url);
    return this.http.delete(url,this.httpOptions);
  }

}
