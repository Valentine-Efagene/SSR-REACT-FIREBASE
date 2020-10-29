import express from 'express';
import path from 'path';

const port = process.env.PORT || 3002;
const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'dist/csr'))); // Tells where to load static resources like bundle.js from
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist/csr/index.html'));
});
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
