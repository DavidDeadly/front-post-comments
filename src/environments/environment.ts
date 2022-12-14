// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'sofkapostandcomments',
    appId: '1:1088865971980:web:50317077830eea05512329',
    storageBucket: 'sofkapostandcomments.appspot.com',
    apiKey: 'AIzaSyBquJdIKMcal07SxYkzfxBWrKU_6qT0JBE',
    authDomain: 'sofkapostandcomments.firebaseapp.com',
    messagingSenderId: '1088865971980',
  },
  ALPHA_URL: "http://127.0.0.1:8080/",
  BETA_URL: "http://127.0.0.1:8081/",
  GAMA_URL: "ws://127.0.0.1:8082/",
  // ALPHA_URL: "https://alpha-daviddeadly.herokuapp.com/",
  // BETA_URL: "https://beta-daviddeadly.herokuapp.com/",
  // GAMA_URL: "wss://gama-daviddeadly.herokuapp.com/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
