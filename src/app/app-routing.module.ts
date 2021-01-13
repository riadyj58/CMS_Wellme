import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JenisReksadanaComponent } from './components/jenis-reksadana/jenis-reksadana.component';
import { LoginComponent } from './components/login/login.component';
import { PromoAkumulasiComponent } from './components/promo-akumulasi/promo-akumulasi.component';
import { PromoakumulasiComponent } from './components/promoakumulasi/promoakumulasi.component';
import { PromokodeComponent } from './components/promokode/promokode.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'promoAkumulasi', component:PromoAkumulasiComponent},
  {path:'promoakumulasi', component:PromoakumulasiComponent},
  {path:'promokode', component:PromokodeComponent},
  {path:'jenisReksadana', component:JenisReksadanaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
