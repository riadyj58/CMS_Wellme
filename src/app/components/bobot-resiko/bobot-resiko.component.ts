import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { SessionStorageService } from 'ngx-webstorage';
import { Subject } from 'rxjs';
import { BobotResikoService } from 'src/app/services/bobot-resiko.service';
import { CheckSessionService } from 'src/app/services/check-session.service';

@Component({
  selector: 'app-bobot-resiko',
  templateUrl: './bobot-resiko.component.html',
  styleUrls: ['./bobot-resiko.component.css']
})
export class BobotResikoComponent implements OnInit {
  isLogin="hidden";
  table:string='';
  submitFormMessage:string="";
  display:string='hidden';
  loader:string="flex";

  bobotResiko:any=[];
  tab:string=``;
  formClass:string='hidden';
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  alert:string="hidden";
  alertMessage:string="";
  alertClass:string="";
  formUpdateClass:string="hidden";
  bobotResikoArray:any=[];
columnTableBobotResiko :any=[];
  idJenis:string;
  namaJenis:string;
  columnIdBobotResiko:any=[];
  bobotResikoNumber:string="";
  constructor(private fb: FormBuilder,private bobotResikoService:BobotResikoService,private router:Router, private session:SessionStorageService, private sessionService:CheckSessionService) {
  
  }
  
  ngOnInit(): void {
    this.checkSession();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      
    };
    this.getBobotResiko();
    
  }
  
  getBobotResiko():void{
    
    this.bobotResikoService.getBobotResiko().subscribe((response:any)=>{
      this.bobotResiko=response.output_schema;
      this.columnTableBobotResiko.push("Bobot Resiko")
      this.bobotResiko[0]!=null||this.bobotResiko[0]!=undefined?this.bobotResiko[0].detail_bobot_resiko.forEach((element:any)=> {
        this.columnTableBobotResiko.push(element.nama_jenis_reksadana);
        this.columnIdBobotResiko.push(element.id_jenis_reksadana)
      }):null;

      
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
      this.formClass="hidden";
      this.formUpdateClass="hidden";
    }, (err:any) => {
      console.log('-----> err', err);
    });
  }
  
  checkSession():void{

    this.sessionService.checkSession().subscribe(response=> {
      if(response.output_schema.session.message=="SUKSES"){
        this.isLogin="block";
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
  
  
  toggleAdd():void{
    this.formClass='block';
    this.formUpdateClass="hidden";
    this.resetForm();
    window.scroll(0,0);
  }
  
  updateBobotResiko(ngform:NgForm):void{

    if (ngform.valid && this.bobotResikoArray.reduce((a:any, b:any) => a + b, 0)==100){
      this.display="hidden";
      this.loader="flex";
      this.formClass='hidden';
      
      this.bobotResikoService.updateBobotResiko(this.bobotResikoNumber,this.bobotResikoArray,this.columnIdBobotResiko).subscribe(response=>{
        if(response.error_schema.error_code=="BIT-00-000")
        {
          this.alertMessage="Berhasil Mengubah ";
          this.alert="block alert-success";
          this.getBobotResiko();
        }
        else{
          this.alertMessage="Gagal Mengubah";
          this.alert="block alert-danger";
          this.getBobotResiko();
        }
        this.resetForm();
      },(err:any) => {
        this.resetForm();
        this.alertMessage="Gagal Mengubah";
        this.alert="block alert-danger";
        this.formClass="hidden";
        this.formUpdateClass="hidden";
        this.getBobotResiko();
        console.log('-----> err', err);
      });
      
    }
    else{
      this.submitFormMessage=this.validationMessage();
    }
    
    
    
  }


  validationMessage():string
  {
    
    var temp="";
    if (this.bobotResikoArray.reduce((a:any, b:any) => a + b, 0)!=100){
      temp+="Jumlah Persentase Tidak 100";
    } else 
    {
      temp+="Kolom Tidak Bole Ada yang Kosong"; 
    }
    return temp
  }

  onSelect(selectedItem: any) {
    this.bobotResikoArray=[];
    this.formUpdateClass="block";
    this.formClass="hidden";
    this.bobotResikoNumber=selectedItem.bobot_resiko;
  
    selectedItem.detail_bobot_resiko.forEach((element:any) => {
      this.bobotResikoArray.push(element.persentase);
 
    });
    window.scroll(0,0);
  }
  
  resetForm():void
  {
 this.bobotResikoArray=[];
 this.bobotResikoNumber="";
 this.columnIdBobotResiko=[];
 this.columnTableBobotResiko=[];
 this.submitFormMessage="";
     }


}
