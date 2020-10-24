import express from 'express';
import * as functions from 'firebase-functions';
import renderer from './render.jsx';
import path from 'path';

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  const content = renderer(req);
  res.send(content);
});

exports.ssr = functions.https.onRequest(app);

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
