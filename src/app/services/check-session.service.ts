import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Output, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __param } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class CheckSessionService {
  @Output() login:string="";
  constructor(private http:HttpClient, private session:SessionStorageService,private router:Router) { }
  
  checkSession():Observable<any> {
    const url=environment.checkSessionUrl;
      var username=this.session.retrieve("username")==undefined||this.session.retrieve("username")==null?"":this.session.retrieve("username")
      var token=this.session.retrieve("token")==undefined||this.session.retrieve("token")==null?"":this.session.retrieve("token")
      var httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS, GET, PUT',
          'Access-Control-Allow-Origin': '*',
          'Identity':'ERICIMPOSTORNYA',
          'Username':username,
          'Token':token,

      
        })
      };
    console.log(httpOptions);    
    
    return this.http.get(url,httpOptions);
    
  }

  async isLogin():Promise<any>{

    return await new Promise((resolve, reject) => {
      this.checkSession().subscribe((response: any) => {
        resolve(response);
      }, reject);
    });
    

  }



  

  isLoginGeneral():void{

    this.checkSession().subscribe(response=> {
      if(response.output_schema.session.message=="SUKSES"){
        this.login="block";
        this.session.store("username",response.output_schema.session.username);
        this.session.store("token",response.output_schema.session.new_token);
      }
      else{
        this.router.navigate(['/login'])
      }
    }, (error) => {
  
      this.router.navigate(['/login'])
    });
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
