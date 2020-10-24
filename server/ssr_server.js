//import React from 'react';
//import { renderToString } from 'react-dom-server';
//import App from '../src/App.jsx';
import express from 'express';

const app = express();
app.get('**', (req, res) => {
  //const html = renderToString(<App />);
  //res.send(html);
  res.send('Hello World!');
});

export default app;
