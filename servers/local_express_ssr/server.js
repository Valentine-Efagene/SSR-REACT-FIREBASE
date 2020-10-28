import express from 'express';
import render from './render.jsx';
import path from 'path';

const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'dist/ssr')));

app.get('*', render);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
