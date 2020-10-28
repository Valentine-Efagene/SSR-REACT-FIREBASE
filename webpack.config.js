const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const browserCSRConfig = {
  mode: 'development',
  entry: { app: ['./src/csr/index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/csr'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: '11',
                    edge: '15',
                    safari: '10',
                    firefox: '50',
                    chrome: '49',
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
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
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
  devtool: 'source-map',
};

const browserSSRConfig = {
  mode: 'development',
  entry: { app: ['./src/ssr/index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/ssr'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: '11',
                    edge: '15',
                    safari: '10',
                    firefox: '50',
                    chrome: '49',
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
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
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
  devtool: 'source-map',
};

const firebaseSsrServerConfig = {
  mode: 'development',
  entry: { server: ['./servers/firebase_ssr_server/ssr_server.js'] },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'functions'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { node: '10' },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

const localExpressCSRServerConfig = {
  mode: 'development',
  entry: { server: ['./servers/local_express_csr/server.js'] },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'local_express_csr_server.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { node: '10' },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

const localExpressSSRServerConfig = {
  mode: 'development',
  entry: { server: ['./servers/local_express_ssr/server.js'] },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'local_express_ssr_server.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { node: '10' },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = [
  browserCSRConfig,
  browserSSRConfig,
  firebaseSsrServerConfig,
  localExpressCSRServerConfig,
  localExpressSSRServerConfig,
];
