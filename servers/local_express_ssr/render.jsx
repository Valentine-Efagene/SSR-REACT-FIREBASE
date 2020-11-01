import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Page from '../../src/ssr/Page.jsx';
import template from './template.js';
import allReducers from '../../src/redux/reducers';

export default function render(req, res) {
  const context = {};
  const store = createStore(allReducers);
  //const preloadedState = store.getState();

  const preloadedState = { counter: 9, isLogged: false };
  const element = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
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
