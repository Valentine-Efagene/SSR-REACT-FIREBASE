// https://webpack.js.org/guides/development/
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
require('dotenv').config();

const firebaseHostingConfig = {
  mode: process.env.MODE,
  entry: { app: ['./src/csr/index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
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
            plugins: ['@babel/transform-runtime'],
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
      __isBrowser__: JSON.stringify(true),
      __isFirebaseSSR__: JSON.stringify(false),
      __isFirebaseCSR__: JSON.stringify(true),
    }),
  ],
  devtool: 'source-map',
};

const localExpressCSRBrowserConfig = {
  mode: process.env.MODE,
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
            plugins: ['@babel/transform-runtime'],
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
      __isBrowser__: JSON.stringify(true),
      __isFirebaseSSR__: JSON.stringify(false),
      __isFirebaseCSR__: JSON.stringify(true),
    }),
  ],
  devtool: 'source-map',
};

const localExpressSSRBrowserConfig = {
  mode: process.env.MODE,
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
            plugins: ['@babel/transform-runtime'],
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
      __isBrowser__: JSON.stringify(true),
      __isFirebaseSSR__: JSON.stringify(false),
      __isFirebaseCSR__: JSON.stringify(false),
    }),
  ],
  devtool: 'source-map',
};

const firebaseBrowserSSRConfig = {
  mode: process.env.MODE,
  entry: { app: ['./src/ssr/index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'functions/dist'),
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
            plugins: ['@babel/transform-runtime'],
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
      __isBrowser__: JSON.stringify(true),
      __isFirebaseSSR__: JSON.stringify(true),
      __isFirebaseCSR__: JSON.stringify(false),
    }),
  ],
  devtool: 'source-map',
};

const firebaseSsrServerConfig = {
  mode: process.env.MODE,
  entry: { server: ['./servers/firebase_server/server.js'] },
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
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: JSON.stringify(true),
      __isFirebaseSSR__: JSON.stringify(true),
      __isFirebaseCSR__: JSON.stringify(false),
    }),
  ],
  devtool: 'source-map',
};

const localExpressCSRServerConfig = {
  mode: process.env.MODE,
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
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: JSON.stringify(false),
      __isFirebaseSSR__: JSON.stringify(false),
    }),
  ],
  devtool: 'source-map',
};

const localExpressSSRServerConfig = {
  mode: process.env.MODE,
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
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: JSON.stringify(false),
      __isFirebaseSSR__: JSON.stringify(false),
      __isFirebaseCSR__: JSON.stringify(false),
    }),
  ],
  devtool: 'source-map',
};

module.exports = [
  firebaseHostingConfig,
  firebaseBrowserSSRConfig,
  firebaseSsrServerConfig,
  localExpressCSRBrowserConfig,
  localExpressSSRBrowserConfig,
  localExpressCSRServerConfig,
  localExpressSSRServerConfig,
];
