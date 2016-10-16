const path = require('path');
const webpack = require('webpack');
const assetsPath = path.resolve(__dirname, '../public/assets');
const { webpackHost, webpackPort } = require('../config/config-env');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      `webpack-hot-middleware/client?path=http://${webpackHost}:${webpackPort}/__webpack_hmr`,
      './client/index.js',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${webpackHost}:${webpackPort}/assets/`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
    ],
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'node_modules',
      'client',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
  plugins: [  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ]
};
