require('ignore-styles');
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const functions = require('firebase-functions');
const template = require('./src/template.js');
const React = require('react');
const About = require('./src/About.js').default;
const App = require('./src/App.js').default;
const Test = require('./src/Test.js').default;
const ReactDOMServer = require('react-dom/server');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});

// http://localhost:5001/fir-ch2-5cbdb/us-central1/ssrTest
exports.ssrTest = functions.https.onRequest((req, res) => {
  const body = ReactDOMServer.renderToString(
    React.createElement(About),
  );
  res.status(200).send(template(body));
});

// http://localhost:5001/fir-ch2-5cbdb/us-central1/ssr
exports.ssr = functions.https.onRequest((req, res) => {
  const body = ReactDOMServer.renderToString(
    React.createElement(App),
  );
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.status(200).send(template(body));
});