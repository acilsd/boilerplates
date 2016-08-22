'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');


module.exports = {
  context: path.join(__dirname, '/src'),
  entry: ['babel-polyfill', './index'],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
  watch: NODE_ENV == 'development',
  watchOption: {
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url-loader?limit=10000&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,        
        loaders: [ 'style', 'css?sourceMap', 'postcss', 'sass?sourceMap' ]
      },
      {
        test: /\.styl$/,
        loaders: [ 'style', 'css?sourceMap', 'postcss', 'stylus']
      }
    ]
  },
  postcss: function(){
    return {
      plugins: [autoprefixer({browsers: ['last 2 versions', 'IE 10']})]
    };
  },
  devServer: {
    devtool: 'cheap-inline-module-source-map',
    hot: true,
    historyApiFallback: true
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:       false,
        drop_console:   true,
        unsafe:         true
      }
    }),
    new webpack.optimize.DedupePlugin()
  );
}
