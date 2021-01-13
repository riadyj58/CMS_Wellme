import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { SessionStorageService } from 'ngx-webstorage';
import { Subject } from 'rxjs';
import { CheckSessionService } from 'src/app/services/check-session.service';
import { JenisReksadanaService } from 'src/app/services/jenis-reksadana.service';

@Component({
  selector: 'app-jenis-reksadana',
  templateUrl: './jenis-reksadana.component.html',
  styleUrls: ['./jenis-reksadana.component.css']
})
export class JenisReksadanaComponent implements OnInit {
  @Input() title:string="";
  @Input() subtitle:string="";
  @Input() start_date:string="";
  @Input() end_date:string="";
  @Input() description:string="";
  @Input() cashback:number=0;
  @Input() minimum_transaksi:number=0;
  isLogin="hidden";
  table:string='';
  submitFormMessage:string="";
  display:string='hidden';
  loader:string="flex";
  kodePromo:string="";
  jenisReksadana:any=[];
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
  formUpdateClass:string="hidden";

  idJenis:string;
  namaJenis:string;
  constructor(private fb: FormBuilder,private jenisReksadanaService:JenisReksadanaService,private router:Router, private session:SessionStorageService, private sessionService:CheckSessionService) {
  
  }
  
  ngOnInit(): void {
    this.checkSession();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      
    };
    this.getJenisReksadana();
    
  }
  
  getJenisReksadana():void{
    
    this.jenisReksadanaService.getJenisReksadana().subscribe((response:any)=>{
      this.jenisReksadana=response.output_schema;
      console.log(this.jenisReksadana);
      
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
    this.formUpdateClass="hidden";
    this.resetForm();
    window.scroll(0,0);
  }
  
  addJenisReksadana(ngform:NgForm):void{
    
    
    if (ngform.valid){
      this.display="hidden";
      this.loader="flex";
      this.formClass='hidden';
      
      this.jenisReksadanaService.addJenisReksadana(this.namaJenis).subscribe(response=>{
        console.log(response);
        if(response.error_schema.error_code=="BIT-00-000")
        {
          this.alertMessage="Berhasil Menambahkan ";
          this.alert="block alert-success";
          
          
          this.getJenisReksadana();
        }
        else{
          this.alertMessage="Gagal Menambahkan";
          this.alert="block alert-danger";
          this.getJenisReksadana();
        }
        this.resetForm();
        
      },(err:any) => {
        this.resetForm();
        this.alertMessage="Gagal Menambahkan";
        this.alert="block alert-danger";
        this.formClass="hidden";
        this.formUpdateClass="hidden";
        this.getJenisReksadana();
        console.log('-----> err', err);
      });
      
    }
    else{
      this.submitFormMessage=this.validationMessage();
    }
    
    
  }
  
  updateJenisReksadana(ngform:NgForm):void{
    
    
    if (ngform.valid){
      this.display="hidden";
      this.loader="flex";
      this.formClass='hidden';
      
      this.jenisReksadanaService.updateJenisReksadana(this.idJenis,this.namaJenis).subscribe(response=>{
        if(response.error_schema.error_code=="BIT-00-000")
        {
          this.alertMessage="Berhasil Menambahkan ";
          this.alert="block alert-success";
          this.getJenisReksadana();
        }
        else{
          this.alertMessage="Gagal Menambahkan";
          this.alert="block alert-danger";
          this.getJenisReksadana();
        }
        this.resetForm();
      },(err:any) => {
        this.resetForm();
        this.alertMessage="Gagal Menambahkan";
        this.alert="block alert-danger";
        this.formClass="hidden";
        this.formUpdateClass="hidden";
        this.getJenisReksadana();
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
    if (this.namaJenis==""){
      temp+="Nama Jenis Tidak Boleh Kosong"
    }    if (this.namaJenis.length>30)
    {
      temp+="- Panjang Nama Jenis Tidak Boleh Lebih Dari 30 Karakter"; 
    }
    return temp
  }

  onSelect(selectedItem: any) {
  
    this.resetForm();
    this.formUpdateClass="block";
    this.formClass="hidden";
    this.idJenis=selectedItem.id_jenis;
    this.namaJenis=selectedItem.nama_jenis;
    window.scroll(0,0);
  }
  
  resetForm():void
  {
    this.idJenis="";
    this.namaJenis="";
    this.kodePromo="";
    this.title="";
    this.subtitle="";
    this.start_date="";
    this.end_date="";
    this.description="";
    this.cashback=0;
    this.minimum_transaksi=0;
  }

}
