import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
//import 'core-js/stable';
//import 'regenerator-runtime/runtime';
//import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import allReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Page from './Page.jsx';
//import firebase_config from '../../firebase_config.js';

/*if (__isFirebaseCSR__ && window != undefined) {
  let config = firebase_config;
  console.log('Hostname: ' + window.location.hostname);

  if (window.location.hostname === 'localhost') {
    config = {
      databaseURL: 'http://localhost:9000/?ns=fir-ch2-5cbdb',
    };
  }

  firebase.initializeApp(config);
}*/

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
  allReducers,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
