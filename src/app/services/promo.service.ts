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

export class PromoService {
  
  constructor(private http:HttpClient) {
   
  }
   
   getPromoAkumulasi():Observable<any>{
     const url=environment.promoAkumulasiUrl;
     console.log(url);
     const request={
     }

    
     
     return this.http.get(url,httpOptions);
   }
   addPromoAkumulasi(title:string,subtitle:string,start_date:string,end_date:string,description:string,cashback:number,target_akumulasi:number):Observable<any>{
    const url=environment.addAkumulasi;
    var start_date_formatted = new DatePipe('en-US').transform(start_date, 'dd-MM-yyyy');
    var end_date_formatted = new DatePipe('en-US').transform(end_date, 'dd-MM-yyyy');
    
    const body={
      'title':title,
      'subtitle':subtitle,
      'start_date':start_date_formatted,
      'end_date':end_date_formatted,
      'description':description,
      'cashback':cashback,
      'target_akumulasi':target_akumulasi
    }
   console.log(body);
    
    return this.http.post(url,body,httpOptions);
  }

  updatePromoAkumulasi(kode_promo:string,title:string,subtitle:string,start_date:string,end_date:string,description:string,cashback:number,target_akumulasi:number):Observable<any>{
    const url=environment.addAkumulasi+'/'+kode_promo;
    var start_date_formatted = new DatePipe('en-US').transform(start_date, 'dd-MM-yyyy');
    var end_date_formatted = new DatePipe('en-US').transform(end_date, 'dd-MM-yyyy');
    console.log(cashback,target_akumulasi);
    const body={
      'title':title,
      'subtitle':subtitle,
      'start_date':start_date_formatted,
      'end_date':end_date_formatted,
      'description':description,
      'cashback': cashback,
      'target_akumulasi':target_akumulasi
    }
   console.log(body);
    
    return this.http.put(url,body,httpOptions);
  }
}
