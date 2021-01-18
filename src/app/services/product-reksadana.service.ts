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
export class ProductReksadanaService {

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


  getProdukReksadana():Observable<any>{
    const url=environment.produkReksadanaUrl;
    console.log(url);  
    return this.http.get(url,httpOptions);
  }
  addProdukReksadana(nama_produk:string,id_jenis_reksadana:number,minimum_pembelian:number,expense_ratio:number,total_aum:number,manager_investasi:string,tingkat_resiko:string,level_resiko:number
    ,bank_kustodian:string,bank_penampung:string,url_vendor:string,password_vendor_md5:string,biaya_pembelian:number):Observable<any>{
   const url=environment.produkReksadanaUrl;
   const body={
    "nama_produk": nama_produk,
    "id_jenis_reksadana": Number(id_jenis_reksadana),
    "minimum_pembelian": Number(minimum_pembelian),
    "expense_ratio": Number(expense_ratio),
    "total_aum": Number(total_aum),
    "manager_investasi": manager_investasi,
    "tingkat_resiko": tingkat_resiko,
    "level_resiko": Number(level_resiko),
    "bank_kustodian": bank_kustodian,
    "bank_penampung": bank_penampung,
    "url_vendor": url_vendor,
    "password_vendor_md5": password_vendor_md5,
    "biaya_pembelian": Number(biaya_pembelian)
  }

  console.log(body);
   
   return this.http.post(url,body,httpOptions);
 }

 updateProdukReksadana(id_produk:string,nama_produk:string,id_jenis_reksadana:number,minimum_pembelian:number,expense_ratio:number,total_aum:number,manager_investasi:string,tingkat_resiko:string,level_resiko:number
  ,bank_kustodian:string,bank_penampung:string,url_vendor:string,password_vendor_md5:string,biaya_pembelian:number):Observable<any>{
 const url=environment.produkReksadanaUrl+'/'+id_produk;
 const body={
  "nama_produk": nama_produk,
  "id_jenis_reksadana": Number(id_jenis_reksadana),
  "minimum_pembelian": Number(minimum_pembelian),
  "expense_ratio": Number(expense_ratio),
  "total_aum": Number(total_aum),
  "manager_investasi": manager_investasi,
  "tingkat_resiko": tingkat_resiko,
  "level_resiko": Number(level_resiko),
  "bank_kustodian": bank_kustodian,
  "bank_penampung": bank_penampung,
  "url_vendor": url_vendor,
  "password_vendor_md5": password_vendor_md5,
  "biaya_pembelian": Number(biaya_pembelian)
}

console.log(body);
 
 return this.http.put(url,body,httpOptions);
}

 updatePromoKode(kode_promo:string,title:string,subtitle:string,start_date:string,end_date:string,description:string,cashback:number,minimum_transaksi:number):Observable<any>{
   const url=environment.addKode+'/'+kode_promo;
   var start_date_formatted = new DatePipe('en-US').transform(start_date, 'dd-MM-yyyy');
   var end_date_formatted = new DatePipe('en-US').transform(end_date, 'dd-MM-yyyy');
   const body={
    'kode_promo':kode_promo,
    'title':title,
    'subtitle':subtitle,
    'start_date':start_date_formatted,
    'end_date':end_date_formatted,
    'description':description,
    'cashback':cashback,
    'minimum_transaction':minimum_transaksi
  }
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