const firebase = require('firebase');
const initFb = () => {
  const config = {
    apiKey: 'AIzaSyD2yyAV6j40TlyQgg7d8tXZq0f8yaYpCbM',
    authDomain: 'porticos-18e1d.firebaseapp.com',
    databaseURL: 'https://porticos-18e1d.firebaseio.com',
    projectId: 'porticos-18e1d',
    storageBucket: 'porticos-18e1d.appspot.com',
    messagingSenderId: '578629257790',
  };
  firebase.initializeApp(config);
};
initFb();
