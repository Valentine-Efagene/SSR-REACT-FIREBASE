import express from 'express';
import * as functions from 'firebase-functions';
import render from './render.jsx';
import path from 'path';

const ssrApp = express();
ssrApp.use(express.static(path.resolve(__dirname, '..', 'dist/ssr')));
ssrApp.get('*', render);

const csrApp = express();
csrApp.use(express.static(path.resolve(__dirname, '..', 'dist/csr'))); // Tells where to load static resources like bundle.js from
csrApp.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist/csr/index.html'));
});

exports.ssr = functions.https.onRequest(ssrApp);
exports.csr = functions.https.onRequest(csrApp);

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
