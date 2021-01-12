import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { SessionStorageService } from 'ngx-webstorage';

import { Subject } from 'rxjs';
import { CheckSessionService } from 'src/app/services/check-session.service';
import { LogoutService } from 'src/app/services/logout.service';
import { PromoService } from 'src/app/services/promo.service';

@Component({
  selector: 'app-promoakumulasi',
  templateUrl: './promoakumulasi.component.html',
  styleUrls: ['./promoakumulasi.component.css']
})
export class PromoakumulasiComponent implements OnInit {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() start_date:string;
  @Input() end_date:string;
  @Input() description:string;
  @Input() cashback:number;
  @Input() target_akumulasi:number;
  isLogin="hidden";
  table:string='';
  addPromoMessage:string="";
  display:string='hidden';
  loader:string="flex";
  kodePromo:string="";
  promo:any=[];
  tab:string=``;
  formClass:string='hidden';
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  alert:string="hidden";
  alertMessage:string="";
  alertClass:string="";
  constructor(private fb: FormBuilder, private promoService:PromoService,private router:Router, private session:SessionStorageService, private sessionService:CheckSessionService) {
    this.title="";
    this.subtitle="";
    this.start_date="";
    this.end_date="";
    this.description="";
    this.cashback=0;
    this.target_akumulasi=0;
  
   }

  ngOnInit(): void {
    this.checkSession();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,

    };
    this.getPromoAkumulasi();

}

getPromoAkumulasi():void{

  this.promoService.getPromoAkumulasi().subscribe(response=>{
    this.promo=response.output_schema;
    console.log(this.promo);
   
    if (this.isDtInitialized) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.isDtInitialized = true
      this.dtTrigger.next();
    }

    this.display="block";
    this.loader="hidden";
    
  }, (err) => {
    console.log('-----> err', err);
  });
}

checkSession():void{
  this.sessionService.checkSession().subscribe(response=> {
      
    if(response.output_schema.session.message=="SUKSES"){
      this.isLogin="block";
      console.log("login hit");
      this.session.store("username",response.output_schema.session.username);
      this.session.store("token",response.output_schema.session.new_token);
      

    }
    else{
      this.router.navigate(['/login'])
    }
  }, (error) => {

    
  });
}

toggleAdd():void{
this.formClass='block';
window.scroll(0,0);
}

addPromoAkumulasi(ngform:NgForm):void{
 if (ngform.valid){
  this.display="hidden";
  this.loader="flex";
  this.formClass='hidden';
   this.promoService.addPromoAkumulasi(this.title,this.subtitle,this.start_date,this.end_date,this.description,this.cashback,this.target_akumulasi).subscribe(response=>{
  console.log(response);
  if(response.error_schema.error_code=="BIT-00-000")
  {
    this.alertMessage="Berhasil Menambahkan ";
    this.alert="block alert-success";
    
    
    this.getPromoAkumulasi();
  }
  else{
    this.alertMessage="Gagal Mendambahkan";
    this.alert="block alert-danger";
    this.getPromoAkumulasi();
  }
  this.title="";
  this.subtitle="";
  this.start_date="";
  this.end_date="";
  this.description="";
  this.cashback=0;
  this.target_akumulasi=0;

 },(err) => {
  this.title="";
  this.subtitle="";
  this.start_date="";
  this.end_date="";
  this.description="";
  this.cashback=0;
  this.target_akumulasi=0;
  console.log('-----> err', err);
});

 }
 else{
this.addPromoMessage=this.validationMessage();
 }


}
validationMessage():string
{
  var temp="";
  if (this.title=="")
  {
    temp+="Judul - ";
  }
  if (this.subtitle=="")
  {
    temp+="Subtitle - ";
  }
  if (this.start_date=="")
  {
    temp+="Tanggal Mulai Promo - ";
  }
  if (this.end_date=="")
  {
    temp+="Tanggal Akhir Promo - ";
  }
  if (this.cashback==0)
  {
    temp+="Cashback - ";
  }
  
  if (this.target_akumulasi==0)
  {
    temp+="Target Akumulasi - ";
  }
  temp+="Tidak Boleh Kosong"
  return temp
}
}
