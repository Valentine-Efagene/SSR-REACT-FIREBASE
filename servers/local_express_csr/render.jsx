import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
//import App from '../../src/ssr/App.jsx';
import Page from '../../src/ssr/Page.jsx';
import template from './template.js';

export default function render(req, res) {
  const element = (
    <StaticRouter location={req.url} context={{}}>
      <Page />
    </StaticRouter>
  );
  const body = renderToString(element);
  res.send(template(body));
}
