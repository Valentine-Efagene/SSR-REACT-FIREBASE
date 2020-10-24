import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
// Just importing a jsx here causes a react-univeral/lib/ not found error
import App from '../src/App.jsx';
import express from 'express';
import fs from 'fs';

const app = express();

app.get('**', (req, res) => {
  const body = renderToString(React.createElement(App));
  fs.readFile('../public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading index.html');
    }

    const finalHtml = data.replace('<!-- ::APP:: -->', body);
    res.status(200).send(finalHtml);
  });
});

// app.use(express.static(path.resolve(__dirname, '..', 'public')));

export default app;
