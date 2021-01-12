import { Component, Input, OnInit } from '@angular/core';
import { LoginServicesService } from 'src/app/services/login-services.service';
import { SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CheckSessionService } from 'src/app/services/check-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username:string;
  @Input() password:string;
  loader:any;
  message:string;
  messageAlert:any;
  isLogin="hidden";
  constructor(private loginservice:LoginServicesService,private session:SessionStorageService,private router:Router, private sessionService:CheckSessionService) { 
    this.username="";
    this.password="";
    this.message="";
    this.loader={
      'display':'none'
    };
    this.messageAlert={
      'display':'block'
    };
  }

  onSubmit(){
    this.loader={
      'display':'block'
    }
    this.loginservice.login(this.username,this.password).subscribe(response=>{

      this.loader={
        'display':'none'
      }
     if (response.output_schema.detail_login.message=="SUKSES")
     {
       this.session.store("username",this.username);
       this.session.store("token",response.output_schema.detail_login.token);
       this.message="";
       this.messageAlert={
         'display':'none'
       }
       this.router.navigate(['/'])
       
       
     }
     else{
      this.message=response.output_schema.detail_login.message;
     }
    })
  }
  ngOnInit(): void {
    this.checkSession();

  }
  checkSession():void{
    this.sessionService.checkSession().subscribe(response=> {
        
        
      if(response.output_schema.session.message=="SUKSES"){
        
        console.log("login hit");
        this.session.store("username",response.output_schema.session.username);
        this.session.store("token",response.output_schema.session.new_token);
        this.router.navigate(['/'])
  
      }
      else{
        this.isLogin="block";
      }
    }, (error) => {
      this.isLogin="block";
      
    });
  }
}
