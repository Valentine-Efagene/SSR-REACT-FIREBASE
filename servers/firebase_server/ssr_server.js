import path from 'path';
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';

import render from './render.jsx';

dotenv.config();

const secret = 'nskjdvnskj';
console.log('Secret: ' + secret);

const app = express();
app.use(express.static(path.resolve(__dirname, 'dist')));
// MaxAge is in milliseconds
app.use(
  session({
    secret: 'keyboard cat',
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  }),
);
// Placing the static middleware between the session middleware initializasion
// and the get request (right here) caused the sessions not to save.
app.get('*', render);

export default app;
