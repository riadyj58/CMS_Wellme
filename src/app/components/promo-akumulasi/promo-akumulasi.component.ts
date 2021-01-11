import { Component, OnInit, ɵConsole } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { SessionStorageService } from 'ngx-webstorage';
import { LogoutService } from 'src/app/services/logout.service';
import { PromoServiceService } from 'src/app/services/promo-service.service';
import { PromoService } from 'src/app/services/promo.service';
declare var jQuery:any;
@Component({
  selector: 'app-promo-akumulasi',
  templateUrl: './promo-akumulasi.component.html',
  styleUrls: ['./promo-akumulasi.component.css']
})
export class PromoAkumulasiComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private logoutService:LogoutService, private session:SessionStorageService) { 
    console.log("hit");

  }

  ngOnInit(): void {
    console.log("hit");
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.logoutService.logout(this.session.retrieve("token")).subscribe(response=>{
      var promos=response.output_schema;
      for (let promo in promos) {
        console.log(promo);
    }
    });
  }

}
