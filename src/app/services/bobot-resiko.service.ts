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
export class BobotResikoService {
  
  constructor(private http:HttpClient) {
    
  }
  
  getBobotResiko():Observable<any>{
    const url=environment.bobotResikoUrl;     
    return this.http.get(url,httpOptions);
  }
  
  addBobotResiko(namaJenis:string):Observable<any>{
    const url=environment.bobotResikoUrl;
    const body={
      'nama_jenis_reksadana':namaJenis
    }
    return this.http.post(url,body,httpOptions);
  }
  
  updateBobotResiko(bobotResiko:string,persentase:any,id_jenis_reksadana:any):Observable<any>{
    
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
    return this.http.put(url,body,httpOptions);
  }
  
  deactivatePromo(kode_promo:string):Observable<any>{
    console.log(kode_promo);
    const url=environment.deletePromoUrl+'/'+kode_promo;
    console.log(url);
    return this.http.delete(url,httpOptions);
  }
}
