import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PromoAkumulasiComponent } from './components/promo-akumulasi/promo-akumulasi.component';
import { PromoakumulasiComponent } from './components/promoakumulasi/promoakumulasi.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'promoAkumulasi', component:PromoAkumulasiComponent},
  {path:'promoakumulasi', component:PromoakumulasiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
