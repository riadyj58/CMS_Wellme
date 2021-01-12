import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { CheckSessionService } from 'src/app/services/check-session.service';
import { DashboardService } from 'src/app/services/dashboard.service';
declare var jQuery: any;
declare var Chartist:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  @Input() start_date:string|null;
  @Input() end_date:string|null;
  @Input() chart_type:string='daily';
  xAxis:any=[];
  yAxisPembelian:any=[];
  yAxisPenjualan:any=[];
  display:string="hidden";
  user:string="";
  newUser:string="";
  jumlahInvestasi:string="";
  loader:string="";
  newPlanner:string="";
  nowDate = new Date();
  isLogin="hidden";
  total_penjualan=0;
  percentage_total_penjualan=0;
  iconTotalPenjualan="";
  total_asset=0;
  percentage_total_asset=0;
  iconTotalAsset="";
  constructor(private datePipe: DatePipe,private session:SessionStorageService,private router:Router, private sessionService:CheckSessionService,private dashboardService:DashboardService) {
    
    this.end_date = this.datePipe.transform(this.nowDate, 'yyyy-MM-dd');
    this.start_date=this.datePipe.transform(this.nowDate.setDate(this.nowDate.getDate()  -7 ), 'yyyy-MM-dd');
    
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
  
  ngOnInit(): void {  

    
    this.checkSession();
    this.renderOverview();
   
    
      (function($){
        var data, options;
        
        data = {
          labels: ['Akhir Tahun', 'Lebaran', 'Waktu Indonesia Belanja','Promo BCA'],
          series: [
            [13000, 37201, 45000, 82000]
          ]
        };
        
        options = {
          height: 300,
          axisX: {
            showGrid: false
          },
        };
        
        new Chartist.Bar('#visits-chart', data, options);
        
      })(jQuery);
    
    
    
    
    
    
    
    
    
  }



  resetOverview():void{
    
    this.xAxis=[];
    this.yAxisPembelian=[];
    this.yAxisPenjualan=[];
    this.loader="flex";
    this.display="hidden";``
  }
  renderOverview():void{
    this.resetOverview();
    this.dashboardService.getDashboard(this.chart_type,this.datePipe.transform(this.start_date, 'dd-MM-yyyy'),this.datePipe.transform(this.end_date, 'dd-MM-yyyy')).subscribe(response=> {
      
      this.user=response.output_schema.user;
      this.newUser=response.output_schema.new_user;
      this.jumlahInvestasi=response.output_schema.jumlah_investasi;
      this.newPlanner=response.output_schema.new_planner;
      
      response.output_schema.chart_pembelian!=null?response.output_schema.chart_pembelian.forEach((element:any)=> {
        this.xAxis.push(element.date);
        this.yAxisPembelian.push(element.value);
      }):null;
      response.output_schema.chart_penjualan!=null?response.output_schema.chart_penjualan.forEach((element:any)=> {
        
        this.yAxisPenjualan.push(element.value);
      }):null;
      jQuery.xAxis=this.xAxis;
      jQuery.yAxisPembelian=this.yAxisPembelian;
      jQuery.yAxisPenjualan=this.yAxisPenjualan;

      (function($){
        var data, options;
        // headline charts
        data = {
          labels: jQuery.xAxis,
          series: [
            jQuery.yAxisPembelian,
            jQuery.yAxisPenjualan,
            
          ]
        };
        
        options = {
          height: 300,
          showArea: false,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          axisX: {
            showGrid: false
          },
          lineSmooth: false,
        };
        
        new Chartist.Line('#headline-chart', data, options);
      }(jQuery));  
        var lastItemPembelian = this.yAxisPembelian.slice(-1)[0];
    var lastItemPenjualan = this.yAxisPenjualan.slice(-1)[0];
    
    lastItemPembelian=lastItemPembelian==undefined?0:lastItemPembelian;
    lastItemPenjualan=lastItemPenjualan==undefined?0:lastItemPenjualan;

//fa fa-caret-up text-success
//fa fa-caret-down text-danger
this.total_penjualan=lastItemPembelian;
var penjualanPeriodeSebelumnya=this.yAxisPembelian.slice(-2)[0];


penjualanPeriodeSebelumnya=penjualanPeriodeSebelumnya==undefined||penjualanPeriodeSebelumnya==null?this.total_penjualan*100:penjualanPeriodeSebelumnya;

this.percentage_total_penjualan = (-(penjualanPeriodeSebelumnya/(this.total_penjualan==0?1:this.total_penjualan))+1)*100;
this.percentage_total_penjualan>=0?this.iconTotalPenjualan="fa fa-caret-up text-success":"fa fa-caret-down text-danger";


this.total_asset=lastItemPembelian-lastItemPenjualan;
var transaksiJualPeriodeSebelumnya=this.yAxisPenjualan.slice(-2)[0];
transaksiJualPeriodeSebelumnya=transaksiJualPeriodeSebelumnya==undefined||transaksiJualPeriodeSebelumnya==null?this.total_asset:transaksiJualPeriodeSebelumnya;
this.percentage_total_asset = ((penjualanPeriodeSebelumnya/(transaksiJualPeriodeSebelumnya==0?1:transaksiJualPeriodeSebelumnya)*100)-100);
this.percentage_total_asset>=0?this.iconTotalAsset="fa fa-caret-up text-success":"fa fa-caret-down text-danger";
// percentage_total_asset=0;
// iconTotalAsset="";
      this.display="block"
      this.loader="hidden";
    }, (error) => {
      console.log('error -->',error);
    });

    
  
  }
  
  reRenderOverview():void{
    this.renderOverview();
  }
  
}