// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl:'http://10.8.0.5:8071/login-admin',
  checkSessionUrl:'http://10.8.0.5:8071/check-session-admin',
  logoutURL: 'http://10.8.0.5:8071/logout-admin',
  promoAkumulasiUrl: 'http://10.8.0.5:8071/cms/promo?filter=Objectives',
  addAkumulasi: 'http://10.8.0.5:8071/cms/promo/akumulasi',
  dashboardUrl:'http://10.8.0.5:8071/cms/dashboard/overview',
  dashboardPromoUrl:'http://10.8.0.5:8071/cms/dashboard/promo',
  deletePromoUrl:'http://10.8.0.5:8071/cms/promo',
  promoKodeUrl: 'http://10.8.0.5:8071/cms/promo?filter=Promotions',
  addKode: 'http://10.8.0.5:8071/cms/promo/transaksi',
  jenisReksadanaUrl:'http://10.8.0.5:8071/cms/jenis-reksadana',
  produkReksadanaUrl:'http://10.8.0.5:8071/cms/produk-reksadana',
  historiPembelianUrl:'http://10.8.0.5:8071/cms/transaction-history/pembelian',
  historiPenjualanUrl:'http://10.8.0.5:8071/cms/transaction-history/penjualan',
  bobotResikoUrl:'http://10.8.0.5:8071/cms/bobot-resiko',
  dailyNabUrl:'http://10.8.0.5:8071/cms/daily-nab/products',
  uploadProspektusUrl:'http://10.8.0.5:8098/prospektus',
  uploadfundFactUrl:'http://10.8.0.5:8098/fundfact',
  
};


// export const environment = {
//   production: true,
//   loginUrl:'http://10.8.0.4:8080/loginAdmin',
//   checkSessionUrl:'http://10.8.0.4:8080/checkSessionAdmin',
//   logoutURL: 'http://10.8.0.4:8080/logoutAdmin',
//   promoAkumulasiUrl: 'http://10.8.0.2:8091/promo?filter=Objectives',
//   addAkumulasi: 'http://10.8.0.2:8091/promo/akumulasi',
//   dashboardUrl:'http://10.8.0.2:8091/dashboard/overview',
//   dashboardPromoUrl:'http://10.8.0.2:8091/dashboard/promo',
//   deletePromoUrl:'http://10.8.0.2:8091/promo',
//   promoKodeUrl: 'http://10.8.0.2:8091/promo?filter=Promotions',
//   addKode: 'http://10.8.0.2:8091/promo/transaksi',
//   jenisReksadanaUrl:'http://10.8.0.2:8091/jenis-reksadana',
//   produkReksadanaUrl:'http://10.8.0.2:8091/produk-reksadana',
//   historiPembelianUrl:'http://10.8.0.2:8091/transaction-history/pembelian',
//   historiPenjualanUrl:'http://10.8.0.2:8091/transaction-history/penjualan',
//   bobotResikoUrl:'http://10.8.0.2:8091/bobot-resiko',
//   dailyNabUrl:'http://10.8.0.2:8091/daily-nab/products'
// };




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
