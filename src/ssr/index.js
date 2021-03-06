import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { config } from '@fortawesome/fontawesome-svg-core';

import allReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Page from './Page.jsx';
import firebase_config from '../../firebase_config.js';
import store from './store.js';

let fireabaseConfig = firebase_config;

if (__isBrowser__ && typeof window !== 'undefined') {
  if (window.location.hostname === 'localhost') {
    delete fireabaseConfig.databaseURL;
    delete fireabaseConfig.authDomain;
    delete fireabaseConfig.storageBucket;

    if (firebase.apps.length == 0) {
      firebase.initializeApp(fireabaseConfig);
      firebase.auth().useEmulator('http://localhost:9099/');
      firebase.database().useEmulator('localhost', 9000);
      firebase.firestore().useEmulator('localhost', 8080);
    }
  } else {
    if (firebase.apps.length == 0) {
      firebase.initializeApp(fireabaseConfig);
    }
  }
}

const preloadedState = window.__PRELOADED_STATE__;
store.initialData = preloadedState.initialData;
store.count = preloadedState.count;
store.session = preloadedState.session;
delete window.__PRELOADED_STATE__;

// https://github.com/zalmoxisus/redux-devtools-extension
const reduxStore = createStore(
  allReducers,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

config.autoAddCss = false;

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
