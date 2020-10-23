import React from 'react';
import ReactDOMServer from 'react-dom/server';
import About from '../../src/About.jsx';
import template from './template.js';

function render(req, res) {
  const body = renderToString(<About />);
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(template(body));
}

export default render;
