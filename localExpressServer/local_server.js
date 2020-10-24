import express from 'express';
import renderer from './renderer.js';
import path from 'path';

const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  const content = renderer(req);
  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
