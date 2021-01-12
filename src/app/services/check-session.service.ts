import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __param } from 'tslib';

const httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
    'Access-Control-Allow-Origin': '*'
  },
  ),
  search:new URLSearchParams()
}
@Injectable({
  providedIn: 'root'
})
export class CheckSessionService {
  
  constructor(private http:HttpClient, private session:SessionStorageService,private router:Router) { }
  
  checkSession():Observable<any> {
    const url=environment.checkSessionUrl;
    var params=new URLSearchParams();

      params.append("username",this.session.retrieve("username"));
      params.append("token",this.session.retrieve("token"));
      
      httpOptions.search=params;
    
    
    
    return this.http.get(url+"?"+params.toString(),httpOptions);
    
  }

  async isLogin():Promise<any>{

    return await new Promise((resolve, reject) => {
      this.checkSession().subscribe((response: any) => {
        resolve(response);
      }, reject);
    });
    

  }


  isLoginGeneral():boolean{
    var islogin=this.isLogin().then(response=> {
        
        
      if(response.output_schema.session.message=="SUKSES"){
        console.log("login hit");
        this.session.store("username",response.output_schema.session.username);
        this.session.store("token",response.output_schema.session.new_token);
        
  
      }
      else{
        this.router.navigate(['/login'])
      }
    }, (error) => {
  
      
    }).catch(err=>{
      console.log(err);
    });
    return true;
  }

  isLoginPage():void{
    
    var islogin=this.isLogin().then(response=> {
      console.log(response);
        
      if(response.output_schema.session.message=="SUKSES"){
        console.log("login hit");
        this.session.store("username",response.output_schema.session.username);
        this.session.store("token",response.output_schema.session.new_token);
        this.router.navigate(['/'])
  
      }
      else{
        
      }
    }, (error) => {
  
      
    }).catch(err=>{
      console.log(err);
    });
  }
}
