import dotenv from 'dotenv';
import express from 'express';
import SourceMapSupport from 'source-map-support';
import render from './render.jsx';

const app = express();

SourceMapSupport.install();
dotenv.config();
const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';

if (enableHMR && process.env.NODE_ENV !== 'production') {
  console.log('Adding dev middlware, enabling HMR');
  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('../../webpack.config.js')[0];
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.get('*', (req, res, next) => {
  render(req, res, next);
});

if (module.hot) {
  module.hot.accept('./render.jsx');
}

// export default ssrServer = functions.https.onRequest(app);
export default app;
