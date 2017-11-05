const webpack = require('webpack');
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './public');

module.exports = function(env) {
  const NODE_ENV = env && env.prod ? 'production' : 'development';
  const TO_PROD = NODE_ENV === 'production';

  const plugins = [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    //new BundleAnalyzerPlugin()
  ];

  if (TO_PROD) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        mangle: true,
        sourcemap: false,
        compress: {
          booleans: true,
          conditionals: true,
          dead_code: true,
          drop_console: true,
          if_return: true,
          join_vars: true,
          sequences: true,
          unused: true,
          warnings: false,
          screw_ie8: true,
          comparisons: true,
          evaluate: true
        }
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );
  } else {
    plugins.push (
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return {
    devtool: TO_PROD ? 'null' : 'cheap-inline-module-source-map',
    context: srcPath,
    entry: {
      app: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './index.js'
      ],
      vendor: [
        'react-hot-loader/patch',
        'react',
        'react-dom',
        'redux',
        'react-redux'
      ]
    },
    output: {
      path: buildPath,
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            query: { name: '[name].[ext]' },
          },
        },
        {
          test: /\.(jpg|jpeg|gif|png)$/,
          use: {
            loader: 'url-loader',
            query: { limit: 1000, name: '[images/[name].[ext]]' }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: {
            loader: 'url-loader',
            query: { limit: 10000, name: '[fonts/[name].[ext]]' }
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ],
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        srcPath
      ],
      alias: {
        
      }
    },
    plugins,
    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },
    devServer: {
      contentBase: './public',
      publicPath: '/',
      historyApiFallback: true,
      port: 8080,
      compress: TO_PROD,
      inline: true,
      hot: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  };
};
