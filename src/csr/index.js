import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';

import firebase_config from '../../firebase_config.js';

let config = firebase_config;
console.log('Hostname: ' + window.location.hostname);

if (window.location.hostname === 'localhost') {
  config = {
    projectId: 'fir-ch2-5cbdb',
    // databaseURL: 'http://localhost:9000/?ns=fir-ch2-5cbdb',
  };
}

console.log(config);

if (firebase.apps.length == 0) {
  firebase.initializeApp(config);
  //firebase.auth().useEmulator('http://localhost:9099/');
  firebase.database().useEmulator('localhost', 9000);
  firebase.firestore().useEmulator('localhost', 8080);
}

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
