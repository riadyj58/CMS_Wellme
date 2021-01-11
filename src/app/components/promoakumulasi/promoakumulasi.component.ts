import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { SessionStorageService } from 'ngx-webstorage';

import { Subject } from 'rxjs';
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
  
  table:string='';

  promo:any=[];
  tab:string=``;
  formClass:string='hidden';
  @ViewChild(DataTableDirective)
 // dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private promoService:PromoService,private router:Router, private session:SessionStorageService) {
    this.title="";
    this.subtitle="";
    this.start_date="";
    this.end_date="";
    this.description="";
    this.cashback=0;
    this.target_akumulasi=0;
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,

    };
    this.promoService.getPromoAkumulasi().subscribe(response=>{
    this.promo=response.output_schema;
    this.dtTrigger.next();

    
  }, (err) => {
    console.log('-----> err', err);
  });
}

toggleAdd():void{
this.formClass='block';
}

addPromoAkumulasi():void{
 this.promoService.addPromoAkumulasi(this.title,this.subtitle,this.start_date,this.end_date,this.description,this.cashback,this.target_akumulasi).subscribe(response=>{
  console.log(response);
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

}
