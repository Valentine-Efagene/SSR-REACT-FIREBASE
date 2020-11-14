import serialize from 'serialize-javascript';
import { dom } from '@fortawesome/fontawesome-svg-core';

export default function template(body, preloadedState) {
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Server-side Rendering</title>
        <style type="text/css">${dom.css()}</style>
        <link rel="stylesheet" href="assets/css/styles.css" >
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
        </script>
        <script type="text/javascript" src="app.bundle.js"></script>
        <script type="text/javascript" src="vendor.bundle.js"></script>
      </body>
    </html>
  `;
}
