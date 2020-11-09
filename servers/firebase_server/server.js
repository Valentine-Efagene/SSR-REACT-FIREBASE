import express from 'express';
import * as functions from 'firebase-functions';
import path from 'path';
import ssrApp from './ssr_server.js';
import sessionTest from '../session_test';

/*const csrApp = express();
csrApp.use(express.static(path.resolve(__dirname, 'dist/csr'))); // Tells where to load static resources like bundle.js from
csrApp.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/csr/index.html'));
});
exports.csr = functions.https.onRequest(csrApp);*/

exports.ssr = functions.https.onRequest(ssrApp);
exports.sessiontest = functions.https.onRequest(sessionTest);

// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1; // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});
