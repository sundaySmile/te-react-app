const webpack = require('webpack');
const Merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonConfig = require('./webpack.base.config.js');
const config = require('./config');
module.exports = Merge(CommonConfig, {
	entry: {
		hotMiddleware: 'webpack-hot-middleware/client'
	},
  module: {
    loaders:[
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: "[local]"
          }
        },{
          loader: 'postcss-loader'
        }]
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './www',
    port: config.dev.port,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    stats: 'minimal',
    compress: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + "/public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
		// new webpack.DllPlugin({
		// 	context: path.join(__dirname, 'www'),
		// 	path: path.join(__dirname, "www", "vendor-manifest.json")
		// 	// name: "[name]_[hash]"
		// })
		// new webpack.DllReferencePlugin({
		// 	context: path.join(__dirname, 'www'),
		// 	manifest: {
		// 		content: require('wwww/vendor-manifest.json')
		// 		// name: '[name]_[hash]'
		// 	}
		// })
  ]
});
