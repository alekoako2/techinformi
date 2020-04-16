// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  hmr: true,
  production: false,
  graphqlLink: 'http://localhost:4000/graphql',
  firebase: {
    databaseURL: 'https://techinform-40dd4.firebaseio.com',
    apiKey: 'AIzaSyCjE7e6B4NnhJPxZQChlaLZDHg54YwunKE',
    authDomain: 'techinform-40dd4.firebaseapp.com',
    storageBucket: 'techinform-40dd4.appspot.com',
    appId: '1:205412723156:web:e9f9f47d757619e4',
    messagingSenderId: '205412723156',
    projectId: 'techinform-40dd4',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
