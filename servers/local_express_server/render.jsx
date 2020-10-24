import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../src/App.jsx';

export default (req) => {
  const content = renderToString(<App />);

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Server-side Rendering</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${content}</div>
        <script type="text/javascript" src="app.bundle.js"></script>
        <script type="text/javascript" src="vendor.bundle.js"></script>
      </body>
    </html>
  `;
};
