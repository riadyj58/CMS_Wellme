import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BobotResikoComponent } from './components/bobot-resiko/bobot-resiko.component';
import { HistoriPembelianNasabahComponent } from './components/histori-pembelian-nasabah/histori-pembelian-nasabah.component';
import { HistoriPembelianComponent } from './components/histori-pembelian/histori-pembelian.component';
import { HistoriPenjualanNasabahComponent } from './components/histori-penjualan-nasabah/histori-penjualan-nasabah.component';
import { HistoriPenjualanComponent } from './components/histori-penjualan/histori-penjualan.component';
import { HomeComponent } from './components/home/home.component';
import { InputNABComponent } from './components/input-nab/input-nab.component';
import { JenisReksadanaComponent } from './components/jenis-reksadana/jenis-reksadana.component';
import { LoginComponent } from './components/login/login.component';
import { ProductReksadanaComponent } from './components/product-reksadana/product-reksadana.component';
import { PromoAkumulasiComponent } from './components/promo-akumulasi/promo-akumulasi.component';
import { PromoakumulasiComponent } from './components/promoakumulasi/promoakumulasi.component';
import { PromokodeComponent } from './components/promokode/promokode.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'promoAkumulasi', component:PromoAkumulasiComponent},
  {path:'promo-akumulasi', component:PromoakumulasiComponent},
  {path:'promo-kode', component:PromokodeComponent},
  {path:'jenisReksadana', component:JenisReksadanaComponent},
  {path:'product-reksadana', component:ProductReksadanaComponent},
  {path:'histori-pembelian', component:HistoriPembelianComponent},
  {path:'histori-penjualan', component:HistoriPenjualanComponent},
  {path:'histori-pembelian-nasabah', component:HistoriPembelianNasabahComponent},
  {path:'histori-penjualan-nasabah', component:HistoriPenjualanNasabahComponent},
  {path:'bobotResiko', component:BobotResikoComponent},
  {path:'input-nab', component:InputNABComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
