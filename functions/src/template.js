function template(body) {
  return `<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="app.bundle.js"></script>
      <script type="text/javascript" src="vendor.bundle.js"></script>
    </body>
  </html>`;
}

module.exports = template;

/*
<script type="text/javascript" src="../../public/app.bundle.js"></script>
      <script type="text/javascript" src="../../public/vendor.bundle.js"></script>
*/
