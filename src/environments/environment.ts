// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl:'http://localhost:4200/loginrequest',
  checkSessionUrl:'http://localhost:4200/checkSession',
  logoutURL: 'http://localhost:4200/logout',
  promoAkumulasiUrl: 'http://localhost:4200/promoAkumulasiAPI',
  addAkumulasi: 'http://localhost:4200/promo/akumulasi',
  dashboardUrl:'http://localhost:4200/dashboard/overview',
  deletePromoUrl:'http://localhost:4200/deactivatePromo',
  promoKodeUrl: 'http://localhost:4200/promoKodeAPI',
  addKode: 'http://localhost:4200/promo/transaksi',
  jenisReksadanaUrl:'http://localhost:4200/jenis-reksadana'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
