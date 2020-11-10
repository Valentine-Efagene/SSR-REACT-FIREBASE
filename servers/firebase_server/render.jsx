import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';

import firebase_config from '../../firebase_config.js';
import Page from '../../src/ssr/Page.jsx';
import template from './template.js';
import routes from '../../src/ssr/routes.js';
import allReducers from '../../src/redux/reducers';
import wrapPath from '../../src/ssr/wrapPath.js';
import store from '../../src/ssr/store.js';

async function render(req, res) {
  const context = {};
  let initialData;
  let userData;
  const session = req.session;
  console.log('Session: ' + session);
  console.log('Session App Visits: ' + session.appVisits);
  console.log('Session id: ' + session.id);

  if (session.appVisits) {
    session.appVisits++;
  } else {
    session.appVisits = 1;
  }

  console.log('Session App Visits: ' + session.appVisits);

  const requestUrl = wrapPath(req.url);
  const requestPath = wrapPath(req.path);
  const activeRoute = routes.find((route) => matchPath(requestPath, route));

  let config = firebase_config;
  console.log('Hostname: ' + req.hostname);

  if (req.hostname === 'localhost') {
    delete config.databaseURL;
    delete config.authDomain;
    delete config.storageBucket;
    console.log('Using emulator settings in server side code');

    if (firebase.apps.length == 0) {
      firebase.initializeApp(config);
      firebase.auth().useEmulator('http://localhost:9099/');
      firebase.database().useEmulator('localhost', 9000);
      firebase.firestore().useEmulator('localhost', 8080);
    }
  } else if (firebase.apps.length == 0) {
    firebase.initializeApp(config);
  }

  console.log('Active route : ');
  console.log(activeRoute);

  if (activeRoute && activeRoute.component.fetchData) {
    console.log('ActiveRoute and fetchData exist');
    const match = matchPath(requestUrl, activeRoute);
    const index = requestUrl.indexOf('?');
    const search = index !== -1 ? requestUrl.substr(index) : null;
    try {
      const dbData = await activeRoute.component.fetchData(
        match,
        search,
        req.hostname,
      );

      console.log('Database data from server: ');
      console.log(dbData);
      initialData = dbData;
    } catch (error) {
      console.log('Fetch Error: ' + error.message);
    }
  }

  const reduxStore = createStore(allReducers);
  // const preloadedState = reduxStore.getState();
  const preloadedState = {
    count: 9,
    isLogged: false,
    initialData,
    userData,
    session,
  };

  store.initialData = preloadedState.initialData;
  store.count = preloadedState.count;
  store.session = session;

  const element = (
    <Provider store={reduxStore}>
      <StaticRouter location={requestUrl} context={context}>
        <Page />
      </StaticRouter>
    </Provider>
  );
  const body = renderToString(element);

  if (context.url) {
    console.log('context URL: ' + context.url);
    res.redirect(301, context.url);
  } else {
    console.log('No context URL');
    res.send(template(body, preloadedState));
  }
}

export default render;
