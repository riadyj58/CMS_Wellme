import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from'@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTablesModule } from 'angular-datatables';
import { PromoAkumulasiComponent } from './components/promo-akumulasi/promo-akumulasi.component';
import { PromoakumulasiComponent } from './components/promoakumulasi/promoakumulasi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PromokodeComponent } from './components/promokode/promokode.component';
import { JenisReksadanaComponent } from './components/jenis-reksadana/jenis-reksadana.component';
import { ProductReksadanaComponent } from './components/product-reksadana/product-reksadana.component';
import { HistoriPembelianComponent } from './components/histori-pembelian/histori-pembelian.component';
import { HistoriPenjualanComponent } from './components/histori-penjualan/histori-penjualan.component';
import { HistoriPenjualanNasabahComponent } from './components/histori-penjualan-nasabah/histori-penjualan-nasabah.component';
import { HistoriPembelianNasabahComponent } from './components/histori-pembelian-nasabah/histori-pembelian-nasabah.component';
import { InputNABComponent } from './components/input-nab/input-nab.component';
import { BobotResikoComponent } from './components/bobot-resiko/bobot-resiko.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PromoAkumulasiComponent,
    PromoakumulasiComponent,
    PromokodeComponent,
    JenisReksadanaComponent,
    ProductReksadanaComponent,
    HistoriPembelianComponent,
    HistoriPenjualanComponent,
    HistoriPenjualanNasabahComponent,
    HistoriPembelianNasabahComponent,
    InputNABComponent,
    BobotResikoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
