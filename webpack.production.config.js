const webpack = require('webpack');
const Merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = Merge(CommonConfig,{
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[local]"
            }
          },{
            loader: 'postcss-loader',
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-cssnext"),
                require("postcss-nested"),
                require("postcss-import"),
                require("postcss-flexbugs-fixes")
              ]
            }
          }]
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin('Created at ' + new Date()),
    new CleanWebpackPlugin(['www/*']),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
      // disable: process.env.NODE_ENV === "development" [name].[contenthash]
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: __dirname + "/public/index.html",
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + "/public/index.html"
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
		})
  ]
});
