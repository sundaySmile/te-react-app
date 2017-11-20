// https://github.com/shelljs/shelljs
require('shelljs/global');

var path = require('path');
var config = require('../config');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('../webpack.production.config.js');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
);

var spinner = ora('building for production...');
spinner.start();

// var assetsPath = config.build.assetsRoot;
// rm('-rf', assetsPath);
// mkdir('-p', assetsPath);
// mkdir('-p', config.tplTo);
// cp('-R', config.tplFrom, config.tplTo);

webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});
