// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

const FB_PROJECT_ID = 'auth0-firebase-77aad';

export const environment = {
  production: false,
  auth: {
    clientId: 'wVRcNaP01zK4mFPTTr3Mp3Kdv1mzLUtY',
    clientDomain: 'shayan-dev.au.auth0.com', 
    audience: 'http://dogs.api', 
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  },
  firebase: {
    apiKey: 'AIzaSyCtdjP8QHW-pbQ_w7fzTfHEgSY1avqmIg4',
    authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${FB_PROJECT_ID}.firebaseio.com`,
    projectId: FB_PROJECT_ID,
    storageBucket: `${FB_PROJECT_ID}.appspot.com`,
    messagingSenderId: '553832739336'
  },
  apiRoot: 'http://localhost:1337/'
};