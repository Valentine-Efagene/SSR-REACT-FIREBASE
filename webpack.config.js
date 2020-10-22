const path = require('path');

module.exports = {
  mode: 'development',
  entry: { app: './src/index.js' },
  output: {
    /* filename: '[name].bundle.js', // DOM Rendering
    path: path.resolve(__dirname, 'public'), // DOM Rendering
    */

    filename: '[name].bundle.js', // Server-side rendering
    path: path.resolve(__dirname, 'functions/src'),  // Server-side rendering

    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                ie: '11',
                edge: '15',
                safari: '10',
                firefox: '50',
                chrome: '49',
              },
            }],
            '@babel/preset-react'
          ],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: '../',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: './public', // DOM rendering
    //contentBase: './functions/src', // Server-side rendering
    historyApiFallback: true,
    inline: true,
  },
  devtool: 'source-map',
};
