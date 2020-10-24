import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';

export default (req) => {
  const content = renderToString(<App />);

  return `
    <html>
      <body>Local
        <div id="root">${content}</div>
        <script type="text/javascript" src="app.bundle.js"></script>
        <script type="text/javascript" src="vendor.bundle.js"></script>
      </body>
    </html>
  `;
};
