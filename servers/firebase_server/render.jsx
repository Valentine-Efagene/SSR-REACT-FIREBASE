import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import session from 'express-session';

import firebase_config from '../../firebase_config.js';
import Page from '../../src/ssr/Page.jsx';
import template from './template.js';
import routes from '../../src/ssr/routes.js';
import allReducers from '../../src/redux/reducers';
import wrapPath from '../../src/ssr/wrapPath.js';

async function render(req, res) {
  const context = {};
  let initialData = {};
  let userData;
  const session = req.session;
  console.log('Session: ' + session);
  console.log('Session App Visits: ' + session.appVisits);
  console.log('Session id: ' + session.id);

  if (session.appVisits) {
    session.appVisits++;
    initialData.appVisits = session.appVisits;
  } else {
    session.appVisits = 1;
    initialData.appVisits = session.appVisits;
  }

  console.log('Session App Visits: ' + session.appVisits);

  const requestUrl = wrapPath(req.url);
  const requestPath = wrapPath(req.path);
  const activeRoute = routes.find((route) => matchPath(requestPath, route));

  //console.log('Active Route: ' + activeRoute.path);
  //console.log('Active Route Component: ' + activeRoute.component);
  //console.log('Request path: ' + requestPath);

  let config = firebase_config;
  console.log('Hostname: ' + req.hostname);

  if (req.hostname === 'localhost') {
    config = {
      projectId: 'fir-ch2-5cbdb',
      databaseURL: 'http://localhost:9000/?ns=fir-ch2-5cbdb',
    };
  }

  if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
  }

  if (activeRoute && activeRoute.component.fetchData) {
    const match = matchPath(requestUrl, activeRoute);
    const index = requestUrl.indexOf('?');
    const search = index !== -1 ? requestUrl.substr(index) : null;
    /*initialData = await activeRoute.component
      .fetchData(match, search, req.headers.cookie)
      .catch((err) => {
        console.log('Fetch Error: ' + err.message);
      });*/
  }

  const store = createStore(allReducers);
  //const preloadedState = store.getState();
  const preloadedState = { counter: 9, isLogged: false, initialData, userData };
  const element = (
    <Provider store={store}>
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
