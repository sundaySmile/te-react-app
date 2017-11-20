const path = require('path');
const webpack = require('webpack');
const config = require('./config');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      resolve('app'),
      resolve('node_modules')
    ],
    extensions: ['.js', '.css', '.json'],
    alias: {
      '@': resolve('app'),
    }
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}