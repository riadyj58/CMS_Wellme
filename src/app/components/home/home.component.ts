import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  user:string="";
  newUser:string="";
  jumlahInvestasi:string="";
  newPlanner:string="";
  myDate = new Date();
  constructor(private datePipe: DatePipe,private session:SessionStorageService,private router:Router, private sessionService:CheckSessionService,private dashboardService:DashboardService) {
 
    this.end_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.start_date=this.datePipe.transform(this.myDate.setDate(this.myDate.getDate()  -7 ), 'yyyy-MM-dd');
    
   }

  ngOnInit(): void {

    this.dashboardService.getDashboard('weekly','01-01-2019','01-01-2021').subscribe(response=> {
      console.log(response);
      this.user=response.output_schema.user;
      this.newUser=response.output_schema.new_user;
      this.jumlahInvestasi=response.output_schema.jumlah_investasi;
      this.newPlanner=response.output_schema.new_planner;
    }, (error) => {
     console.log('error -->',error);
    });

    this.sessionService.checkSession().subscribe(response=> {
      console.log(response);
      response.output_schema.session.message=="SUKSES"?null:this.router.navigate(['/login']);
      if(response.output_schema.session.message=="SUKSES"){
        this.session.store("username",response.output_schema.session.username);
        this.session.store("token",response.output_schema.session.new_token);
      }
    }, (error) => {
      error.error.output_schema.session.message=="SUKSES"?null:this.router.navigate(['/login']);
    });

    (function($) {
      var data, options;

      // headline charts
      data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [100, 29, 24, 40, 25, 24, 35],
          [14, 25, 18, 34, 29, 38, 44],
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
  
  
      // visits trend charts
      data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
          name: 'series-real',
          data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        }, {
          name: 'series-projection',
          data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],
        }]
      };
  
      options = {
        fullWidth: true,
        lineSmooth: false,
        height: "270px",
        low: 0,
        high: 'auto',
        series: {
          'series-projection': {
            showArea: true,
            showPoint: false,
            showLine: false
          },
        },
        axisX: {
          showGrid: false,
  
        },
        axisY: {
          showGrid: false,
          onlyInteger: true,
          offset: 0,
        },
        chartPadding: {
          left: 20,
          right: 20
        }
      };
  
      new Chartist.Line('#visits-trends-chart', data, options);
  
  
      // visits chart
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
  
  
      // real-time pie chart
      var sysLoad = $('#system-load').easyPieChart({
        size: 130,
        barColor: function(percent:any) {
          return "rgb(" + Math.round(200 * percent / 100) + ", " + Math.round(200 * (1.1 - percent / 100)) + ", 0)";
        },
        trackColor: 'rgba(245, 245, 245, 0.8)',
        scaleColor: false,
        lineWidth: 5,
        lineCap: "square",
        animate: 800
      });
  
      var updateInterval = 3000; // in milliseconds
  
      setInterval(function() {
        var randomVal;
        randomVal = getRandomInt(0, 100);
  
        sysLoad.data('easyPieChart').update(randomVal);
        sysLoad.find('.percent').text(randomVal);
      }, updateInterval);
  
      function getRandomInt(min:any, max:any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
    })(jQuery);

  }

}
